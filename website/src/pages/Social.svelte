<script lang="ts">
    import { onMount } from "svelte";
    import { link, replace } from "svelte-spa-router";
    import ArtPiece from "../comps/ArtPiece.svelte";
    import Loading from "../comps/Loading.svelte";
    import { alert, nav_open, user } from "../stores/store";
    import client from "../utils/client";

    if ($user == null) replace("/login");

    let results: FollowingTopThree[] = null;

    onMount(async ()=>{
        const res = await client.getFollowingPopular();
        if (!res.ok) return alert.set({ theme: "error", msg: res?.data?.msg ?? "Can't get your following!" });
        results = res.data.results;
    });
</script>

{#if results}
<main class="flex-page" style="{$nav_open && "max-width: calc(100vw - 4.5rem);"}">
    {#each results as { username, top_three }}
        <section>
            <h2 class="username"><a href="/gallery/{username}" use:link>{username}</a> <span class="hint">(Top three pieces)</span> </h2>
            <div class="art-row">
                {#each top_three as art}
                    <ArtPiece art_data={art} show_details={false} />
                {/each}
            </div>
        </section>
    {/each}
</main>
{:else}
    <Loading />
{/if}

<style>
    main {
        justify-content: start;
        padding: 2rem 0;
        gap: 1rem;
        /* max-width: calc(100vw - 4.5rem); */
        max-width: 100vw;
    }
    .username {
        padding: 0.5rem 2rem;
    }
    .username a {
        color: white;
    }
    .username .hint {
        font-weight: normal;
        font-size: 1.2rem;
    }
    section {
        max-width: 100%;
    }
    .art-row {
        padding: 1rem 2rem;
        max-width: 100vw;
        display: flex;
        gap: 2rem;
        overflow: scroll;
    }
</style>
