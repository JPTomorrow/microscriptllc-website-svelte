<script lang="ts">
	import Github from './github.svelte';
	import Linkedin from './linkedin.svelte';
</script>

<div class="z-20 flex flex-col w-full bg-secondary-900 p-16 items-center justify-between">
	<div class="w-full flex justify-between">
		<div>
			<h1 class="footer-header">Links</h1>
			<ul>
				<li>
					<a href="/" class="nav-link"> Home </a>
				</li>
				<li>
					<a href="/" class="nav-link"> Blog </a>
				</li>
			</ul>
		</div>
		<div>
			<h1 class="footer-header">Our Process</h1>
			<ul>
				<li><a href="/" class="nav-link">Branding</a></li>
				<li><a href="/" class="nav-link">SEO</a></li>
			</ul>
		</div>
		<div>
			<h1 class="footer-header">Resources</h1>
			<ul>
				<li><a href="/" class="nav-link">Client Portal</a></li>
				<li><a href="/" class="nav-link">Email Newsletter</a></li>
			</ul>
		</div>
		<div>
			<h1 class="footer-header">Contact</h1>
			<ul>
				<li><a href="/" class="nav-link">connect@microscriptllc.com</a></li>
				<li><a href="/" class="nav-link">(385) 420-0435</a></li>
			</ul>
		</div>
	</div>
	<div class="flex flex-col w-full items-center">
		<div class="flex w-full items-center mt-32">
			<div class="divider" />
			<div class="flex px-5 gap-5 items-center">
				<Linkedin />
				<Github />
			</div>
			<div class="divider" />
		</div>
		<div class="flex flex-col items-center">
			<h1 class="mt-4">© 2023 MicroScript LLC. All Rights Reserved</h1>
			<a href="/" class="mt-5 text-sm nav-link">Privacy Policy</a>
		</div>
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
