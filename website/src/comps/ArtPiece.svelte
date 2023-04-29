<script lang="ts">
    import { onMount } from "svelte";
    import { link } from "svelte-spa-router";
    import { alert, loading, palette_edit, user } from "../stores/store";
    import { colorFromStr, drawArtToCanvas } from "../utils/art";
    import client from "../utils/client";
    import config from "../config";

    export let dim = false;
    export let art_data: ArtData;
    export let show_details: boolean = true;
    export let just_draw_it = false;

    let canvas: HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D;
    let purchased = false;

    $: ctx && art_data && drawCanvas();

    onMount(()=>{
        ctx = canvas.getContext("2d");
        canvas.width = canvas.height = 256;
        drawCanvas();
    });

    const drawCanvas = ()=> drawArtToCanvas(ctx, art_data.data, true, config.palette_map[art_data.palette] ?? config.palette_map["B&W"]);

    let posting_rating = false;
    const rateArt = async (type: ("likes" | "dislikes"))=>{
        $loading = { on: true, center: false };
        if ($user == null) return alert.set({ theme: "info", msg: `Login to ${type.slice(0, -1)} art` });
        if (posting_rating) return;

        posting_rating = true;
        if (art_data.user_rating != type) art_data[type]++;
        const res = await client.rateArt(type, art_data.data);

        $loading = { on: false, center: false };

        if (!res.ok) {
            art_data[type]--;
            alert.set({ theme: "error", msg: res?.data?.msg ?? "Uh oh..." });
        } else {
            alert.set({ theme: "success", msg: res.data.msg });
            
            if (art_data.user_rating == type) {
                art_data[type]--;
                type = null;
            } else if (res.data.swap_rating) {
                console.log("Swapping");
                art_data[type == "likes" ? "dislikes" : "likes"]--;
            }
        }
        
        art_data.user_rating = type;
        art_data = art_data;
        posting_rating = false;
    }

    const purchase = async ()=>{
        $loading = { on: true, center: false };
        const res = await client.purchaseArt(art_data.data);
        $loading = { on: false, center: false };
        
        if (!res.ok) {
            alert.set({ theme: "error", msg: res?.data?.msg ?? "Uh oh..." });
        } else {
            alert.set({ theme: "success", msg: res.data.msg });
            purchased = true;
            $user.coins -= art_data.cost;
        }
        
    }

    let editing = false;
    let cost_input = "";
    $: if (cost_input != cost_input.replaceAll(" ", "")) cost_input = cost_input.replaceAll(" ", "");
    $: valid_cost = !isNaN(parseInt(cost_input)) && !cost_input.includes(".") && !cost_input.includes("-");
    const edit = ()=>{
        editing = !editing;
    }

    const setCost = async ()=>{
        // console.log(art_data.data, parseInt(cost_input));
        $loading = { on: true, center: false };
        const res = await client.setArtCost(art_data.data, parseInt(cost_input));
        $loading = { on: false, center: false };

        if (!res.ok) {
            alert.set({ theme: "error", msg: res?.data?.msg ?? "Uh oh..." });
            if (res.status == 401) art_data.owner = "";
        } else {
            alert.set({ theme: "success", msg: res.data.msg });
            art_data.cost = parseInt(cost_input);
            art_data = art_data;
        }
        editing = false;
    }

    const editPalette = async ()=>{
        $palette_edit.on = true;
        // Give it a copy of the art data (I don't know why, but it messes it up otherwise)
        $palette_edit.art_data = JSON.parse(JSON.stringify(art_data));
        editing = false;
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<main class:purchased class:dim>
    {#if show_details && !just_draw_it}    
    <div id="details-wrapper">
        <i class="bi bi-question-square hint"></i>
        <div id="details">
            <p><i>Palette: </i>{art_data.palette ?? "B&W"}</p>
            <p><i>Artist: </i><a href="/gallery/{art_data.artist}" use:link>{art_data.artist}</a></p>
            {#if art_data.owner != $user?.username}
                <p><i>Owner: </i><a href="/gallery/{art_data.owner}" use:link>{art_data.owner}</a></p>
            {/if}
        </div>
    </div>
    {/if}
    <div id="canvas-wrapper">
        <canvas bind:this={canvas} style="border-color: {colorFromStr(art_data.data)}"></canvas>
        {#if editing && !just_draw_it}
        <div id="editor">
            <p class="hint">Any cost above 0 will put the art piece up for sale.<br><b>Note: </b>buyers also get the color palette on a piece they buy</p>
            <div>
                <input type="integer" placeholder="New art cost" bind:value={cost_input} />
                <button disabled={!valid_cost} on:click={setCost}>Set cost</button>
            </div>
            <i class="bi bi-palette" id="palette" on:click={editPalette} />
        </div>
        {/if}
        {#if art_data.cost > 0 && !just_draw_it}
            <i class="bi bi-coin" id="cost">{art_data.cost}</i>
        {/if}
    </div>

    {#if !just_draw_it}
    <section>
        <i class="bi bi-check-square" id="likes" class:selected={art_data.user_rating == "likes"} on:click={()=> rateArt("likes")}></i>
        {art_data.likes}
        ·
        <i class="bi bi-x-square" id="dislikes" class:selected={art_data.user_rating == "dislikes"} on:click={()=> rateArt("dislikes")}></i>
        {art_data.dislikes}
        {#if art_data.owner == $user?.username}
            <i class="bi bi-pencil-square corner-icon" on:click={edit}></i>
        {:else if art_data.cost > 0}
            <i class="bi bi-bag-plus-fill corner-icon" on:click={purchase}></i>
        {/if}
    </section>
    {/if}
</main>

<style>
    main {
        width: calc(256px + 12px);
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
    main.purchased {
        pointer-events: none;
        opacity: 0.3;
    }
    main.dim {
        opacity: 0.5;
    }
    main.dim:hover {
        opacity: 1;
    }
    
    #canvas-wrapper {
        position: relative;
        height: 268px;
    }
    #canvas-wrapper #cost {
        position: absolute;
        right: 6px;
        bottom: 6px;
        padding: 0.5rem 0.7rem;
        opacity: 0.4;
        border-top-left-radius: 1rem;
        background-color: #00000099;
    }
    #canvas-wrapper #cost:hover {
        opacity: 1;
    }
    canvas {
        border: 6px outset;
        border-radius: 10px;
    }

    #editor {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: #000000cc;

        border-radius: 9px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 1rem;
    }
    #editor .hint {
        padding: 10px 0;
        color: white;
        line-height: 1.2rem;
    }
    #editor > div {
        width: 100%;
        display: flex;
        
    }
    #editor input {
        width: 100%;
    }
    #editor button {
        width: max-content;
        white-space: nowrap;
    }
    #editor #palette {
        margin: 0 auto;
        margin-top: 0.5rem;
        padding: 0.5rem;
    }

    section {
        position: relative;
        display: flex;
        justify-content: center;
        gap: 6px;
        padding: 0.5rem;
        font-size: 1.5rem;
    }
    .bi {
        cursor: pointer;
        font-size: 1.5rem;
    }
    #likes.selected {
        color: #61ff61;
    }
    #dislikes.selected {
        color: #ff6161;
    }
    .corner-icon {
        position: absolute;
        right: 0.5rem;
        color: var(--cash);
    }

    #details-wrapper {
        display: flex;
        align-items: flex-end;
        padding: 0.5rem;
    }
    .hint:hover + #details, #details:hover {
        visibility: visible;
    }
    #details {
        transition-delay: 0.1s;
        visibility: hidden;
        padding: 5px 1rem;
        max-width: 100%;
    }
    #details p {
        overflow: hidden;
        max-width: 100%;
        font-weight: normal;
        text-overflow: "·";
        white-space: nowrap;
        /* user-select: all; */
        /* word-wrap: break-word; */
    }
    #details p i {
        user-select: none;
    }
    #details a {
        color: white;
    }
</style>
