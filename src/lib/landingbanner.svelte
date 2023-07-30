<script lang="ts">
	import { onMount } from 'svelte';
	import { blur } from 'svelte/transition';
	let name = [...'Justin Morrow'];

	let visible = false;
	onMount(() => {
		visible = true;
	});
</script>

<div class="w-[200px] bg-transparent text-center">
	<div class="flex justify-center">
		{#if visible}
			{#each name as char, i (i)}
				<p in:blur|global={{ delay: 100 * i, duration: 800 }} class="text-3xl">
					{char}
					{#if char == ' '}
						&nbsp;
					{/if}
				</p>
			{/each}
		{/if}
	</div>
</div>
