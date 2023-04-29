<script lang="ts">
    import Gallery from "../Gallery.svelte";
    import Loading from "../Loading.svelte";

    export let gallery: ArtData[] = null;
</script>

{#if gallery != null}
<main>
    {#if gallery?.length == 0}
        <h1 id="no-art">You have no art!</h1>
    {/if}
    <Gallery {gallery} />
</main>
{:else}
    <Loading />
{/if}

<style>
    main {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
    }
    #no-art {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
</style>