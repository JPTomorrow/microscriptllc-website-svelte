import { writable } from "svelte/store";

export const scrollYStore = writable(-1);

export function setScrollY(yscroll: number) {
    scrollYStore.set(yscroll);
}