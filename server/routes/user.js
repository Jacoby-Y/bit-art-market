import { Router } from "express";
import { auth } from "../controllers/auth.js";
import { getSelf, login, setName, getLogs } from "../controllers/userCont.js";
import { resWrap } from "./util.js";

const router = Router();

router.get("/self", auth, resWrap(getSelf));
router.get("/logs", auth, resWrap(getLogs));
router.post("/login", resWrap(login));
router.post("/set-name", auth, resWrap(setName));

export default router;