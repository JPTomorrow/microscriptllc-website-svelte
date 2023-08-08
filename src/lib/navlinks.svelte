<script lang="ts">
	import { onMount } from 'svelte';
	import { sineInOut } from 'svelte/easing';
	import { blur } from 'svelte/transition';

	let animationStart = false;

	onMount(() => {
		animationStart = true;
	});

	const navLinks: NavLink[] = [
		{ name: 'Home', path: '/' },
		{ name: 'About', path: '/about' },
		{ name: 'Skills', path: '/skills' },
		{ name: 'Projects', path: '/projects' },
		{ name: 'Contact Us', path: '/contact' }
	];
</script>

{#if animationStart}
	<nav class="flex h-full gap-4 items-center mr-5">
		{#each navLinks as l, i (i)}
			<a
				in:blur|global={{ delay: i * 100, duration: 800, easing: sineInOut }}
				class="nav-link"
				href={l.path}>{l.name}</a
			>
		{/each}
	</nav>
{/if}
