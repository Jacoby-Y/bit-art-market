<script lang="ts">
    import config from "../config";

    export let title: string;
    export let clickColor: (theme: string)=> void = (theme: string) => {};
    export let interactable = true;
    export let hide_bw = false;

    const entries = hide_bw ? Object.entries(config.palette_map).slice(1) : Object.entries(config.palette_map);
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<main on:click>
    <h2>{title}</h2>
    <div id="wrapper">
        {#each entries as [name, [a, b, c]]}
            <div class="color-wrapper" class:interactable on:click={()=> clickColor(name)}>
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

<style>
    main {
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
    main > h2 {
        background-color: #1d1d21;
        padding: 1rem 1.2rem;
        /* padding-bottom: 0; */
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
    }
    #wrapper {
        background-color: #1d1d21;
        padding: 1rem 2rem;
        padding-bottom: 2rem;
        border-radius: 10px;

        max-height: 80vh;
        max-width: calc(100% - 2rem);
        overflow-y: scroll;

        width: 40rem;

        display: flex;
        flex-wrap: wrap;
        gap: 1rem 2rem;
        justify-content: center;
    }

    .color-wrapper {
        transition-duration: 0.3s;
        cursor: pointer;
    }
    .color-wrapper:not(.interactable) {
        pointer-events: none;
    }
    .color-wrapper:hover {
        transform: scale(1.1);
    }

    .colors {
        display: flex;
        gap: 1rem;
    }
    .color {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        border: 2px solid;
    }
    h3 {
        text-align: center;
        padding: 0.5rem;
    }
</style>
