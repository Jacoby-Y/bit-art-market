import admin from "firebase-admin";
import serviceAccount from "../config/serviceAccountKey.js";

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

export const fire_admin = admin;

export const db = admin.firestore();
export const Users = db.collection("Users");
export const Art = db.collection("Art");
export const Followers = db.collection("Followers");

// const db = admin.database();
// const ref = db.ref('data');

// ref.set({
//     name: 'John Doe',
//     age: 32,
//     email: 'johndoe@example.com'
// });
