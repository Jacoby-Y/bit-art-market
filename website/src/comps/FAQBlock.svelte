<script>
    export let title = "Default title";

    let open = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<main>
    <h1 on:click={()=>{ open = !open }}>{title}</h1>
    <p class:open>
        <slot />
    </p>
</main>

<style>
    main, h1, p {
        width: 100%;
    }
    h1 {
        background-color: #333;
        padding: 1.5rem 1.7rem;
        cursor: pointer;
    }
    p {
        background-color: #393939;
        padding: 0 1.2rem;
        font-size: 1.3rem;
        overflow: hidden;
        height: 0px;
        transition-duration: 0.3s;
    }
    p.open {
        height: max-content;
        padding: 1rem 1.2rem;
    }
</style>
