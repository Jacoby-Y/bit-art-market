<script lang="ts">
    import { onMount } from "svelte";
    import { link } from "svelte-spa-router";
    import { alert } from "../stores/store";
    import client from "../utils/client";
    import ArtPiece from "../comps/ArtPiece.svelte";

    let random_three: ArtData[] = [];

    onMount(async ()=>{
        const res = await client.threeRandom();
        if (!res.ok) return alert.set({ theme: "error", msg: res?.data?.msg ?? "Can't fetch resources!" });
        random_three = res.data.result;
    });
</script>

<main>
    <header>
        <h1>Bit Art Market</h1>
        <p>It's like NFTs without the blockchain</p>
        <p class="hint">Name is a work-in-progress</p>
        <a href="#three-random">
            <i class="arrow bi bi-arrow-down-short"></i>
        </a>
    </header>
    <section id="three-random">
        <h1>Find, Like, Purchase, and Appreciate<br>Pixel Art</h1>
        {#if random_three.length > 0}
        <p class="hint">Here are some examples...</p>
        <div id="art">
            {#each random_three as art}
                <ArtPiece art_data={art}  />
            {/each}
        </div>
        {/if}
        <a href="#examples">
            <i class="arrow bi bi-arrow-down-short"></i>
        </a>
    </section>
    <section id="examples">
        <h1>Simplicity is Key</h1>
        <p>Only three colors and 16x16 pixels</p>
        <div id="colors">
            <div class="color"></div>
            <div class="color"></div>
            <div class="color"></div>
        </div>
        <a href="#login">
            <i class="arrow bi bi-arrow-down-short"></i>
        </a>
    </section>
    <section id="login">
        <!-- <p class="hint">I don't know what else to put on this page, so...</p> -->
        <a href="/login" use:link>
            <h1>Signup</h1>
        </a>
        <p class="hint">Or</p>
        <a href="/faq" use:link>
            <h1>FAQ</h1>
        </a>
    </section>
</main>

<style lang="scss">
    header, section {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
    h1 {
        font-size: 3rem;
        padding: 1rem;
        color: white;
        text-align: center;
    }
    p {
        font-size: 1.5rem;
        text-align: center;
    }
    .arrow {
        position: absolute;
        left: 50%;
        bottom: 3rem;
        transform: translate(-50%, 0);
        font-size: 3rem;
        display: block;
        background: #111;
        // padding: 1rem 1.2rem;
        width: 4.5rem;
        height: 4.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        cursor: pointer;
        color: white;
    }
    header {
        background-image: linear-gradient(#222 80%, #191919);
        padding: 1rem;
    }
    #three-random {
        background-image: linear-gradient(#191919 80%, #101010);
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding-bottom: 3rem;

        #art {
            max-width: 100vw;
            padding: 2rem;
            display: flex;
            align-items: flex-end;
            justify-content: start;
            gap: 2rem;
            overflow-x: scroll;
        }
    }
    #examples {
        background-image: linear-gradient(#101010 80%, #070707);
        padding: 1rem;

        #colors {
            display: flex;
            gap: 2rem;
            padding: 3rem;

            .color {
                width: 5rem;
                height: 5rem;
                border-radius: 50%;

                &:nth-of-type(1) {
                    background-color: white;
                    border: 2px solid #808080;
                }
                &:nth-of-type(2) {
                    background-color: #808080;
                    border: 2px solid white;
                }
                &:nth-of-type(3) {
                    background-color: black;
                    border: 2px solid #808080;
                }
            }
        }
    }
    #login {
        background-image: linear-gradient(#070707 80%, #000);
        padding: 2rem;

        a {
            text-decoration: none;
        }
        a h1 {
            background-color: #222;
            border-radius: 10px;
            padding: 1rem 1.2rem;
        }

        .hint {
            padding: 1rem;
        }
    }

    @media only screen and (max-width: 1000px) {
        .arrow {
            bottom: 2rem;
        }
    }
</style>
