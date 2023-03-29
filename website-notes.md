## What can I do better next time when making a Svelte app?
- Well, probably using the `{#await promise}` block. That would be nice.
- Another thing would be better organizing my client functions and using Axios.
- I also probably need to componentize more often.
- Along with componentization, I should organize things in sub-folders in `/comps`. (Maybe just call it `/components` instead)
- I should also better encapsulate my global styles. So, having an `app.scss` which just imports styles from `/styles/*`.
- Have a better way of blocking unauthorized users from going to specific routes. Maybe using `Wrap` from `svelte-spa-router/wrap`.