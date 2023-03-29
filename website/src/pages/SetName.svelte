<script lang="ts">
    import { alert, user } from "../stores/store";
    import client from "../utils/client";
    import { replace } from "svelte-spa-router";

    if ($user != null) replace("/home");

    let username = "";
    $: valid_name = /^[0-9a-zA-Z_.-]*$/.test(username);

    const setAlertPush = (theme: AlertTheme, msg: string, push_to: string)=>{
        alert.set({
            theme, msg
        });
        push_to && replace(push_to);
    }

    const setUsername = async ()=>{
        const res = await client.setName(username);
        if (res.ok) {
            $user = { username: res.data.username, coins: res.data.coins };
            setAlertPush("success", res.data.msg, null);
            replace("/home");
        }
        else setAlertPush("error", res.data.msg, null);
    }

</script>

<main class="flex-page">
    <h1>Set Your Username</h1>
    <div>
        <input type="username" placeholder="my_unique_display_name" bind:value={username} />
        <button on:click={setUsername} disabled={!valid_name}>Set</button>
    </div>
    <p class="hint" class:invalid={!valid_name}>Must not contain<br>illegal characters or spaces!</p>
</main>

<style>
    main {
        /* flex-direction: row; */
        gap: 1rem;
    }
    .hint {
        font-size: 1.2rem;
        text-align: center;
    }
    .hint.invalid {
        color: #ff6b6b;
    }
</style>
