<script>
    import FaqBlock from "../comps/FAQBlock.svelte";

    
</script>

<main class="flex-page">
    <h1>Questions you might have for TryteMart 32</h1>
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
        <FaqBlock title={"What's a \"tryte\" and why is there 32 of them?"}>
            Well, a tryte is 8 trits. A trit is a single ternary (base 3) digit.
            This is important because each piece of art, as you may know, is only made of 3 colors.
            So, the program stores each art piece is a compressed array of trits.
            Being that each art piece is 16 by 16 pixels, that would make each art piece 256 trits or 32 trytes (256 divided by 8).
            Don't you just love math??
        </FaqBlock>
    </section>
</main>

<style>
    main {
        justify-content: start;
        padding-top: 2rem;
    }
    h1 {
        padding: 2rem;
    }
    section {
        max-width: 600px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
</style>
