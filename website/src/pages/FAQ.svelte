<script>
    import FaqBlock from "../comps/FAQBlock.svelte";

    
</script>

<main class="flex-page">
    <section>
        <FaqBlock title="How do I make money?">
            You can login every 20 hours for a login bonus! This bonus is 20 + the total rating of your gallery (likes-dislikes).
        </FaqBlock>
        <FaqBlock title="There's a bug!">
            I'll fix it eventually.
        </FaqBlock>
        <FaqBlock title="There's an inappropriate art piece!">
            I'll shadow-ban it eventually.
        </FaqBlock>
    </section>
</main>

<style>
    main {
        padding-top: 8rem;
        justify-content: start;
    }
    section {
        max-width: 600px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
</style>
