import config from "../config.js";
import { Art, fire_admin, Followers, Users } from "../firebase/index.js";
import { filterFuncs, filters } from "./artFilters.js";
import { addLog } from "./userCont.js";


const getRatings = async (art_ref)=>{
    const lcol = art_ref.collection("likes");
    const dcol = art_ref.collection("dislikes");
    const likes = (await lcol.count().get()).data().count;
    const dislikes = (await dcol.count().get()).data().count;
    return { likes, dislikes, lcol, dcol };
}
const getArtData = async (art_doc, uid=null)=>{
    
    if (!art_doc?.exists) return null;
    const art_ref = art_doc.ref;    

    const { likes, dislikes, lcol, dcol } = await getRatings(art_ref);

    let user_rating = null;
    if (uid) {
        if (lcol && (await lcol.doc(uid).get()).exists) {
            user_rating = "likes";
        }
        else if (dcol && (await dcol.doc(uid).get()).exists) {
            user_rating = "dislikes";
        }
    }

    const data = art_doc.id;
    const { artist, owner, cost } = art_doc.data();

    return {
        artist: artist.username,
        owner: owner.username,
        cost, data, likes, dislikes, user_rating
    }
}


/** 
 * @param {Request} req
 * @param {Response} res */
export const doesExist = async (req, res)=>{
    const { data } = req.params;
    
    const art_ref = Art.doc(data);
    const art_doc = await art_ref.get();
    
    let exists = art_doc.exists;
    let owner_name, cost = null;

    if (exists) {
        const owner = await Users.doc(art_doc.data().owner.uid).get();
        if (!owner.exists) {
            await art_ref.delete();
            exists = false;
        } else {
            owner_name = owner.data().username;
            cost = art_doc.data().cost;
        }
    }

    return [200, `Art already exists: ${exists}`, {
        exists,
        for_sale: owner_name ? cost > 0 : null,
        cost,
        owner: owner_name ?? null
    }];
}

/** 
 * @param {Request} req
 * @param {Response} res */
export const publishArt = async (req, res)=>{
    const { data } = req.body;

    if (!data) return [400, "No <data> property in request body!"];

    const art_doc = await Art.doc(data).get();
    if (art_doc.exists) return [400, "That art piece already exists!"];

    await Users.doc(req.uid).update({
        coins: fire_admin.firestore.FieldValue.increment(-config.art_cost),
    });

    await Art.doc(data).create({
        artist: {
            uid: req.uid,
            username: req.username,
        },
        owner: {
            uid: req.uid,
            username: req.username,
        },
        timestamp: fire_admin.firestore.FieldValue.serverTimestamp(),
        cost: 0,
    });

    return [200, "Art created!"];
}

/** 
 * @param {Request} req
 * @param {Response} res */
export const getGallery = async (req, res)=>{
    const { username } = req.params;

    if (!username) return [400, "No username in request parameters!"];

    const user_qry = await Users.where("username", "==", username).get();
    if (user_qry.docs.length == 0) return [400, "User does not exist!"];
    if (user_qry.docs.length > 1) return [500, "Somehow multiple users have that same username..."];
    
    const user = user_qry.docs[0];
    const owner_uid = user.id;

    const art_snap = await Art.where("owner.uid", "==", owner_uid).get();
    const art_docs = await Promise.all(art_snap.docs.map((art_doc)=> getArtData(art_doc, req.uid)));

    const following = req.uid != undefined && (await Followers.where("following.username", "==", username).where("follower.uid", "==", req.uid).limit(1).get()).docs[0]?.exists === true;    

    return [200, "Here ya' go!", { gallery: art_docs, following }];
}

/** 
 * @param {Request} req
 * @param {Response} res */
export const rateArt = async (req, res)=>{
    const { type, data } = req.body;

    if (!type) return [400, "Missing 'type' in request body"];
    if (type != "likes" && type != "dislikes") return [400, "'type' in request body must equal 'likes' or 'dislikes'"];
    if (!data) return [400, "Missing 'data' in request body"];

    const art_doc = await Art.doc(data).get();

    if (!art_doc.exists) return [400, "No art matches that data!"];

    const rater = await art_doc.ref.collection(type).doc(req.uid).get();

    if (rater.exists) {
        rater.ref.delete();
        return [200, `You un${type.slice(0, -1)}d it!`];
    }

    const swapper = {
        likes: "dislikes", dislikes: "likes"
    }

    const swap = swapper[type];

    if (swap == undefined) return [500, "I messed up ):"];

    const swap_rater = await art_doc.ref.collection(swap).doc(req.uid).get();

    let swap_rating = false;

    if (swap_rater.exists) {
        swap_rater.ref.delete();
        swap_rating = true;
    }

    rater.ref.create({ });

    // if (!swap_rating) {
    //     await Users.doc(req.uid).update({
    //         coins: fire_admin.firestore.FieldValue.increment(1),
    //     });
    // }

    return [200, `You ${type.slice(0, -1)}d art!`, { swap_rating }];
}

