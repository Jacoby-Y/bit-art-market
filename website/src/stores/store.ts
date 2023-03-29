import { writable } from "svelte/store";

export const alert = writable<Alert>({ theme: "info", msg: null });
export const user = writable<User | null>(null);
export const loading = writable({ on: false, center: true });