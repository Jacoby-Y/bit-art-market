<script lang="ts">
    import { onMount } from "svelte";
    import { alert } from "../../stores/store";
    import client from "../../utils/client";

    let logs: { content: string, date: string }[] = [];

    onMount(async ()=>{
        const res = await client.getLogs();
        if (!res.ok) return alert.set({ theme: "error", msg: res?.data?.msg ?? "Uh oh" });
        logs = res.data.logs;
    });
</script>

<main>
    {#each logs as log}
        <div class="log">
            <h2>{log.content}</h2>
            <p class="hint">{log.date}</p>
        </div>
    {/each}
</main>

<style lang="scss">
    main {
        width: 100%;
        // height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        
        padding: 2rem;
        gap: 1rem;
    }

    .log {
        background-color: #1d1d21;
        padding: 1rem 1.2rem;
        border-radius: 10px;
        width: 100%;
        max-width: 50rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        
        h2 {
            font-size: 1.5rem;
        }
    }
</style>
