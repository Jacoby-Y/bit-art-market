<script lang="ts">
    import { onMount } from "svelte";
    import { drawArtToCanvas } from "../utils/art";
    import config from "../config";
    import ViewPalettes from "./ViewPalettes.svelte";

    let canvas: HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D;
    const size = 16*24;
    const psize = size/16;

    let mouse = { px: 0, py: 0, over: false, down: false }
    export let pixels: number[] = [];

    let selected_theme = "B&W";
    $: selected_palette = config.palette_map[selected_theme] ?? config.palette_map["B&W"];
    let selecting_theme = false;

    $: ctx && selected_theme && drawPixels();

    const drawPixels = ()=>{
        drawArtToCanvas(ctx, pixels.join(""), false, selected_palette);
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

    const setTheme = (name: string)=>{
        selected_theme = name;
    }

    let selected_color = 0;

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<main>
    <div id="colors">
        <i class="bi bi-palette" id="palette-btn" on:click={()=>{selecting_theme = true}}></i>
        {#each selected_palette as color, i}
            <div class="color" style="background-color: {color}" class:selected={selected_color == i} on:click={()=>{ selected_color = i }}></div>
        {/each}
        <i class="bi bi-droplet-half" id="fill" on:click={fillAll}></i>
    </div>
    <canvas bind:this={canvas} style="width: {size}px; height: {size}px;"></canvas>
</main>

{#if selecting_theme}
    <ViewPalettes title="Test out a color palette!" on:click={()=>{selecting_theme = false}} clickColor={setTheme} />
{/if}

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
        position: relative;
        border: 2px solid black;
        width: 2rem;
        height: 2rem;
        border-radius: 5px;
        cursor: pointer;
        background-color: attr(data-color);
    }
    #colors .color.selected {
        border-radius: 50%;
        top: 5px;
    }
    #fill, #palette-btn {
        color: black;
        font-size: 2rem;
        cursor: pointer;
        margin-left: 1rem;
    }
    #palette-btn {
        margin-left: 0;
        margin-right: 1rem;
    }
    canvas {
        border: 2px solid white;
    }

</style>
