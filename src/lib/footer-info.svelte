<script lang="ts">
	import Github from '$lib/github.svelte';
	import Linkedin from '$lib/linkedin.svelte';
</script>

<div
	class="w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center text-center lg:items-start lg:text-left lg:gap-0 gap-5"
>
	<div>
		<h1 class="footer-header">Links</h1>
		<ul>
			<li>
				<a href="/" class="nav-link"> Home </a>
			</li>
			<li>
				<a href="/coming-soon" class="nav-link"> Blog </a>
			</li>
		</ul>
	</div>
	<div>
		<h1 class="footer-header">Our Process</h1>
		<ul>
			<li><a href="/coming-soon" class="nav-link">Branding</a></li>
			<li><a href="/coming-soon" class="nav-link">SEO</a></li>
		</ul>
	</div>
	<div>
		<h1 class="footer-header">Resources</h1>
		<ul>
			<li><a href="/coming-soon" class="nav-link">Client Portal</a></li>
			<li><a href="/coming-soon" class="nav-link">Email Newsletter</a></li>
		</ul>
	</div>
	<div>
		<h1 class="footer-header">Contact</h1>
		<ul>
			<li>
				<a href="mailto:connect@microscriptllc.com" class="nav-link">connect@microscriptllc.com</a>
			</li>
			<li><a href="tel:3854200435" class="nav-link">(385) 420-0435</a></li>
		</ul>
	</div>
</div>
<div class="flex flex-col w-full items-center">
	<div class="flex w-full items-center mt-5 lg:mt-32">
		<div class="divider" />
		<div class="flex px-5 gap-5 items-center">
			<Linkedin />
			<Github />
		</div>
		<div class="divider" />
	</div>
	<div class="flex flex-col items-center text-center lg:text-left">
		<h1 class="hidden lg:block mt-4">© 2023 MicroScript LLC. | All Rights Reserved</h1>
		<h1 class="lg:hidden mt-4">© 2023 MicroScript LLC</h1>
		<h1 class="lg:hidden">All Rights Reserved</h1>
		<a href="/privacy-policy" class="mt-5 text-sm nav-link">Privacy Policy</a>
	</div>
</div>

<style lang="postcss">
	li {
		@apply text-sm;
	}

	.footer-header {
		@apply font-semibold text-xl underline underline-offset-4 mb-1;
	}

	.divider {
		@apply w-full border-t-[1px] border-primary-100;
	}
</style>
