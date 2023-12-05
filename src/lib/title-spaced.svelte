<script lang="ts">
	export let headerText: string = 'header';
	const text = [...headerText];
</script>

<div
	class="hidden md:flex w-full justify-between border-y-[1px] border-secondary md:px-32 py-3 mt-5"
>
	{#each text as c, i (i)}
		<p class="text-7xl font-thin uppercase">
			{#if c !== ' '}
				{c}
			{:else}
				&nbsp;
			{/if}
		</p>
	{/each}
</div>

<h1
	class=" md:hidden uppercase font-thin text-4xl w-full text-center border-y-[1px] border-secondary py-3"
>
	{headerText}
</h1>
