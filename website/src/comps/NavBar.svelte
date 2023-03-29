<script>
    import { link } from 'svelte-spa-router'
    import { alert, user } from '../stores/store';

    let menu_open = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<main on:click={()=>(menu_open = false, alert.set({ theme: "info", msg: null }))} class:open={menu_open}>
    {#if $user != null}
    <h3 id="user-txt"><a href="/gallery/{$user.username}" use:link>{$user.username}</a> <i class="bi bi-coin">{$user.coins}</i></h3>
    <nav>
        <a href="/home" use:link>Home</a>
        <a href="/social" use:link>Social</a>
        <a href="/search/popular" use:link>Search</a>
        <a href="/canvas" use:link>Canvas</a>
    </nav>
    <a href="/" use:link id="home"><i class="bi bi-house-fill"></i></a>
    {:else}
    <nav>
        <a href="/login" use:link>Login</a>
    </nav>
    {/if}
</main>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<i class="bi bi-list" id="menu-toggle" on:click={()=>{ menu_open = !menu_open }}></i>

<style>
    main {
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
            /* padding-bottom: 2rem; */
            /* height: 100%; */
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
</style>
