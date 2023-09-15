<script lang="ts">
	let clazz: string = '';
	export { clazz as class };
</script>

<div class="min-h-full flex flex-col items-center lg:items-start {clazz}">
	<div class="header">
		<slot name="header" />
	</div>
	<div class="divider w-full" />
	<div class="divider w-[98%] mt-1" />
	<div class="lg:pl-2 lg:pr-10 my-4">
		<slot name="content" />
	</div>
	<div class="divider w-3/4" />
	<div class="w-3/4 flex justify-center lg:justify-start gap-5 mt-7">
		<slot name="buttons" />
	</div>
</div>

<style lang="postcss">
	.divider {
		@apply h-[1px] bg-secondary-500;
	}

	.header {
		@apply text-3xl text-center lg:text-left font-normal lg:text-5xl lg:font-thin mb-5;
	}
</style>
