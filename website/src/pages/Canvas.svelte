<script lang="ts">
    import { alert, user } from "../stores/store";
    import { link, replace } from "svelte-spa-router";
    import ArtMaker from "../comps/ArtMaker.svelte";
    import client from "../utils/client";
    import { serializePixels } from "../utils/art";
    import config from "../config";

    if ($user == null) replace("/login");

    // [...Array(256)].fill(0); // 
    let pixels: number[] = Array.from("0000000000001111001110000110111101122000000001110111100001000011001010000001000022222220001000102222220000001010220000000000000020000000000000000000000000000000000000000000000000000000000000000020002000200020022002200220022022222222222222222222222222222222").map(v => +v);
    let art_owner: string = null;
    let can_publish = false;
    
    $: ser_pixels = serializePixels(pixels);
    $: afford = $user.coins >= config.art_cost;
    $: if (pixels) (art_owner = null, can_publish = false);

    const checkUnique = async ()=>{
        const res = await client.artExists(ser_pixels);
        if (!res.ok) alert.set({ theme: "error", msg: res.data.msg });
        else if (res.data.exists) art_owner = res.data.owner;
        else can_publish = true;
    }
    const publish = async ()=>{
        const res = await client.publishArt(ser_pixels);
        if (!res.ok) return alert.set({ theme: "error", msg: res?.data?.msg ?? "Can't publish art!" });
        $user.coins -= config.art_cost;
        alert.set({ theme: "success", msg: res.data.msg });
        replace("/home");
    }
</script>

<main class="flex-page">
    <!-- <h1>Hi!</h1> -->
    <div id="content">
        <ArtMaker bind:pixels={pixels} />
        <section>
            <h1 class="cash" id="cost">Art Cost: <i class="bi bi-coin">{config.art_cost}</i></h1>
            {#if !can_publish} 
                <button on:click={checkUnique} disabled={art_owner != null}>Check uniqueness</button>
            {:else if afford}
                <button on:click={publish}>Publish art!</button>
                <p>It's unique!</p>
            {:else}
                <button on:click={null} disabled>Can't afford!</button>
                <p>It's unique!</p>
            {/if}
            {#if art_owner}
                <p><a href="/gallery/{art_owner}" use:link target="_blank" rel="noreferrer">{art_owner}</a> owns this piece!</p>
            {/if}
        </section>
    </div>
</main>

<style>
    #cost {
        padding: 1rem;
        font-weight: normal;
        font-size: 1.5rem;
    }
    #cost i {
        font-weight: bold;
    }
    #content {
        display: flex;
        /* flex-direction: column; */
        align-items: flex-end;
        max-width: 100vw;
        flex-wrap: wrap-reverse;
        justify-content: center;
        row-gap: 1rem;
    }
    section {
        /* margin-top: calc(4rem - 2px); */
        margin-bottom: 4px;
        /* height: 400px; */
        width: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        /* justify-content: center; */
        /* background-color: #aaa; */
        text-align: center;
        padding-top: 6px;
    }
    section button {
        width: 100%;
        background-color: #eee;
    }
    section p {
        padding: 0.5rem;
    }
    section p a {
        color: white;
        font-weight: bold;
    }
</style>
