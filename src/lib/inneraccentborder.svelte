<script lang="ts">
	import { onMount } from 'svelte';
	import { blur } from 'svelte/transition';
	let clazz: string = '';
	export { clazz as class };
	export let header: string = '';

	let animate = false;

	onMount(() => {
		animate = true;
	});
</script>

<div class={`flex flex-col ${clazz}`}>
	{#if header != '' && animate}
		<h1 in:blur|global class="text-5xl font-thin mb-5">{header}</h1>
	{/if}
	<div class="divider w-full" />
	<div class="divider w-[98%] mt-1" />
	{#if animate}
		<div class="pl-2 pr-10 my-4" in:blur|global>
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
	<div class="divider w-3/4" />
</div>

<style lang="postcss">
	.divider {
		@apply h-[1px] bg-secondary-500;
	}
</style>
