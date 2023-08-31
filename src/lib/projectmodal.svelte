<script lang="ts">
	import { modalShowStore, setShowModal } from '$lib/modalStore';
	import { slide } from 'svelte/transition';
</script>

{#if $modalShowStore}
	<button
		class="blackout"
		on:click={() => {
			setShowModal(null);
		}}
	/>
	<div
		in:slide={{ duration: 400 }}
		out:slide={{ duration: 400 }}
		class="fixed-centered custom-card flex flex-col"
	>
		<h2>{$modalShowStore.description}</h2>
		<div class="flex flex-grow items-end flex-wrap gap-3 mt-3">
			{#each $modalShowStore.skills as s, i (i)}
				<span class="badge variant-filled rounded-full">{s}</span>
			{/each}
		</div>
	</div>
{/if}

<style lang="postcss">
	.blackout {
		@apply z-30 bg-black bg-opacity-90 fixed top-0 left-0 w-screen h-screen cursor-default;
	}

	.custom-card {
		@apply z-40 p-5 bg-transparent border-y-[2px] rounded-xl border-secondary-500 pointer-events-none select-none;
	}
</style>
