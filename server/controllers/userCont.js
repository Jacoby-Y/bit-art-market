// import User from "../models/User.js";
import jwt from "jsonwebtoken";
import { Art, fire_admin, Users } from "../firebase/index.js";
import config from "../config.js";


export const addLog = async (uid, content)=>{
    const user = await Users.doc(uid).get();

    if (!user.exists) return false;

    const Logs = user.ref.collection("Logs");
    await Logs.add({
        content,
        timestamp: fire_admin.firestore.FieldValue.serverTimestamp(),
    });

    return true;
}


/** Log the user in
 * @param {Request} req
 * @param {Response} res */
export const login = async (req, res)=>{
    const { uid } = req.body;

    if (!uid) return [400, "No uid, no service!"];

    try {
        await fire_admin.auth().getUser(uid);
    } catch {
        return [400, "What you tryna do?"];
    }

    const doc = await Users.doc(uid).get();

    if (!doc.exists) {
        const jwt_cookie = jwt.sign({ uid, username: null, coins: 0 }, process.env.JWT_SECRET, {});
        res.cookie("accessToken", jwt_cookie, { httpOnly: true });
        return [200, "Please set your username", { set_username: true }];
    }

    const doc_data = doc.data();

    const jwt_cookie = jwt.sign({ uid, username: doc_data.username, coins: doc_data.coins }, process.env.JWT_SECRET, {});
    res.cookie("accessToken", jwt_cookie, { httpOnly: true, maxAge: 1000*60*60*24*7 });
    return [200, "Welcome back!", { set_username: false, username: doc_data.username, coins: doc_data.coins }];
}

/** 
 * @param {Request} req
 * @param {Response} res */
export const setName = async (req, res)=>{
    const { username } = req.body;

    if (!username) return [400, "Username missing from body!"];

    const valid = /^[0-9a-zA-Z_.-]*$/.test(username);

    if (!valid || username.length == 0) return [400, "Username is invalid (uses illegal characters)!"];

    const username_doc = await Users.where("username", "==", username).get();
    if (username_doc.docs.length > 0) return [400, "Username already exists!"];
    
    const uid_doc = await Users.doc(req.uid).get();
    if (uid_doc.exists) return [400, "uid already exists! Somehow..."];
    
    const new_doc = {
        username,
        coins: config.starter_coins,
        daily_login: fire_admin.firestore.FieldValue.serverTimestamp(),
    };

    await Users.doc(req.uid).set(new_doc);

    const jwt_cookie = jwt.sign({ uid: req.uid, username, coins: new_doc.coins }, process.env.JWT_SECRET, {});
    res.cookie("accessToken", jwt_cookie, { httpOnly: true });

    return [200, "Username set!", { username, coins: new_doc.coins }];
}

/** 
 * @param {Request} req
 * @param {Response} res */
export const getSelf = async (req, res)=>{
    const user_doc = await Users.doc(req.uid).get();
    if (!user_doc.exists) {
        res.cookie("accessToken", null, { expires: new Date(Date.now() - 1000), httpOnly: true });
        return [400, "User doesn't exist!"];
    }

    let { username, coins, daily_login } = user_doc.data();

    let daily_gain = 0;
    const time_gap = Math.round(Date.now()/1000) - daily_login._seconds;
    if (time_gap >= 60*60*20) {
        const gallery = await Art.where("owner.uid", "==", req.uid).get();
        for (let i = 0; i < gallery.docs.length; i++) {
            const doc = gallery.docs[i];
            const likes = (await doc.ref.collection("likes").count().get()).data().count;
            const dislikes = (await doc.ref.collection("dislikes").count().get()).data().count;
            if (likes - dislikes <= 0) continue;
            daily_gain += likes - dislikes;
        }

        await user_doc.ref.update({
            daily_login: fire_admin.firestore.FieldValue.serverTimestamp(),
            coins: fire_admin.firestore.FieldValue.increment(daily_gain + config.daily_gain),
        });

        daily_gain += config.daily_gain
        coins += daily_gain;
    }
    
    const jwt_cookie = jwt.sign({ uid: req.uid, username, coins }, process.env.JWT_SECRET, {});
    res.cookie("accessToken", jwt_cookie, { httpOnly: true });

    return [200, "Welcome back!", { username, coins, daily_gain, hours_to_bonus: Math.round(((60*60*20 - time_gap)/60/60)*10)/10 }];
}


const formatLog = (doc)=>{
    const date = new Date(doc.data().timestamp._seconds*1000);
    const local = date.toLocaleString("en-US", { month: "short", day: "numeric", year: "numeric" });
    // const [y, m, d] = date.toISOString().split("T")[0].split("-");
    const time = date.toISOString().split("T")[1].split(".")[0];

    return {
        content: doc.data().content,
        date: `${time} - ${local.replace(" ", ". ")}`,
    }
}

/** 
 * @param {Request} req
 * @param {Response} res */
export const getLogs = async (req, res)=>{
    const LogCol = Users.doc(req.uid).collection("Logs");

    const log_docs = async ()=> (await LogCol.orderBy("timestamp", "desc").get()).docs;
    let logs = (await log_docs()).map(formatLog);

    if ((await log_docs()).length == 0) {
        const first = {
            timestamp: fire_admin.firestore.FieldValue.serverTimestamp(),
            content: "First log!",
        }
        await LogCol.add(first);
        logs = (await log_docs()).map(formatLog);
    }

    return [200, "Here ya' go!", { logs: logs }];
}

// (async ()=>{
//     (await Users.get()).forEach(async (doc)=>{
//         const time_gap = Math.round(Date.now()/1000) - doc.data().daily_login._seconds;
//         if (time_gap >= 60*60*20) console.log("Daily checkin!");
//         else console.log("Come back tomorrow!");
//     })
// })()
