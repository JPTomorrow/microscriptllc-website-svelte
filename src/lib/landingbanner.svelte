<script lang="ts">
	import { fade } from 'svelte/transition';
	const text = 'test';
</script>

<div class="w-[200px] bg-transparent border-[1px] text-center">
	<h1>TEST</h1>
	<div class="flex justify-center">
		{#each text as c}
			<p class="text-3xl" in:fade>{c}</p>
		{/each}
	</div>
</div>
