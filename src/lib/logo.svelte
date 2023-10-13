<script lang="ts">
	import { slide } from 'svelte/transition';
	import { env } from '$env/dynamic/public';
</script>

<a href="/" class="flex h-full items-start transition-transform hover:scale-105">
	<div class="relative w-fit pr-5">
		<p
			in:slide|global={{ delay: 0, axis: 'x', duration: 300 }}
			class="text-2xl md:text-3xl font-thin"
		>
			{env.PUBLIC_BRAND_NAME}
		</p>
		<div class="absolute bottom-[4px] left-0 bg-secondary-600 w-[134px] h-[1px]" />
		<div class="absolute bottom-[4px] right-0 bg-secondary-600 w-[43px] h-[1px]" />
		<div class="absolute bottom-[1px] left-[5px] bg-secondary-800 w-[131px] h-[1px]" />
		<div class="absolute bottom-[1px] right-0 bg-secondary-800 w-[41px] h-[1px]" />
	</div>
	<img
		in:slide|global={{ delay: 200, axis: 'x', duration: 600 }}
		alt="logo"
		src="/images/logo.webp"
		width="45px"
		height="45px"
		class="w-[40px] h-[40px] md:w-[45px] md:h-[45px] self-center -ml-4 pb-1"
	/>
</a>
