import { Router } from "express";
import { auth } from "../controllers/auth.js";
import { getFollowerCount, getFollowing, toggleFollowUser, getFollowingPopular } from "../controllers/followCont.js";
import { resWrap } from "./util.js";

const router = Router();

router.get("/followers/:username", resWrap(getFollowerCount));
router.get("/following/:username", auth, resWrap(getFollowing));
router.get("/following-popular", auth, resWrap(getFollowingPopular));
router.post("/toggle-follow", auth, resWrap(toggleFollowUser));

export default router;