<script lang="ts">
</script>

<div class="flex flex-col text-center items-center">
	<slot name="header" />
	<div class="divider transparent-gradient-fade w-full !border-[2px] border-double" />
	<slot name="content" />
	<div class="divider transparent-gradient-fade w-10/12" />
</div>

<style lang="postcss">
	.divider {
		@apply border-[1px] border-secondary-700;
	}

	div :global(p) {
		@apply text-sm py-3;
	}

	div :global(h1) {
		@apply text-2xl font-semibold mb-3 uppercase;
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
