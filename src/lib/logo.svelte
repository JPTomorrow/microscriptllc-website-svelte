<script lang="ts">
	import { slide, blur } from 'svelte/transition';
	import { env } from '$env/dynamic/public';
</script>

<a href="/" class="flex h-full items-start transition-transform hover:scale-105">
	<img
		in:slide|global={{ delay: 0, axis: 'x', duration: 400 }}
		alt="logo"
		src="/images/logo/logo_512.webp"
		width="45px"
		class="aspect-[512/293] self-center pb-1 mr-2"
	/>
	<div class="relative w-fit pr-5">
		<p in:blur|global={{ delay: 200, duration: 400 }} class="text-3xl md:text-4xl font-thin">
			{env.PUBLIC_BRAND_NAME}
		</p>
	</div>
</a>
