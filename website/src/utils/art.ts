export const serializePixels = (pixels: number[])=>{
    const data = pixels.map((v, i)=> i > 0 && i%16 == 0 ? "|" + v : `${v}`).join("");
    return data.split("|").map(str => parseInt(str, 3).toString(36)).join("|");
}
export const deserializePixels = (comp_str: string)=>{
    const chunks = comp_str.split("|");
    const b3_chunks = chunks
        .map(str => parseInt(str, 36).toString(3))
        .map(str => "0".repeat(16 - str.length) + str);
        
    return Array.from(b3_chunks.join("")).map(ch => +ch);
}

const colors = ["#000000", "#808080", "#ffffff"];
/** Draw on canvas with given image data */
export const drawArtToCanvas = (ctx: CanvasRenderingContext2D, data: string, compressed: boolean)=>{
    let pixels = data;
    if (compressed) pixels = deserializePixels(data).join("");

    const psize = ctx.canvas.width/16;

    for (let i = 0; i < pixels.length; i++) {
        const p = pixels[i];
        ctx.fillStyle = colors[p];
        ctx.fillRect(i%16 * psize, Math.floor(i/16) * psize, psize, psize);
    }
}

// const comp_example = "14|1ddpv|4n29d|47w2d|11yxr|pm82c|pldiu|ms4i0|h33di|0|0|0|1x74o|7osio|pmn28|pmn28";
// const example = "0000000000001111001110000110111101122000000001110111100001000011001010000001000022222220001000102222220000001010220000000000000020000000000000000000000000000000000000000000000000000000000000000020002000200020022002200220022022222222222222222222222222222222";
// drawPixelsCanvas(null, comp_example, true);
// drawPixelsCanvas(null, example, false);

const clamp = (min: number, val: number, max: number)=>{
    if (val < min) return min;
    if (val > max) return max;
    return val;
}

export const colorFromStr = (str: string)=>{
    let channels = [256/2, 256/4, 256/1];
    Array.from(str).forEach((ch, i)=>{
        const val = ch.charCodeAt(0) * 11;
        channels[i%3] += val > 300 && i%2 == 0 ? -val : val;
    })
    
    let [ r, g, b ] = channels;

    r = (r * (r < 0 ? -1 : 1)) % 256;
    g = (g * (g < 0 ? -1 : 1)) % 256;
    b = (b * (b < 0 ? -1 : 1)) % 256;

    const min = 100;
    const max = 200;

    r = clamp(min, r, max);
    g = clamp(min, g, max);
    b = clamp(min, b, max);

    const low = [r,g,b].sort((a, b)=> a - b)[0];
    // const mid = [r,g,b].sort((a, b)=> a - b)[1];
    const high = [r,g,b].sort((a, b)=> a - b)[2];

    if (r == low) r = min;
    if (g == low) g = min;
    if (b == low) b = min;

    if (r == high) r = max;
    if (g == high) g = max;
    if (b == high) b = max;
    
    let hr = r.toString(16);
    let hg = g.toString(16);
    let hb = b.toString(16);
    
    hr = hr.length == 1 ? "0" + hr : hr;
    hg = hg.length == 1 ? "0" + hg : hg;
    hb = hb.length == 1 ? "0" + hb : hb;
    
    return "#" + hr + hg + hb;
}