/** 
 * @param {Request} req
 * @param {Response} res */
export const authGallery = async (req, res)=>{
    const art_snap = await Art.where("owner.uid", "==", req.uid).get();
    const art_docs = await Promise.all(art_snap.docs.map((art_doc)=> getArtData(art_doc, req.uid)));

    // console.log(art_docs[0])

    return [200, "Here ya' go!", { gallery: art_docs }];
}

/** 
 * @param {Request} req
 * @param {Response} res */
export const purchase = async (req, res)=>{
    const { data } = req.body;

    if (!data) return [400, "Missing 'data' in request body!"];

    const art_doc = await Art.doc(data).get();

    if (!art_doc.exists) return [400, "No art matches that data!"];

    const art_data = art_doc.data();

    if (art_data.owner.uid == req.uid) return [400, "You already own this art!"];
    if (art_data.cost <= 0) return [400, "This art is not for sale!"];

    const buyer_doc = await Users.doc(req.uid).get();

    if (!buyer_doc.exists) return [400, "You don't exist in the database!"];
    if (buyer_doc.data().coins < art_data.cost) return [400, "You don't have enough money to purchase this art piece!"];

    const prev_owner = art_data.owner.uid;
    const prev_cost = art_data.cost;
    art_data.owner.uid = buyer_doc.id;
    art_data.owner.username = buyer_doc.data().username;
    art_data.cost = 0;

    await art_doc.ref.set(art_data);

    await Users.doc(req.uid).update({
        coins: fire_admin.firestore.FieldValue.increment(-prev_cost),
    });

    await Users.doc(prev_owner).update({
        coins: fire_admin.firestore.FieldValue.increment(prev_cost),
    });

    if (await addLog(prev_owner, `${art_data.owner.username} bought your art!`)) {
        console.log("Added log!");
    } else {
        console.log("No log!");
    }

    return [200, "You are now the proud owner of a new art piece!"];
}

/** 
 * @param {Request} req
 * @param {Response} res */
export const getByFilter = async (req, res)=>{
    let { filter, page_size, page } = req.params;

    if (isNaN(+page_size) || isNaN(+page) || page_size.includes(".") || page.includes(".")) return [400, "Parameters need to be /api/art/filter-by/<filter:string>/<page_size:int>/<page:int>"];
    if (!filters.includes(filter)) return [400, `The available filters are: ${filters.slice(0, -1).join(", ")}, and ${filters.at(-1)}`]

    if (typeof filterFuncs[filter] != "function") return [500, "Filter not implemented yet!"];

    try {
        const result = await filterFuncs[filter](+page_size, +page, req.uid);
        return [200, "Here ya go!", { result }];
    } catch(err) {
        console.log(err);
        return [500, "Can't get art and I don't know why!!"];
    }
}

/** 
 * @param {Request} req
 * @param {Response} res */
export const setCost = async (req, res)=>{
    const { data, cost } = req.body;

    if (!data || cost == undefined) return [400, "Missing 'data' or 'cost' property of request body!"];

    if (isNaN(+cost) || `${cost}`.includes(".") || +cost < 0) return [400, "'cost' property of request body must be a positive integer!"];
    
    const art_doc = await Art.doc(data).get();

    if (!art_doc.exists) return [400, "That art doesn't exist in the database!"];

    if (req.uid != art_doc.data().owner.uid) return [401, "You don't own this art!"];

    if (+cost >= 99999) return [400, "Yeah... that's a little too expensive!"];

    await art_doc.ref.update({
        cost: +cost
    });

    return [200, "Cost successfully updated!"];
}

/** 
 * @param {Request} req
 * @param {Response} res */
export const dataOnOne = async (req, res)=>{
    const art_doc = await Art.doc(req.params.data).get();
    const { owner, artist, cost } = art_doc.data();
    const { likes, dislikes } = await getRatings(art_doc.ref);

    return [200, "Here ya go!", {
        artist: artist.username,
        owner: owner.username,
        cost, likes, dislikes
    }];
}

/** 
 * @param {Request} req
 * @param {Response} res */
export const threeRandom = async (req, res)=>{
    const art_count = (await Art.count().get()).data().count;
    const rand_index = Math.floor(Math.random() * (art_count-4));
    const three = await Art.limit(3).offset(rand_index).get();

    const result = await Promise.all(three.docs.map((art_doc)=> getArtData(art_doc, req.uid)));

    return [200, "Here ya' go!", { result }];
}
