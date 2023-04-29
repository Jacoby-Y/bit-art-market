<script>
    import { alert } from "../stores/store";

    const closeAlert = ()=>{
        $alert.msg = null;
    }

    let last_msg = "";
    let stack = 1;

    alert.subscribe(({ msg })=>{
        if (msg == last_msg) stack++;
        else {
            last_msg = msg;
            stack = 1;
        }
    })
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
{#if $alert.msg !== null}
    {@const {theme, msg} = $alert }
    <main class="theme-{theme}" on:click={closeAlert}>
        {msg}
        {#if stack > 1}
            <h2 class="stack">{stack}</h2>
        {/if}
    </main>
{/if}

<style>
    main {
        position: fixed;
        top: 5.5rem;
        right: 5.5rem;
        /* left: 50%;
        transform: translate(-50%, 0); */
        background-color: inherit;
        border: 2px solid;
        border-radius: 1rem;
        padding: 1rem 1.2rem;
        font-size: 1.2rem;
        font-weight: bold;
        cursor: pointer;
        background-color: #333;
        text-align: center;
    }

    .theme-success {
        border-color: #09b609;
        color: #39ff39;
    }
    .theme-info {
        border-color: #09b696;
        color: #8affea;
    }
    .theme-error {
        border-color: #ef3e3e;
        color: #ffa0a0;
    }

    .stack {
        position: absolute;
        left: 0;
        bottom: 0;
        transform: translate(-50%, 50%);
        background-color: inherit;
        border: inherit;
        font-size: 1.2rem;
        padding: 0.1rem 0.5rem;
        border-radius: 1.5rem;
    }

    @media only screen and (max-width: 1000px) {
        main {
            top: auto;
            bottom: 2rem;
            left: 2rem;
            right: 2rem;
            z-index: 30;
            font-size: 1.5rem;
        }
    }
</style>
