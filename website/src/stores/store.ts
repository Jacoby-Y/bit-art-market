import { writable } from "svelte/store";
import config from "../config";

export const alert = writable<Alert>({ theme: "info", msg: null });
export const user = writable<User | null>(null);
export const loading = writable({ on: false, center: true });

export const paint_inv = writable<Paints>(
    Object.fromEntries(
        Object.keys(config.color_map).filter(k => k != "B&W").map(k => [k, 1])
    )
);

export const user_gallery = writable<ArtData[]>(null);

export const palette_edit = writable<PaletteEdit>({
    on: false,
    art_data: null,
});