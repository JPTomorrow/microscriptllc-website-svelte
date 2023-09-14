<script lang="ts">
	import { popup, type PopupSettings } from '@skeletonlabs/skeleton';
	import { BrandGithub } from 'tabler-icons-svelte';

	const popupHover: PopupSettings = {
		event: 'hover',
		target: 'popupHover',
		placement: 'top'
	};
</script>

<div class="hover:scale-110 transition-transform duration-75">
	<a
		aria-label="Github"
		href="https://github.com/JPTomorrow"
		target="_blank"
		class="[&>*]:pointer-events-none"
		use:popup={popupHover}
	>
		<BrandGithub class="border-[2px] border-primary-200 rounded-full p-1" size="32" />
	</a>
</div>

<div class="card mt-3 p-4 variant-outline-secondary" data-popup="popupHover">
	<p class="text-md"><strong>Justin's Github</strong></p>
	<p>Proof of programming skills</p>
	<div class="arrow variant-filled-secondary" />
</div>
