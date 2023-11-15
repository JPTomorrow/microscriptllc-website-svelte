<script lang="ts">
	import { onMount } from 'svelte';
	import { setScrollY } from '$lib/scrollstore';
	import { fade } from 'svelte/transition';
	import Footer from '$lib/footer.svelte';
	import Projectmodal from '$lib/projectmodal.svelte';
	import Seo from '$lib/seo.svelte';
	import AiUi from '$lib/ai-ui.svelte';
	import { ArrowRightRhombus, Bulb, Camera, Devices2 } from 'tabler-icons-svelte';

	// capture scroll to hide header
	let outer: HTMLDivElement;
	onMount(() => {
		setScrollY(outer.scrollTop);
		outer.addEventListener('scroll', (_) => {
			setScrollY(outer.scrollTop);
		});
	});
</script>

<Seo
	title="here are the services we offer"
	description="A page showing the web development services MicroScript LLC offers"
	type="WebPage"
/>

<div in:fade|global={{ duration: 200 }} class="animated-space-bg">
	<div bind:this={outer} class="page-inner-scroll-container">
		<div class="flex flex-col items-center justify-center pt-32">
			<div class="flex flex-col items-center gap-5">
				<h1 class="h1-def">Our Services</h1>
				<div class="h-[1px] w-2/3 md:w-1/6 bg-primary-300" />
				<p class="w-11/12 md:w-3/4 text-base md:text-2xl font-extralight text-center">
					We offer a full spectrum of digital services and advanced web features designed to grow
					your online presence and drive online business sales!
				</p>
			</div>

			<!-- Web Development Service -->
			<div
				id="web-dev-service"
				class="flex custom-card bg-tertiary-500 gap-5 py-10 px-10 mt-10 border-t-[1px] border-secondary-700"
			>
				<div class="flex flex-col gap-6 lg:gap-3 w-full lg:w-1/2 justify-between">
					<div class="flex flex-col gap-3 text-center md:text-left items-center md:items-start">
						<h2 class="h2-def">Web Development</h2>
						<div class="h-[1px] w-4/6 bg-secondary-700" />
						<p class="p-def">
							MicroScript specializes in comprehensive web development services, catering to the
							needs of businesses looking to establish a robust online presence From e-commerce
							solutions to custom web applications, MicroScript delivers tailor-made websites that
							align perfectly with their clients' objectives.
						</p>
						<ul class="ul-def">
							<li>Comprehensive development of dynamic, scalable, and secure websites.</li>
							<li>Proficiency in a variety of programming languages and frameworks.</li>
							<li>Custom solutions ranging from e-commerce sites to web applications.</li>
							<li>Focus on creating sites that align with clients' business goals.</li>
						</ul>
					</div>
					<a class="btn1 !w-full md:!w-fit" href="/contact/?quote=true#big-contact">
						<p class="text-sm uppercase mr-3">Get a Quote</p>
						<ArrowRightRhombus />
					</a>
				</div>
				<div
					class="hidden lg:block img-border w-1/2 border-secondary-300 rounded-sm transition-all duration-150 hover:scale-[101%] hover:shadow-2xl"
				>
					<div class="img-border border-secondary-500">
						<div class="img-border border-secondary-900">
							<img
								src="/images/services/web-dev-service.webp"
								alt="Web Development"
								class="rounded-sm shadow-black aspect-[1440/969]"
							/>
						</div>
					</div>
				</div>
			</div>

			<!-- User Experience -->
			<div id="user-xp" class="w-full gap-5 py-10 px-10 border-t-[1px] border-secondary-700">
				<div class="flex flex-col items-center gap-5">
					<h1 class="h1-def">User Experience</h1>
					<div class="h-[1px] w-2/3 md:w-1/6 bg-primary-300" />
					<p class="w-full md:w-3/4 text-base md:text-2xl font-extralight text-center">
						Our web development approach ensures that users glide through your site with ease and
						efficiency, fostering engagement and satisfaction.
					</p>
				</div>
			</div>

			<div
				class="grid place-items-center grid-cols-1 md:grid-cols-3 w-full gap-5 lg:gap-10 p-1 lg:p-5"
			>
				<div class="float-card">
					<Bulb size="100" strokeWidth="0.5" class="w-full" />
					<h2 class="h2-def text-center mb-5">Branding Integration</h2>
					<ul class="ul-def !ml-5 !text-base uppercase">
						<li>Harmonized Color Schemes</li>
						<li>Consistent Visual Identity</li>
						<li>Typography Consistency</li>
						<li>Logo Design</li>
						<li>Brand Messaging</li>
					</ul>
				</div>
				<div class="float-card">
					<Camera size="100" strokeWidth="0.5" class="w-full" />
					<h2 class="h2-def text-center mb-5">Photography & Images</h2>
					<ul class="ul-def !ml-5 !text-base uppercase">
						<li>Capturing Visual Stories</li>
						<li>Narrative Scene Setting</li>
						<li>High-Resolution Asset Selection</li>
						<li>Visual Content SEO</li>
						<li>AI Images</li>
					</ul>
				</div>
				<div class="float-card">
					<Devices2 size="100" strokeWidth="0.5" class="w-full" />
					<h2 class="h2-def text-center mb-5">UI Design</h2>
					<ul class="ul-def !ml-5 !text-base uppercase">
						<li>Consistant Color Themes</li>
						<li>Light / Dark Mode Themes</li>
						<li>3 Color Design based on branding</li>
						<li>Internal and External links for SEO</li>
						<li>AI assistant for site features</li>
					</ul>
				</div>
			</div>

			<!-- Website Statistics -->
			<div class="pt-std w-full gap-5 mx-10">
				<div class="flex flex-col items-center gap-5">
					<p class="w-full md:w-full text-base md:text-2xl font-light text-center">
						Alluring Branding + Website Performance + Professional Maintenance = Improved Business
						Growth
					</p>
				</div>
				<div
					class="grid grid-cols-1 md:grid-cols-3 gap-24 justify-between px-5 md:px-20 py-10 mt-16 bg-primary-900 bg-opacity-70 border-t-[1px] border-primary-300"
				>
					<div class="flex flex-col items-center text-center">
						<div class="flex gap-1 justify-start">
							<h1 class="text-9xl font-bold">23</h1>
							<p class="text-3xl">%</p>
						</div>

						<p class="w-fit">
							Presenting a brand consistently across all platforms can increase revenue by up to
							23%.
						</p>
					</div>
					<div class="flex flex-col items-center text-center">
						<div class="flex gap-1 justify-start">
							<h1 class="text-9xl font-bold">50</h1>
							<p class="text-3xl">%</p>
						</div>

						<p class="w-fit">
							Poor website user experience drives almost 50% of users to go with competitors
							instead.
						</p>
					</div>
					<div class="flex flex-col items-center text-center">
						<div class="flex gap-1 justify-start">
							<h1 class="text-9xl font-bold">40</h1>
							<p class="text-3xl">%</p>
						</div>

						<p class="w-fit">Nearly 40% of people will stop engaging with a slow website.</p>
					</div>
				</div>
			</div>

			<!-- SEO -->
			<div id="user-xp" class="w-full gap-5 py-10 px-10 border-t-[1px] border-secondary-700">
				<div class="flex flex-col items-center gap-5">
					<h1 class="h1-def">SEO</h1>
					<div class="h-[1px] w-2/3 md:w-1/6 bg-primary-300" />
					<p class="w-full md:w-3/4 text-base md:text-2xl font-extralight text-center">
						<strong class="text-2xl text-tertiary-200">Search Engine Optimization</strong> that will
						ensure your website stays relevant to modern search engines. After all, what good is a website
						if noone visits it?
					</p>
				</div>
			</div>

			<div
				id="seo-service"
				class="flex custom-card bg-secondary-500 gap-5 py-10 px-10 border-t-[1px] border-tertiary-700"
			>
				<div class="flex flex-col gap-6 lg:gap-3 w-full lg:w-1/2 justify-between">
					<div class="flex flex-col gap-3 text-center md:text-left items-center md:items-start">
						<h2 class="h2-def">Code Optimizations</h2>
						<div class="h-[1px] w-4/6 bg-tertiary-300" />
						<p class="p-def">
							In order to achieve excellent SEO, our code meets the highest standards to ensure that
							you website stays relevant to search engines, and that your SEO ranking remains
							uneffected as the site grows in size and features.
						</p>
						<ul class="ul-def">
							<li>
								<a
									href="https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data"
									class="simple-link"
									target="_blank"
								>
									Structured Data
								</a> helps search engines recognize webpage content that is hard to parse.
							</li>
							<li>
								<a
									href="https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview"
									class="simple-link"
									target="_blank"
								>
									Sitemaps
								</a> helps clearly map your website for search engines to crawl.
							</li>
							<li>Custom solutions ranging from e-commerce sites to web applications.</li>
							<li>Focus on creating sites that align with clients' business goals.</li>
						</ul>
					</div>
				</div>
				<div
					class="hidden lg:block img-border w-1/2 border-secondary-300 rounded-sm transition-all duration-150 hover:scale-[101%] hover:shadow-2xl"
				>
					<div class="img-border border-secondary-500">
						<div class="img-border border-secondary-900">
							<img
								src="/images/services/web-dev-service.webp"
								alt="Web Development"
								class="rounded-sm shadow-black aspect-[1440/969]"
							/>
						</div>
					</div>
				</div>
			</div>

			<!-- AI Assistant -->
		</div>

		<Footer class="hidden md:flex" />
		<Projectmodal />
	</div>
</div>

<AiUi />

<style lang="postcss">
	.h2-def {
		@apply text-2xl md:text-4xl font-extralight;
	}

	.h1-def {
		@apply text-4xl md:text-6xl text-center font-extralight uppercase;
	}

	.p-def {
		@apply text-base md:text-xl font-extralight;
	}

	.ul-def {
		@apply text-base font-bold md:list-disc flex flex-col gap-3 my-5 md:ml-5;
	}

	.custom-card {
		@apply relative z-[1] w-full h-fit  bg-opacity-20;
	}

	.float-card {
		@apply flex flex-col gap-2 bg-secondary-900 bg-opacity-25 border-[1px] border-secondary-600 rounded-lg hover:shadow-xl shadow-white px-5 lg:px-10 py-1 lg:py-5 w-full h-full;
	}

	.img-border {
		@apply border-b-[10px] border-r-[5px] border-l-[1px] border-t-[1px] h-fit;
	}

	.pt-std {
		@apply pt-10;
	}

	.simple-link {
		@apply text-secondary-500 underline underline-offset-2 hover:text-secondary-300 transition-colors duration-150;
	}
</style>
