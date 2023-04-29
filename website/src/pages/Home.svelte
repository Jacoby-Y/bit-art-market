<script lang="ts">
    import { onMount } from "svelte";
    import { replace } from "svelte-spa-router";
    import Gallery from "../comps/Gallery.svelte";
    import Logs from "../comps/home/Logs.svelte";
    import { alert, user, user_gallery } from "../stores/store";
    import client from "../utils/client";

    let gallery: ArtData[] = $user_gallery;
    $: gallery = $user_gallery;
    
    $: sub_pages = [
        { comp: Gallery, props: { gallery, hide_owner: false } as {}, name: "Gallery" },
        { comp: Logs, props: {}, name: "Logs" },
    ];
    let sub_page_index = 0;

    onMount(async ()=>{
        const res = await client.authGallery();
        if (!res.ok) return alert.set({ theme: "error", msg: res?.data?.msg ?? "Can't load your gallery!" })
        // console.log(res);
        
        gallery = res.data.gallery;
        $user_gallery = gallery;

        console.log(gallery[6]);
        // console.log(gallery.map(v => v.palette));
        // gallery[7].palette = "Old Glory";

        const self = await client.getSelf();
        if (!self.ok) {
            $user = null;
            replace("/login");
        } else {
            if (self.data.daily_gain > 0) alert.set({ theme: "info", msg: `You gained ${self.data.daily_gain} coins today!` });
            else alert.set({ theme: "info", msg: `${self.data.hours_to_bonus} hours to daily bonus` });
            $user = { username: self.data.username, coins: self.data.coins };
        }
    });
    
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<main class="flex-page">
    <div id="tabs">
        {#each sub_pages as page, i}
            <p class:selected={sub_page_index == i} on:click={()=>{ sub_page_index = i }}>{page.name}</p>
        {/each}
    </div>
    <svelte:component this={sub_pages[sub_page_index].comp} {...sub_pages[sub_page_index].props} />
    <!-- <AuthGallery {gallery} /> -->
</main>

<style lang="scss">
    main {
        justify-content: flex-start;
        padding-top: 2rem;
    }
    #tabs {
        display: flex;
        flex-wrap: wrap;
        padding: 0 2rem;
        gap: 1rem;

        p {
            background-color: #1d1d21;
            padding: 1rem 1.2rem;
            border-radius: 2rem;
            font-weight: bold;
            font-size: 1.2rem;
            cursor: pointer;

            &.selected {
                border-left: 2px solid black;
                margin-left: -2px;
                border-right: 2px solid black;
                margin-right: -2px;
            }

            &:hover {
                filter: brightness(120%);
            }
        }
    }
</style>
