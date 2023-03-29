import { Art, Followers, Users } from "../firebase/index.js";

/** 
 * @param {Request} req
 * @param {Response} res */
export const toggleFollowUser = async (req, res)=>{
    const { username } = req.body;

    if (!username) return [400, "Missing 'username' property in request body!"];
    if (username == req.username) return [400, "Did you just try following yourself?..."];

    const following_user = (await Users.where("username", "==", username).get()).docs[0];

    if (!following_user?.exists) return [400, "User doesn't exists!"];

    const following_doc = (await Followers.where("follower.uid", "==", req.uid).where("following.uid", "==", following_user.id).get()).docs[0];

    if (following_doc?.exists) {
        following_doc.ref.delete();
        return [200, "You unfollowed this user!", { type: "unfollow" }];
    }

    await Followers.add({
        follower: {
            uid: req.uid,
            username: req.username
        },
        following: {
            uid: following_user.id,
            username: following_user.data().username
        } 
    });

    return [200, "You are now following that user!", { type: "follow" }];
}

/** 
 * @param {Request} req
 * @param {Response} res */
export const getFollowerCount = async (req, res)=>{
    const { username } = req.params;

    const user_doc = (await Users.where("username", "==", username).limit(1).get()).docs[0];

    if (!user_doc.exists) return [400, "That user doesn't exist!"];

    const uid = user_doc.id;

    const count = (await Followers.where("following", "==", uid).count().get()).data().count();

    return [200, "Here ya' go!", { count }];
}

export const getFollowingUtil = async (uid)=>{
    return (await Followers.where("follower.uid", "==", uid).get()).docs.map(follow => follow.data().following);
}

/** 
 * @param {Request} req
 * @param {Response} res */
export const getFollowing = async (req, res)=>{

}

/** 
 * @param {Request} req
 * @param {Response} res */
export const getFollowingPopular = async (req, res)=>{
    // return users that you're following and their top three art pieces
    const following = await getFollowingUtil(req.uid);
    const galleries = await Promise.all(following.map(async (user)=>[
        await Art.where("owner.uid", "==", user.uid).get(),
        user
    ]));
    const top_threes = await Promise.all(galleries.map(async ([gallery, owner])=>{ 
        const top_three = (await Promise.all(gallery.docs.map(async (art)=>{
            const likes = (await art.ref.collection("likes").count().get()).data().count;
            const dislikes = (await art.ref.collection("dislikes").count().get()).data().count;
            
            return {
                likes, dislikes,
                // user_rating,
                data: art.id,
                ref: art.ref,
            }
        }))).sort((a, b)=> (b.likes-b.dislikes) - (a.likes-a.dislikes)).slice(0, 3);

        const top_three_rating = await Promise.all(top_three.map(async (art) => {
            const { likes, dislikes, data, ref, username } = art;

            const user_rating = (
                (await ref.collection("likes").doc(req.uid).get()).exists ? "likes" :
                (await ref.collection("dislikes").doc(req.uid).get()).exists ? "dislikes" :
                null
            );

            return {
                likes, dislikes, data, user_rating
            }
        }));

        return {
            username: owner.username,
            top_three: top_three_rating,
        }
    }));

    return [200, "Here ya' go!", { results: top_threes }];
}