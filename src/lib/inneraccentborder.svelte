<script lang="ts">
	import { onMount } from 'svelte';
	import { blur } from 'svelte/transition';
	let clazz: string;
	export { clazz as class };

	let animate = false;

	onMount(() => {
		animate = true;
	});
</script>

<div class={`flex flex-col gap-5 ${clazz}`}>
	<div class="divider" />
	{#if animate}
		<div in:blur|global>
			<slot />
		</div>
	{:else}
		<div class="p-4 space-y-4">
			<div class="placeholder" />
			<div class="placeholder" />
			<div class="placeholder" />
			<div class="placeholder" />
		</div>
	{/if}
	<div class="divider" />
</div>

<style lang="postcss">
	.divider {
		@apply w-full h-[1px] bg-secondary-500;
	}
</style>
