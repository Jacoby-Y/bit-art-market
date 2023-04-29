import config from "../config.js";
import { Art, fire_admin, Users } from "../firebase/index.js";

/** Log the user in
 * @param {Request} req
 * @param {Response} res */
export const buyPalette = async (req, res)=>{
    const user_doc = await Users.doc(req.uid).get();
    if (!user_doc.exists) {
        res.cookie("accessToken", null, { expires: new Date(Date.now() - 1000), httpOnly: true });
        return [400, "User doesn't exist!"];
    }

    let { palettes, coins, palettes_bought } = user_doc.data();

    if (coins < config.rand_palette_cost) {
        return [400, "You can't afford this item!"];
    }

    if (palettes == undefined) palettes = {};
    if (palettes_bought == undefined) palettes_bought = 0;

    const rand_palette = config.palettes[Math.floor(Math.random() * (config.palettes.length - 1)) + 1];
    
    if (palettes[rand_palette]) palettes[rand_palette]++;
    else palettes[rand_palette] = 1;

    await user_doc.ref.update({
        palettes,
        palettes_bought: palettes_bought + 1,
        coins: coins - config.rand_palette_cost,
    });

    return [200, "You got a palette!", { new_palette: rand_palette, palettes, coins }];
}

/** Log the user in
 * @param {Request} req
 * @param {Response} res */
export const setPalette = async (req, res)=>{
    const user_doc = await Users.doc(req.uid).get();
    if (!user_doc.exists) {
        res.cookie("accessToken", null, { expires: new Date(Date.now() - 1000), httpOnly: true });
        return [400, "User doesn't exist!"];
    }

    const { art_id, set_palette } = req.body;

    const has_palette = config.palettes.includes(set_palette);

    if (!has_palette) {
        return [400, "That palette doesn't exist!"];
    }

    const palettes = user_doc.data().palettes ?? {};

    if (set_palette != config.og_palette && (!palettes[set_palette] || palettes[set_palette] <= 0)) {
        return [400, "You don't have that palette!"];
    }

    const art_doc = await Art.doc(art_id).get();
    if (!art_doc.exists) {
        return [400, "Art piece doesn't exist?"];
    }

    // set palette (check if palette on art is B&W)
    const art_palette = art_doc.data().palette ?? config.og_palette;

    if (set_palette == art_palette) {
        return [400, "Palette is already set to that!"];
    }

    if (set_palette != config.og_palette) {
        palettes[set_palette]--;
        if (palettes[set_palette] == 0) delete palettes[set_palette];
    }
    if (art_palette != config.og_palette) {
        if (palettes[art_palette] == undefined) palettes[art_palette] = 1;
        else palettes[art_palette]++;
    }

    await art_doc.ref.update({
        palette: set_palette
    });

    await user_doc.ref.update({
        palettes
    });

    return [200, "Palette set!", { palettes }];
}

export default {
    buyPalette,
    setPalette,
}