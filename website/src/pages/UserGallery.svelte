<script lang="ts">
    import { replace } from "svelte-spa-router";
    import Gallery from "../comps/Gallery.svelte";
    import { alert, user } from "../stores/store";
    import client from "../utils/client";

    export let params: { username?: string } = {};
    
    let following = false;
    let gallery: ArtData[] = null;
    $: follow_txt = following ? "Unfollow user" : "Follow user";
    
    const loadGallery = async (username)=>{
        const res = await client.getUserGallery(username);
        if (!res.ok) {
            console.log(res);
            replace("/home");
            return alert.set({ theme: "error", msg: res?.data?.msg ?? "Can't load user's gallery!" });
        }
        gallery = res.data.gallery;
        following = res.data.following;
    };

    $: loadGallery(params.username);

    const toggleFollow = async ()=>{
        const res = await client.toggleFollow(params.username);
        if (!res.ok) return alert.set({ theme: "error", msg: res?.data?.msg ?? "Can't follow/unfollow user!" });
        following = res.data.type == "follow";
        alert.set({ theme: "success", msg: res.data.msg });
    }
    
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
{#if gallery != null}
    <main class="flex-page">
        <h1><i>{params.username}</i>'s Gallery</h1>
        {#if $user != null && $user.username != params.username}
            <p id="toggle-follow" class:following on:click={toggleFollow}>{follow_txt}</p>
        {/if}
        {#if gallery?.length == 0}
            <h1 id="no-art">{params.username} has no art!</h1>
        {/if}
        <Gallery {gallery} />
    </main>
{/if}

<style>
    main {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
    }
    h1 {
        padding-top: 2rem;
        user-select: none;
    }
    h1 i {
        user-select: text;
    }
    #no-art {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    #toggle-follow {
        padding-top: 0.5rem;
        text-decoration: underline;
        color: #6cffff;
        cursor: pointer;
    }
    #toggle-follow.following {
        color: #ff9292;
    }
</style>
