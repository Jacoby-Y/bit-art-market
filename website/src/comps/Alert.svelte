<script>
    import { alert } from "../stores/store";

    const closeAlert = ()=>{
        $alert.msg = null;
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
{#if $alert.msg !== null}
    {@const {theme, msg} = $alert }
    <main class="theme-{theme}" on:click={closeAlert}>
        {msg}
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
