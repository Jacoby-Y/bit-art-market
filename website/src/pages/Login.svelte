<script lang="ts">
    import GoogleLogin from "../comps/GoogleLogin.svelte";
    import { replace } from "svelte-spa-router";
    import { alert, user } from "../stores/store";
    import Loading from "../comps/Loading.svelte";

    if ($user != null) replace("/home");
    let loading = false;

    const setAlertPush = (theme: AlertTheme, msg: string, push_to: string)=>{
        alert.set({
            theme, msg
        });
        replace(push_to);
    }

    const onSignIn = (response: GoogleAuthResponse)=>{
        loading = false;
        if (!response.ok) setAlertPush("error", response.data.msg, "/login");
        else if (response.data.set_username === true) setAlertPush("info", response.data.msg, "/set-name");
        else {
            // console.log(response.data);
            $user = { username: response.data.username, coins: response.data.coins };
            setAlertPush("success", response.data.msg, "/home");
        }
    }
</script>

{#if !loading}
<main class="flex-page">
    <h1>Login</h1>
    <GoogleLogin callback={onSignIn} precall={()=>{ loading = true }} />
    <p class="hint">More sign in methods coming soon...</p>
</main>
{:else}
    <Loading />
{/if}

<style>
    main {
        gap: 1rem;
    }
</style>
