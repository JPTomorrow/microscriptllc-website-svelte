<script lang="ts">
	import { onMount } from 'svelte';
	import { setScrollY } from '$lib/scrollstore';
	import { fade } from 'svelte/transition';
	import Footer from '$lib/footer.svelte';
	import Projectmodal from '$lib/projectmodal.svelte';
	import Seo from '$lib/seo.svelte';
	import AiUi from '$lib/ai-ui.svelte';
	import { ArrowRightRhombus } from 'tabler-icons-svelte';

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
	title="Our Services"
	description="A page showing the web development services we offer."
	type="WebPage"
/>

<div in:fade|global={{ duration: 200 }} class="animated-space-bg">
	<div bind:this={outer} class="page-inner-scroll-container">
		<div class="flex flex-col gap-10 items-center justify-center pt-32">
			<div class="flex flex-col items-center gap-5">
				<h1 class="text-4xl md:text-6xl font-extralight uppercase">Our Services</h1>
				<div class="h-[1px] w-2/3 md:w-1/6 bg-primary-300" />
				<p class="w-3/4 text-xl md:text-2xl font-extralight text-center">
					We offer a full spectrum of digital services and advanced web features designed to grow
					your online presence and drive online business sales!
				</p>
			</div>
			<div class="flex custom-card gap-5 py-10 px-10 border-t-[1px] border-secondary-700">
				<div class="flex flex-col gap-6 lg:gap-3 w-full lg:w-1/2 justify-between">
					<div class="flex flex-col gap-3 text-center md:text-left items-center md:items-start">
						<h2 class="text-2xl md:text-4xl">Web Development</h2>
						<div class="h-[1px] w-4/6 bg-secondary-700" />
						<p class="text-base md:text-xl font-extralight">
							MicroScript LLC specializes in comprehensive web development services, catering to the
							needs of businesses looking to establish a robust online presence From e-commerce
							solutions to custom web applications, MicroScript LLC delivers tailor-made websites
							that align perfectly with their clients' objectives.
						</p>
						<ul class="text-base font-bold md:list-disc flex flex-col gap-3 my-5 md:ml-5">
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
		</div>

		<Footer class="hidden md:flex" />
		<Projectmodal />
	</div>
</div>

<AiUi />

<style lang="postcss">
	.custom-card {
		@apply relative z-[1] w-full h-fit bg-tertiary-500 bg-opacity-20;
	}

	.img-border {
		@apply border-b-[10px] border-r-[5px] border-l-[1px] border-t-[1px] h-fit;
	}
</style>
