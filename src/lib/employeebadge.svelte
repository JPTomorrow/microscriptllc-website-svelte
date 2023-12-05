<script lang="ts">
	import { onMount } from 'svelte';
	import { scale, blur } from 'svelte/transition';

	function getFadeTimings(word: string[], delay: number): number[] {
		const halfway = word.length / 2;
		const delayInc = delay / halfway;

		return word.map((_, i) =>
			i < halfway ? delayInc * (word.length - i + 1) : delayInc * (i + 1)
		);
	}

	export let employeeName: string = '';
	export let employeeTitle: string = '';
	export let employeeImage: string = '';

	const name = [...employeeName];
	const title = [...employeeTitle];
	const nameTimings = getFadeTimings(name, 500);
	const titleTimings = getFadeTimings(title, 500);

	// required to make animations play on load
	let visible = false;
	onMount(() => {
		visible = true;
	});
</script>

<div class="hidden md:flex w-full flex-col gap-5 justify-center items-center">
	{#if visible}
		<div in:scale|global={{ delay: 50, duration: 600 }}>
			<div class="avatar mb-3">
				<div
					class="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 shadow-md shadow-secondary"
				>
					<img src={employeeImage} alt="justin-morrow-badge" />
				</div>
			</div>
		</div>
		<div class="flex flex-col font-thin">
			<div class="flex items-center justify-center">
				{#each name as char, i (i)}
					<p in:blur|global={{ delay: 0 + nameTimings[i], duration: 800 }} class="text-3xl">
						{char}
						{#if char == ' '}
							&nbsp;
						{/if}
					</p>
				{/each}
			</div>
			<div class="flex items-center justify-center">
				{#each title as char, i (i)}
					<p in:blur|global={{ delay: 0 + titleTimings[i], duration: 800 }} class="text-xl">
						{char}
						{#if char == ' '}
							&nbsp;
						{/if}
					</p>
				{/each}
			</div>
		</div>
	{/if}
</div>
