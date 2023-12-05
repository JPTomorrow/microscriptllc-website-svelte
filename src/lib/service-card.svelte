<script lang="ts">
</script>

<div class="flex flex-col text-center items-center justify-between">
	<div class="flex flex-col w-full items-center">
		<slot name="header" />
		<div class="divider transparent-gradient-fade w-full !border-[2px] border-double" />
		<slot name="content" />
	</div>
	<div class="flex flex-col w-full items-center">
		<div class="divider transparent-gradient-fade w-10/12 mt-1" />
		<slot name="read-more" />
		<div class="divider transparent-gradient-fade w-10/12" />
	</div>
</div>

<style lang="postcss">
	.divider {
		@apply border-[1px] h-[1px] self-center border-secondary m-2;
	}

	div :global(p) {
		@apply text-sm pb-2 pt-3;
	}

	div :global(h1) {
		@apply text-xl lg:text-2xl font-normal lg:font-semibold mb-3 uppercase;
	}

	div :global(a) {
		@apply transition-colors duration-100 hover:text-neutral;
	}

	.transparent-gradient-fade {
		--mask: linear-gradient(
				to right,
				rgba(0, 0, 0, 0.2) 0,
				rgba(0, 0, 0, 1) 10%,
				rgba(0, 0, 0, 1) 90%,
				rgba(0, 0, 0, 0.2) 100%
			)
			100% 50% / 100% 100% repeat-x;

		-webkit-mask: var(--mask);
		mask: var(--mask);
	}
</style>
