<script lang="ts">
    import config from "../../config";
    import { alert, palette_inv, user } from "../../stores/store";
    import client from "../../utils/client";
    import ViewPalettes from "../ViewPalettes.svelte";

    const buyPalette = async ()=>{
        if ($user.coins < 20) return alert.set({ theme: "error", msg: "You can't afford this item!" });
        if (interval != null) return;
        startSequence();

        const res = await client.buyPalette();
        
        if (!res.ok) {
            alert.set({ theme: "error", msg: res?.data?.msg ?? "Uh oh..." });
            final = "B&W";
            [p1, p2, p3] = config.palette_map[final];
        } else {
            user.update(v => (v.coins = res.data.coins, v));
            $palette_inv = res.data.palettes;
            setTimeout(()=>{
                final = res.data.new_palette;
                [p1, p2, p3] = config.palette_map[final];
                alert.set({ theme: "success", msg: res.data.msg });
            }, 1300);
        }
    }

    const randPalette = ()=>{
        if (final) {
            clearInterval(interval);
            interval = null;

            return;
        }

        const keys = Object.keys(config.palette_map);
        [p1, p2, p3] = config.palette_map[keys[Math.floor(Math.random() * (keys.length - 1)) + 1]];
    }

    const startSequence = ()=>{
        final = null;
        interval = setInterval(randPalette, 200);
    }

    let [p1, p2, p3] = config.palette_map["B&W"];
    let final: string = null;
    let interval: number = null;

    let view_choices = false;
</script>

<main>
    <h2>
        Get random color palette
        <br>
        (For<i class="bi bi-coin">20</i>)
    </h2>
    <section id="buttons">
        <button on:click={buyPalette} disabled={interval != null}>Gamble</button>
        <div id="rand-colors">
            <div class="color" style="background-color: {p1}; border-color: {p2}">
                {#if !final} <i class="bi bi-question" style="color: {p2};" /> {/if}
            </div>
            <div class="color" style="background-color: {p2}; border-color: {p3}">
                {#if !final} <i class="bi bi-question" style="color: {p3};" /> {/if}
            </div>
            <div class="color" style="background-color: {p3}; border-color: {p1}">
                {#if !final} <i class="bi bi-question" style="color: {p1};" /> {/if}
            </div>

            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <i class="bi bi-question" id="hint" on:click={()=>{ view_choices = true }} />
        </div>
    </section>
</main>

{#if view_choices}
    <ViewPalettes on:click={()=>{ view_choices = false }} title="Possible choices..." hide_bw={true} interactable={false} />
{/if}

<style>
    main {
        text-align: center;
        background-color: #1d1d21;
        padding: 1rem 1.2rem;
        border-radius: 10px;

        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    h2 {
        font-size: 1.5rem;
    }
    .bi-coin {
        pointer-events: none;
    }
    #buttons {
        width: 100%;
        /* display: grid;
        grid-template-columns: 2fr 3fr; */
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
    }
    #buttons > * {
        border-radius: 1rem;
        flex-grow: 1;
    }
    #buttons button {
        background-color: #333;
        color: white;
        padding: 1rem;
    }
    #rand-colors {
        position: relative;
        border: 2px solid white;
        padding: 0.5rem;
        display: flex;
        justify-content: center;
        gap: 0.5rem;
        align-items: center;

        width: 10rem;
    }
    #rand-colors .color {
        border: 2px solid white;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2rem;
    }
    .color, .color i {
        transition-duration: 0.2s;
    }

    #hint {
        position: absolute;
        bottom: 100%;
        right: -0.5rem;
        font-size: 1.5rem;
        padding: 0.5rem 0.7rem;
        cursor: pointer;
    }
</style>
