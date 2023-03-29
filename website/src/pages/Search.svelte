<script lang="ts">
    import { onMount } from "svelte";
    import { replace } from "svelte-spa-router";
    import ArtPiece from "../comps/ArtPiece.svelte";
    import Gallery from "../comps/Gallery.svelte";
    import { alert } from "../stores/store";
    import client from "../utils/client";
    
    export let params: { filter: string } = { filter: "popular" };

    let filters = ["new", "old", "expensive", "cheap", "popular", "unpopular"];
    $: selected = params.filter;
    let page = 0;

    let gallery: ArtData[] = null;
    let loading = false;

    const selectFilter = async (filter: string)=>{
        page = 0;
        gallery = null;

        if (!filters.includes(selected)) {
            replace(`/search/popular`);
            return alert.set({ theme: "error", msg: "Invalid filter!" });
        } else {
            alert.set({ theme: "error", msg: null });
            replace(`/search/${filter}`);
        }

        await loadPage(page, filter);
    }

    const loadPage = async (page: number, filter=selected)=>{
        gallery = null;

        loading = true;
        const res = await client.getArtByFilter(filter, 8, page);
        loading = false;
        
        if (!res.ok) return alert.set({ theme: "error", msg: res?.data?.msg ?? "Can't get art!" });
        gallery = res.data.result;
    }

    onMount(()=>{
        selectFilter(selected);
    });

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<main class="flex-page">
    <!-- <div id="search">
        <input type="text" name="username" id="username" placeholder="Some username">
        <button>Search</button>
    </div> -->
    <section id="art-wrapper">
        <div id="filters" class:loading>
            {#each filters as filter}
                <p class="filter" class:selected={selected == filter} on:click={()=> selectFilter(filter)}>{filter}</p>
            {/each}
        </div>
        <div id="page-number">
            <span class="arrow" class:disabled={page <= 0} on:click={()=> loadPage(--page)}>&lt;</span>
            <b>Page: {page + 1}</b>
            <span class="arrow" on:click={()=> loadPage(++page)}>&gt;</span>
        </div>
        <Gallery {gallery} hide_owner={true} />
    </section>
</main>

<style>
    main {
        justify-content: start;
    }
    /* #search {
        padding: 2rem;
        border-bottom: 2px solid #bbb;
    } */
    #filters {
        display: flex;
        gap: 1rem;
        padding: 1rem;
        max-width: 100%;
        flex-wrap: wrap;
        justify-content: center;
    }
    #filters.loading .filter {
        opacity: 0.6;
        pointer-events: none;
    }
    .filter {
        background-color: #555;
        padding: 0.5rem 0.7rem;
        border-radius: 1rem;
        cursor: pointer;
        user-select: none;
        text-transform: capitalize;
    }
    .filter:hover {
        background-color: #666;
    }
    .filter.selected {
        border-left: 2px solid #bbb;
        margin-left: -2px;
        border-right: 2px solid #bbb;
        margin-right: -2px;
    }

    #page-number {
        font-size: 1.5rem;
        font-weight: bold;
        display: flex;
        gap: 1rem;
    }
    #page-number .arrow {
        height: 2rem;
        width: 2rem;
        padding-top: 2px;
        text-align: center;
        display: block;
        cursor: pointer;
        background-color: #55555599;
        border-radius: 50%;
    }
    #page-number .arrow:hover {
        background-color: #555555;
    }
    #page-number .arrow.disabled {
        pointer-events: none;
        opacity: 0.5;
    }

    #art-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    /* #gallery {
        width: 100%;
        max-width: 600px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
        padding: 2rem 1rem;
    } */
</style>
