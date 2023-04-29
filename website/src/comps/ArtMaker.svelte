<script lang="ts">
    import { onMount } from "svelte";
    import { drawArtToCanvas } from "../utils/art";
    import config from "../config";

    let canvas: HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D;
    const size = 16*24;
    const psize = size/16;

    let mouse = { px: 0, py: 0, over: false, down: false }
    export let pixels: number[] = [];

    let selected_theme = "B&W";
    $: selected_palette = config.color_map[selected_theme] ?? config.color_map["B&W"];
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
        <i class="bi bi-paint-bucket" id="fill" on:click={fillAll}></i>
    </div>
    <canvas bind:this={canvas} style="width: {size}px; height: {size}px;"></canvas>
</main>

{#if selecting_theme}
<!-- svelte-ignore a11y-click-events-have-key-events -->
<main id="palette-test" on:click={()=>{selecting_theme = false}}>
    <h2>Test out a color palette!</h2>
    <div id="wrapper">
        {#each Object.entries(config.color_map) as [name, [a, b, c]]}
            <div class="color-wrapper" on:click={()=> setTheme(name)}>
                <h3>{name}</h3>
                <div class="colors">
                    <div class="color" style="background-color: {a}; border-color: {c}33;"></div>
                    <div class="color" style="background-color: {b}; border-color: {a}33;"></div>
                    <div class="color" style="background-color: {c}; border-color: {b}33;"></div>
                </div>
            </div>
        {/each}
    </div>
</main>
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

    #palette-test {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #00000099;
        z-index: 10;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        color: white;
    }
    #palette-test > h2 {
        background-color: #1d1d21;
        padding: 1rem 1.2rem;
        /* padding-bottom: 0; */
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
    }
    #palette-test #wrapper {
        background-color: #1d1d21;
        padding: 1rem 2rem;
        padding-bottom: 2rem;
        border-radius: 10px;

        max-height: 80vh;
        max-width: calc(100% - 2rem);
        overflow-y: scroll;

        /* display: flex;
        flex-direction: column;
        gap: 1rem; */

        /* display: grid;
        grid-auto-columns: max-content;
        gap: 1rem 2rem; */

        width: 40rem;

        display: flex;
        flex-wrap: wrap;
        gap: 1rem 2rem;
        justify-content: center;
    }

    #palette-test .color-wrapper {
        transition-duration: 0.3s;
        cursor: pointer;
    }
    #palette-test .color-wrapper:hover {
        transform: scale(1.1);
    }

    #palette-test .colors {
        display: flex;
        gap: 1rem;
    }
    #palette-test .color {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        border: 2px solid;
    }
    #palette-test h3 {
        text-align: center;
        padding: 0.5rem;
    }

</style>
