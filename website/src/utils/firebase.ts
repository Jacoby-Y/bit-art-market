import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import client from "./client";

const firebaseConfig = {
    apiKey: "AIzaSyAYrkxy8x6MVXmgDNeiwXGctzgi-oC1ISQ",
    authDomain: "bit-art-market.firebaseapp.com",
    projectId: "bit-art-market",
    storageBucket: "bit-art-market.appspot.com",
    messagingSenderId: "216348112827",
    appId: "1:216348112827:web:7c05b55cbe74d36ab6369e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    let login_result: GoogleAuthResponse = null;

    try {
        const result = await signInWithPopup(auth, provider);
        const { uid } = result.user;
        
        login_result = await client.login(uid);
    } catch (err) {
        login_result = { ok: false, status: 500, data: { msg: "Error authenticating Google account!" } };
        console.log(err);
    }

    return login_result;
};