import { Router } from "express";
import { auth, optAuth } from "../controllers/auth.js";
import { publishArt, doesExist, getGallery, authGallery, getByFilter, rateArt, purchase, setCost, dataOnOne, threeRandom } from "../controllers/artCont.js";
import { resWrap } from "./util.js";

const router = Router();

router.get("/exists/:data", resWrap(doesExist));
router.get("/gallery/:username", optAuth, resWrap(getGallery));
router.get("/filter-by/:filter/:page_size/:page", optAuth, resWrap(getByFilter));
router.get("/auth-gallery", auth, resWrap(authGallery));
router.get("/get-one/:data", auth, resWrap(dataOnOne));
router.get("/three-random", optAuth, resWrap(threeRandom));
router.post("/publish-art", auth, resWrap(publishArt));
router.post("/rate-art", auth, resWrap(rateArt));
router.post("/purchase", auth, resWrap(purchase));
router.post("/set-cost", auth, resWrap(setCost));


export default router;