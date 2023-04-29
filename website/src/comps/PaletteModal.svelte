<script lang="ts">
    import { link } from "svelte-spa-router";
    import config from "../config";
    import { palette_inv, palette_edit, user_gallery, alert } from "../stores/store";
    import ArtPiece from "./ArtPiece.svelte";
    import client from "../utils/client";

    let art_data: ArtData = $palette_edit.art_data;
    $: art_data = $palette_edit.art_data;
    $: palette = config.palette_map[art_data.palette] ?? config.palette_map["B&W"];
    const og_palette = art_data.palette ?? "B&W";
    let selected_palette: string = og_palette;

    // $: console.log(Object.assign(art_data, { palette: selected_palette }))
    // $: console.log(art_data.palette);

    console.log(og_palette);

    const inventory = (og_palette == "B&W" ? [] : [["B&W", Infinity]]).concat(Object.entries($palette_inv ?? {}));

    const close = ()=>{
        $palette_edit.on = false;
    }
    const selectPalette = (name: string | number)=>{
        if (selected_palette == name) {
            selected_palette = og_palette;
        } else {
            selected_palette = "" + name;
        }
    }
    const useThisPalette = async ()=>{
        const res = await client.setPalette(art_data.data, selected_palette);

        if (!res.ok) {
            alert.set({ theme: "error", msg: res?.data?.msg ?? "Uh oh..." });
            return;
        }

        $user_gallery.find(art => art.data == art_data.data).palette = selected_palette;
        $user_gallery = $user_gallery;

        $palette_inv = res.data.palettes;

        close();
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<main on:click|self={close}>
    <div>
        <ArtPiece art_data={Object.assign(art_data, { palette: selected_palette })} just_draw_it={true} />
        <section id="palette-wrapper">
            <h3 class="palette-name">{og_palette}</h3>
            <div id="current-colors">
                {#each palette as color}
                    <div class="color" style="background-color: {color};"></div>
                {/each}
            </div>
            <div id="palette-options">
                {#each inventory as [name, count]}
                    {@const colors = config.palette_map[name]}
                    {#if colors != undefined && og_palette != name && (+count ?? 0) > 0}
                        <div class="palette-option" class:selected={name == selected_palette} on:click={()=> selectPalette(name)}>
                            <h3 class="palette-name">
                                {name}{#if isFinite(+count)}: {count}{/if}
                            </h3>
                            <div class="colors">
                                {#each colors as color}
                                    <div class="color" style="background-color: {color};"></div>
                                {/each}
                            </div>
                        </div>
                    {/if}
                {/each}
                {#if inventory.length == 0}
                    <div id="no-palette">
                        <h3>You have no palettes!</h3>
                        <p>Check out the <a href="/shop" use:link on:click={close}>shop</a></p>
                    </div>
                {/if}
            </div>
        </section>
        {#if selected_palette && selected_palette != og_palette}
            <button id="select-btn" on:click={useThisPalette}>Select palette?</button>
        {/if}
        <!-- <i class="bi bi-x-circle-fill" id="x" on:click={close} /> -->
    </div>
</main>

<style>
    main {
        position: fixed;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #00000099;
        z-index: 10;

        display: flex;
        justify-content: center;
        align-items: center;

        color: black;
    }
    main > div {
        position: relative;

        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        align-items: center;
        justify-content: center;
    }
    #palette-wrapper {
        position: relative;
        padding: 1rem;
        border-radius: 0.5rem;
        background-color: #ddcbe0;

        height: 20rem;
        width: 20rem;

        overflow-y: scroll;
    }

    #select-btn {
        position: absolute;
        /* right: 10rem; */
        right: 50%;
        top: 100%;
        transform: translate(50%, 1rem);
        background-color: #ddd;
        border-radius: 10px;
    }
    #x {
        height: 32px;
        border-radius: 50%;
        cursor: pointer;
        color: #ff6363;
        font-size: 2rem;
        position: absolute;
        right: 0;
        top: 100%;
        padding: 0.5rem;
    }

    .color {
        /* border: 1px solid black; */
    }

    #current-colors {
        display: flex;
        margin: 0 auto;
        justify-content: center;
        gap: 1rem;
        border-bottom: 2px solid black;
        padding-bottom: 1rem;
    }
    #current-colors .color {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
    }
    .palette-name:first-of-type {
        text-align: center;
        padding-bottom: 0.5rem;
    }

    #palette-options {
        padding: 0.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .palette-option {
        padding: 0.5rem;
        cursor: pointer;
        transition-duration: 0.3s;
    }
    .palette-option:hover {
        /* border: 2px dashed grey; */
        /* margin: -2px; */
        transform: scale(1.1);
    }
    .palette-option.selected {
        border: 2px solid white;
        margin: -2px;
        border-radius: 10px;
    }
    .palette-option .colors {
        display: flex;
        justify-content: center;
        gap: 1rem;
    }
    .palette-option .color {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
    }

    #no-palette {
        text-align: center;
        margin-top: 2rem;
    }
</style>
