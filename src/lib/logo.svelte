<script lang="ts">
	import { slide } from 'svelte/transition';
	import { env } from '$env/dynamic/public';
</script>

<a href="/" class="flex h-full items-start transition-transform hover:scale-105">
	<p
		in:slide|global={{ delay: 0, axis: 'x', duration: 300 }}
		class="text-2xl md:text-3xl font-thin"
	>
		{env.PUBLIC_BRAND_NAME}
	</p>
	<img
		in:slide|global={{ delay: 200, axis: 'x', duration: 600 }}
		alt="logo"
		src="/images/logo.webp"
		width="40px"
		height="40px"
		class="w-[25px] h-[25px] md:w-[40px] md:h-[40px] self-center ml-2"
	/>
</a>
