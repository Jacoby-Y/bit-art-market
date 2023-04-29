<script lang="ts">
    import Router from "svelte-spa-router";
    import Wrap from "svelte-spa-router/wrap";
    import Alert from "./comps/Alert.svelte";
    import Home from "./pages/Home.svelte";
    import Login from "./pages/Login.svelte";
    import SetName from "./pages/SetName.svelte";
    import _404 from "./pages/404.svelte";
    import MakeArt from "./pages/Canvas.svelte";
    import NavBar from "./comps/NavBar.svelte";
    import Search from "./pages/Search.svelte";
    import Social from "./pages/Social.svelte";
    import Index from "./pages/Index.svelte";
    import UserGallery from "./pages/UserGallery.svelte";
    import Loading from "./comps/Loading.svelte";
    import Shop from "./pages/Shop.svelte";
    import Faq from "./pages/FAQ.svelte";

    const routes = {
        "/": Index,
        "/home": Home,
        // "/login": Login,
        "/login": Login,
        "/set-name": SetName,
        "/canvas": MakeArt,
        "/shop": Shop,
        "/search/:filter": Search,
        "/gallery/:username": UserGallery,
        "/social": Social,
        "/faq": Faq,
        "*": _404,
    }

    import { replace } from "svelte-spa-router";
    import { onMount } from "svelte/internal";
    import client from "./utils/client";
    import { alert, loading, palette_edit, user } from "./stores/store";
    import PaletteModal from "./comps/PaletteModal.svelte";
    

    let loading_user = true;

    onMount(async ()=>{
        let res: GetSelf = null;
        try {
            res = await client.getSelf();
        } catch(err) {
            console.error(err);
        }
        
        if (!res?.ok) replace("/");
        else {
            if (res.data.daily_gain > 0) alert.set({ theme: "info", msg: `You gained ${res.data.daily_gain} coins today!` });
            $user = { username: res.data.username, coins: res.data.coins };
        }

        loading_user = false;
    });
</script>

<!-- <h1>Hello: {`${loading}`}</h1> -->

{#if !loading_user}
<main>
    <NavBar />
    <Router {routes} />
    <Alert />
</main>
{/if}

{#if $loading.on}
    <Loading center={$loading.center} />
{/if}

{#if $palette_edit.on}
    <PaletteModal />
{/if}

<style>
    /* dark:  #1d1d21 */
    /* light: #232627 */
    main {
        width: 100%;
        height: 100%;
    }
</style>
