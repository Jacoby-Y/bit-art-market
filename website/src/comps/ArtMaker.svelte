<script lang="ts">
    import { onMount } from "svelte";
    import { drawArtToCanvas } from "../utils/art";

    let canvas: HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D;
    const size = 16*24;
    const psize = size/16;

    let mouse = { px: 0, py: 0, over: false, down: false }
    export let pixels: number[] = [];
    const color = ["#000000", "#808080", "#ffffff"];

    const drawPixels = ()=>{
        drawArtToCanvas(ctx, pixels.join(""), false);
    }

    const setPixel = ()=>{
        if (mouse.down && mouse.px >= 0) {
            pixels[mouse.px + mouse.py * 16] = selected_color;
            drawPixels();
            drawCursor();
        }
    }

    const drawCursor = ()=>{
        ctx.strokeStyle = "#aaa";
        ctx.lineWidth = 1;
        ctx.strokeRect(
            mouse.px * psize,
            mouse.py * psize,
            psize,
            psize,
        );
    }

    onMount(()=>{
        if (pixels.length == 0) pixels = [...Array(256)].fill(0);

        ctx = canvas.getContext("2d");

        canvas.width = size;
        canvas.height = size;

        drawPixels();

        const setPos = (ev: MouseEvent)=>{
            mouse.px = Math.floor(ev.offsetX / psize);
            mouse.py = Math.floor(ev.offsetY / psize);
        }

        canvas.onpointerenter = ()=> { mouse.over = true; }
        canvas.onpointerleave = ()=> { mouse.over = false; drawPixels(); mouse.down = false; }
        canvas.onpointerdown = (ev)=> { mouse.down = true; setPos(ev); setPixel(); }
        canvas.onpointerup = ()=> { mouse.down = false; }

        canvas.onpointermove = (ev: MouseEvent)=>{
            setPos(ev);
            
            setPixel();
            drawPixels();
            drawCursor();
        }
    });

    const fillAll = ()=>{
        pixels.fill(selected_color);
        pixels[0] = selected_color;
        drawPixels();
    }

    let selected_color = 0;

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<main>
    <div id="colors">
        <div class="color" style="background-color: #000000" class:selected={selected_color == 0} on:click={()=>{ selected_color = 0 }}></div>
        <div class="color" style="background-color: #808080" class:selected={selected_color == 1} on:click={()=>{ selected_color = 1 }}></div>
        <div class="color" style="background-color: #ffffff" class:selected={selected_color == 2} on:click={()=>{ selected_color = 2 }}></div>
        <i class="bi bi-paint-bucket" id="paint" on:click={fillAll}></i>
    </div>
    <canvas bind:this={canvas} style="width: {size}px; height: {size}px;"></canvas>
</main>

<style>
    #colors {
        background-color: white;
        /* height: 3rem; */
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
        width: max-content;
        padding: 1rem;
        margin: 0 auto;
        display: flex;
        gap: 1rem;
        margin-bottom: -2px;
    }
    #colors .color {
        border: 1px solid black;
        width: 2rem;
        height: 2rem;
        border-radius: 5px;
        cursor: pointer;
        background-color: attr(data-color);
    }
    #colors .color.selected {
        border-radius: 50%;
    }
    #colors #paint {
        color: black;
        font-size: 2rem;
        cursor: pointer;
        margin-left: 1rem;
    }
    canvas {
        border: 2px solid white;
    }
</style>
