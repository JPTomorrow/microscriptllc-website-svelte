<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let countdown: number = 5;

	onMount(() => {
		const id = setInterval(() => {
			countdown--;
			if (countdown <= 0) {
				clearInterval(id);
				goto('/');
			}
		}, 1000);
	});
</script>

<div class="flex justify-center items-center h-screen">
	<div class="flex flex-col gap-10 w-2/3 items-center text-center">
		<h1 class="text-3xl">{$page.status} - {$page.error?.message}</h1>
		<p class="text-lg">
			Woops! It seems that your browser has encountered an error while loading a page on our
			website. Don't worry! We will send you back to the homepage.
		</p>
		<p class="text-lg">
			Returning to homepage in {countdown} seconds...
		</p>
		<a href="/" class="btn1">Back to Home</a>
	</div>
</div>
