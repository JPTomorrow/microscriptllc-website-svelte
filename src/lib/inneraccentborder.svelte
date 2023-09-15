<script lang="ts">
	import { onMount } from 'svelte';
	import { blur } from 'svelte/transition';
	let clazz: string = '';
	export { clazz as class };

	let animate = false;

	onMount(() => {
		animate = true;
	});
</script>

<div class="flex flex-col items-center lg:items-start {clazz}">
	{#if animate}
		<div in:blur|global class="header">
			<slot name="header" />
		</div>
	{:else}
		<div class="placeholder mb-5" />
	{/if}
	<div class="divider w-full" />
	<div class="divider w-[98%] mt-1" />
	{#if animate}
		<div class="lg:pl-2 lg:pr-10 my-4" in:blur|global>
			<slot name="content" />
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

	.header {
		@apply text-3xl text-center lg:text-left font-normal lg:text-5xl lg:font-thin mb-5;
	}
</style>
