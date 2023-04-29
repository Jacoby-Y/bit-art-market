import { Router } from "express";
import { auth, optAuth } from "../controllers/auth.js";
import { buyPalette, setPalette } from "../controllers/paletteCont.js";
import { resWrap } from "./util.js";

const router = Router();

router.get("/buy-palette", auth, resWrap(buyPalette));
router.post("/set-palette", auth, resWrap(setPalette));

export default router;