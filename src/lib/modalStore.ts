import { writable, type Writable } from "svelte/store";

export const modalShowStore: Writable<WorkProject | null> = writable();

// ONLY WORKS FOR ONE MODAL
export function setShowModal(proj: WorkProject | null) {
    modalShowStore.set(proj);
}