<script>
    import { link, location } from 'svelte-spa-router'
    import { alert, nav_open, user } from '../stores/store';

    let menu_open = true;
    let user_width = 0;

    $: $nav_open = menu_open;

    const links = [
        ["/home", "bi-house-fill"], 
        ["/social", "bi-people-fill"], 
        ["/search/popular", "bi-search"], 
        ["/canvas", "bi-easel-fill"], 
        ["/shop", "bi-cart-fill"], 
    ];  
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<main
    style="clip-path: inset(0 -{user_width}px 0 0);"
    on:click={()=>(alert.set({ theme: "info", msg: null }))}
    class:open={menu_open}
    >
    <i class="bi bi-list"></i>
    {#if $user != null}
    <h3 id="user-txt" bind:clientWidth={user_width}>
        <a href="/gallery/{$user.username}" use:link>{$user.username}</a>
        <br/>
        <i class="bi bi-coin">{$user.coins}</i>
    </h3>
    <nav>
        {#each links as [to, icon], i}
            <a href="{to}" use:link class:selected={$location.includes(to)}><i class="bi {icon}"></i></a>
        {/each}
    </nav>
    <a href="/" use:link id="home"><i class="bi bi-arrow-left-square-fill"></i></a>
    {:else}
    <nav>
        <a href="/login" use:link><i class="bi bi-box-arrow-in-right"></i></a>
    </nav>
    {/if}
</main>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<i class="bi bi-list" id="menu-toggle" on:click={()=>{ menu_open = !menu_open }}></i>

<div id="nav-backdrop"></div>

<style>
    #nav-backdrop {
        width: 4.5rem;
        transition-duration: 0.3s;
    }
    main {
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        padding-top: 0.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #1d1d21;
        z-index: 5;
        clip-path: inset(0 -100rem 0 0);
        transition-duration: 0.3s;
    }
    main:not(.open) {
        clip-path: inset(0 100% 0 0) !important;
    }
    main:not(.open) ~ #nav-backdrop {
        width: 0;
    }
    nav {
        display: flex;
        flex-direction: column;
        padding: 4rem 0.5rem;
        padding-top: 2rem;
        gap: 3rem;
    }
    nav a.selected {
        position: relative;
    }
    nav a.selected:after {
        position: absolute;
        content: "—";
        left: 50%;
        top: 100%;
        transform: translate(-50%, -50%);
        font-weight: bold;
    }
    a, i.bi {
        font-size: 1.5rem;
        cursor: pointer;
    }
    i.bi {
        padding: 1rem;
    }
    a i.bi {
        border-radius: 50%;
        transition-duration: 0.3s;
        background: radial-gradient(#1d1d21, #1d1d21 80%);
    }
    a i.bi:hover {
        background: radial-gradient(#313138, #1d1d21 80%);
    }
    a {
        color: white;
    }

    #user-txt {
        position: absolute;
        left: 100%;
        top: 0;
        line-height: 2rem;

        width: max-content;
        background-color: #1d1d21;
        padding: 1rem 1rem;
        border-bottom-right-radius: 1rem;
    }
    #user-txt a {
        padding-right: 0.7rem;
    }
    #user-txt .bi {
        padding: 0;
    }

    #menu-toggle {
        position: fixed;
        top: 0;
        left: 0;
        background-color: red;
        width: 4.5rem;
        text-align: center;
        border-bottom-right-radius: 1rem;
        background-color: #1d1d21;
        z-index: 6;
    }

    /* main {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: -4rem;
        z-index: 5;
    }
    nav {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        padding: 0rem 2rem;
        height: 4rem;
        border-bottom: 2px solid white;
    }
    a {
        color: white;
        text-decoration: none;
        font-size: 1.5rem;
        font-weight: bold;
    }
    a:hover {
        text-decoration: underline;
    }

    #user-txt {
        position: absolute;
        left: 2rem;
        top: 2rem;
        transform: translate(0, -50%);
        cursor: pointer;
    }
    #menu-toggle {
        display: none;
        position: absolute;
        top: 0;
        right: 0;
        padding: 1rem;
        font-size: 2rem;
        cursor: pointer;
        z-index: 20;
    }

    #home {
        position: absolute;
        right: 0;
        top: 0;
        padding: 1rem 2rem;
    }
    
    @media only screen and (max-width: 1000px) {
        #menu-toggle {
            display: block;
        }
        main {
            position: absolute;
            background-color: #333;
            right: 0;
            top: 0;
            width: max-content;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;
            z-index: 10;
            min-width: 275px;
            width: 50%;
            padding-top: 4rem;
            transform: translate(100%, 0);
            transition-duration: 0.3s;
            border-bottom-left-radius: 10px;
        }
        main.open {
            transform: translate(0, 0);
        }
        #user-txt {
            left: 1.5rem;
            right: 4rem;
            display: grid;
            grid-template-columns: 1fr max-content;
            align-items: center;
            justify-items: center;
            gap: 1rem;
        }
        #user-txt a {
            max-width: 100%;
            text-overflow: "·";
            white-space: nowrap;
            overflow: hidden;
        }
        nav {
            flex-direction: column;
            height: max-content;
            align-items: flex-end;
            padding: 0;
            width: 100%;
            border: none;
            gap: 5px;
            padding: 1rem;
        }
        nav a {
            background-color: #444;
            width: 100%;
            padding: 1rem;
            text-align: center;
        }
        nav a:hover {
            background-color: #4a4a4a;
        }
        nav a:first-child {
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }
        nav a:last-child {
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
        }

        #home {
            top: 100%;
            background-color: #333;
            border-bottom-left-radius: 10px;
            padding: 1.2rem 2rem;
        }
    }
    */
</style>
