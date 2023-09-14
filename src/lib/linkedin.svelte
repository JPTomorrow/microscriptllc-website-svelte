<script lang="ts">
	import { popup, type PopupSettings } from '@skeletonlabs/skeleton';
	import { BrandLinkedin } from 'tabler-icons-svelte';

	const popupHover: PopupSettings = {
		event: 'hover',
		target: 'linkedinpopup',
		placement: 'top'
	};
</script>

<div class="hover:scale-110 transition-transform duration-75">
	<a
		href="https://www.linkedin.com/company/microscript-llc"
		target="_blank"
		class="[&>*]:pointer-events-none"
		use:popup={popupHover}
	>
		<BrandLinkedin class="rounded-full" size="40" strokeWidth="1.2" />
	</a>
</div>

<div class="card mt-3 p-4 variant-outline-secondary" data-popup="linkedinpopup">
	<p class="text-md"><strong>Our LinkedIn</strong></p>
	<p>Connect with our business on LinkedIn</p>
	<div class="arrow variant-filled-secondary" />
</div>
