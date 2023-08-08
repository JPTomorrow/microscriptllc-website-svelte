<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import { blur } from 'svelte/transition';
	const justinName = [...'Justin Morrow'];
	const justinTitle = [...'Co-Founder / CTO'];
	const thomasName = [...'Thomas Bender'];
	const thomasTitle = [...'Co-Founder / PRO'];

	const quote_lines = [
		[...'Knowledge must continually be renewed...'],
		[...'It resembles a statue of marble...'],
		[...'threatened by the shifting sands']
	];

	function getFadeTimings(word: string[], delay: number): number[] {
		const halfway = word.length / 2;
		const delayInc = delay / halfway;

		return word.map((_, i) =>
			i < halfway ? delayInc * (word.length - i + 1) : delayInc * (i + 1)
		);
	}

	const justinNameTimings = getFadeTimings(justinName, 500);
	const justinTitleTimings = getFadeTimings(justinTitle, 500);
	const thomasNameTimings = getFadeTimings(thomasName, 500);
	const thomasTitleTimings = getFadeTimings(thomasTitle, 500);
	const quoteTimings = [
		getFadeTimings(quote_lines[0], 500),
		getFadeTimings(quote_lines[1], 500),
		getFadeTimings(quote_lines[2], 500)
	];
	// required to make animations play on load
	let visible = false;
	onMount(() => {
		visible = true;
	});
</script>

<div class="w-fit text-center font-thin bg-transparent">
	<div class="flex w-full font-light gap-10">
		<div class="flex flex-col justify-center items-center">
			<Avatar
				src="/images/profile.webp"
				width="w-[150px]"
				rounded="rounded-full"
				class={`border-[3px] mb-3 transform transition-transform duration-300 ${
					visible ? 'scale-100' : 'scale-0'
				}`}
			/>
			{#if visible}
				<div class="flex flex-col">
					<div class="flex items-center justify-center">
						{#each justinName as char, i (i)}
							<p
								in:blur|global={{ delay: 0 + justinNameTimings[i], duration: 800 }}
								class="text-3xl"
							>
								{char}
								{#if char == ' '}
									&nbsp;
								{/if}
							</p>
						{/each}
					</div>
					<div class="flex items-center justify-center">
						{#each justinTitle as char, i (i)}
							<p
								in:blur|global={{ delay: 0 + justinTitleTimings[i], duration: 800 }}
								class="text-xl"
							>
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
		<div class="flex flex-col justify-center items-center">
			<Avatar
				src="/images/profile.webp"
				width="w-[150px]"
				rounded="rounded-full"
				class={`border-[3px] mb-3 transform transition-transform duration-300 ${
					visible ? 'scale-100' : 'scale-0'
				}`}
			/>
			{#if visible}
				<div class="flex flex-col">
					<div class="flex items-center justify-center">
						{#each thomasName as char, i (i)}
							<p
								in:blur|global={{ delay: 0 + thomasNameTimings[i], duration: 800 }}
								class="text-3xl"
							>
								{char}
								{#if char == ' '}
									&nbsp;
								{/if}
							</p>
						{/each}
					</div>
					<div class="flex items-center justify-center">
						{#each thomasTitle as char, i (i)}
							<p
								in:blur|global={{ delay: 0 + thomasTitleTimings[i], duration: 800 }}
								class="text-xl"
							>
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
	</div>
	{#if visible}
		<div class="flex flex-col items-center mt-5">
			{#each quote_lines as quote, timing_idx}
				<div class="flex">
					{#each quote as char, i (i)}
						<p
							in:blur|global={{
								delay: 1000 * (timing_idx + 1) + quoteTimings[timing_idx][i],
								duration: 800
							}}
							class="text-xl"
						>
							{char}
							{#if char == ' '}
								&nbsp;
							{/if}
						</p>
					{/each}
				</div>
			{/each}
		</div>
	{/if}
</div>
