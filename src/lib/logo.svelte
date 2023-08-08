<script lang="ts">
	import { slide } from 'svelte/transition';
	import { env } from '$env/dynamic/public';
</script>

<a href="/" class="flex h-full items-start transition-transform hover:scale-105">
	<img
		in:slide|global={{ delay: 0, axis: 'x', duration: 600 }}
		alt="logo"
		src="/images/logo.png"
		class="hidden sm:block w-[40px] align-middle mr-5"
	/>
	<p class="text-3xl font-thin">{env.PUBLIC_BRAND_NAME}</p>
</a>
