<script lang="ts">
	import { onMount } from 'svelte';
	import { sineInOut } from 'svelte/easing';
	import { blur } from 'svelte/transition';
	import { page } from '$app/stores';
	import links from '$lib/navlinks.json';

	let animationStart = false;

	onMount(() => {
		animationStart = true;
	});

	const navLinks: NavLink[] = links.routes;
</script>

{#if animationStart}
	<nav class="flex h-full gap-4 items-center">
		{#each navLinks as l, i (i)}
			<a
				in:blur|global={{
					delay: (navLinks.length - i) * 100,
					duration: 800,
					easing: sineInOut
				}}
				class="nav-link"
				class:active={$page.url.pathname === l.path}
				href={l.path}
				>{l.name}
			</a>
		{/each}
	</nav>
{/if}

<style>
	.active {
		text-decoration: underline;
		font-weight: bold;
	}
</style>
