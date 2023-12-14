<script lang="ts">
	import FooterInfo from '$lib/footer-info.svelte';

	let clazz: string = '';
	export { clazz as class };
</script>

<div
	class="z-1 flex flex-col w-full bg-secondary filter contrast-125 p-16 items-center justify-between {clazz}"
>
	<FooterInfo />
</div>
