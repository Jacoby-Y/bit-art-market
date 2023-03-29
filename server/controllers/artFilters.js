import { Art } from "../firebase/index.js";

export const filters = ["new", "old", "expensive", "cheap", "popular", "unpopular", "controversial"];

const getRatings = async (doc_ref)=>{
    return {
        likes: (await doc_ref.collection("likes").count().get()).data().count,
        dislikes: (await doc_ref.collection("dislikes").count().get()).data().count,
    }
}

const sliceQuery = async (query, page_size, page, uid=null)=>{
    const snapshot = await query.limit(page_size).offset(page * page_size).get();
    const docs = await Promise.all(snapshot.docs.map(async (doc)=>{
        const { artist, owner, cost } = doc.data();

        let user_rating = null;

        if (uid != null) {
            if ((await doc.ref.collection("likes").doc(uid).get()).exists) {
                user_rating = "likes";
            }
            else if ((await doc.ref.collection("dislikes").doc(uid).get()).exists) {
                user_rating = "dislikes";
            }
        }

        return {
            data: doc.id,
            artist: artist.username,
            owner: owner.username,
            // timestamp: doc.data().timestamp._seconds,
            cost,
            user_rating,
            ...(await getRatings(doc.ref)),
        }
    }));
    return docs;
}

const sortSliceQuery = async (query, page_size, page, sorter, uid=null)=>{
    const docs = (await Promise.all(query.docs.map(async (doc)=>{
        const { artist, owner, cost } = doc.data();

        let user_rating = null;

        if (uid != null) {
            if ((await doc.ref.collection("likes").doc(uid).get()).exists) {
                user_rating = "likes";
            }
            else if ((await doc.ref.collection("dislikes").doc(uid).get()).exists) {
                user_rating = "dislikes";
            }
        }

        return {
            data: doc.id,
            artist: artist.username,
            owner: owner.username,
            // timestamp: doc.data().timestamp._seconds,
            cost,
            user_rating,
            ...(await getRatings(doc.ref)),
        }
    }))).sort(sorter).slice(page_size * page, page_size * page + page_size);
    return docs;
}

const sortByNew = async (page_size, page, uid)=>{
    // .startAt(page_size * page).endBefore(page_size * page + page_size)
    const query = Art.orderBy("timestamp", "desc");
    return sliceQuery(query, page_size, page, uid);
}

const sortByOld = async (page_size, page, uid)=>{
    // .startAt(page_size * page).endBefore(page_size * page + page_size)
    const query = Art.orderBy("timestamp", "asc");
    return sliceQuery(query, page_size, page, uid);
}

const sortByExpensive = async (page_size, page, uid)=>{
    const query = Art.orderBy("cost", "desc").where("cost", ">", 0);
    return sliceQuery(query, page_size, page, uid);
}

const sortByCheap = async (page_size, page, uid)=>{
    const query = Art.orderBy("cost", "asc").where("cost", ">", 0);
    return sliceQuery(query, page_size, page, uid);
}

const sortByPopular = async (page_size, page, uid)=>{
    const query = await Art.get();
    return await sortSliceQuery(query, page_size, page, ((a, b)=> (b.likes - b.dislikes) - (a.likes - a.dislikes)), uid);
}

const sortByUnpopular = async (page_size, page, uid)=>{
    const query = await Art.get();
    return await sortSliceQuery(query, page_size, page, ((a, b)=> (a.likes - a.dislikes) - (b.likes - b.dislikes)), uid);
}

const sortByControversial = undefined;

export const filterFuncs = {
    new: sortByNew,
    old: sortByOld,
    expensive: sortByExpensive,
    cheap: sortByCheap,
    popular: sortByPopular,
    unpopular: sortByUnpopular,
    controversial: sortByControversial
};