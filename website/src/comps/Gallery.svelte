<script lang="ts">
    import { user } from "../stores/store";
    import ArtPiece from "./ArtPiece.svelte";
    import Loading from "./Loading.svelte";

    export let gallery: ArtData[] = null;
    export let hide_owner = false;
</script>

{#if gallery != null}
<main>
    {#each gallery as art_data}
        <ArtPiece {art_data} dim={hide_owner && $user.username == art_data.owner} />
    {/each}
    {#if gallery?.length == 0}
        <h1>No art!</h1>
    {/if}
</main>
{:else}
    <Loading />
{/if}

<style>
    main {
        width: 100%;
        /* max-width: 600px; */
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem 2rem;
        padding: 2rem 1rem;
    }
</style>