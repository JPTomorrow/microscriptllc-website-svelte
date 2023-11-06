<script lang="ts">
	import { onMount } from 'svelte';
	import { setScrollY } from '$lib/scrollstore';
	import { fade } from 'svelte/transition';
	import Contactuscard from '$lib/contactuscard.svelte';
	import Footer from '$lib/footer.svelte';
	import Projectmodal from '$lib/projectmodal.svelte';
	import Seo from '$lib/seo.svelte';
	import { PUBLIC_BRAND_NAME } from '$env/static/public';
	import AiUi from '$lib/ai-ui.svelte';

	export let data;
	console.log(data.isQuote);

	// capture scroll to hide header
	let outer: HTMLDivElement;
	onMount(() => {
		setScrollY(outer.scrollTop);
		outer.addEventListener('scroll', (_) => {
			setScrollY(outer.scrollTop);
		});
	});
</script>

<Seo title="Contact Us" description="The contact page of {PUBLIC_BRAND_NAME}" type="WebPage" />

<div in:fade|global={{ duration: 200 }} class="animated-space-bg">
	<div bind:this={outer} class="page-inner-scroll-container">
		<!-- Contact -->
		<div
			id="big-contact"
			class="flex flex-col md:flex-row gap-10 md:gap-10 backdrop-blur-sm custom-card py-16 md:py-52 px-3 md:px-10"
		>
			<div class="flex flex-col gap-5 w-full md:w-1/2 pt-10">
				<h1 class="text-2xl md:text-3xl">Let's Connect!</h1>
				<p class="text-base md:text-lg ml-1 font-thin">
					Ready to take your online presence to the next level? You've landed in the perfect spot!
					Here at MicroScript, we're passionate about transforming your bold ideas into even more
					impressive digital realities. Think eye-catching web designs, smooth e-commerce systems,
					and custom apps that scream 'you.' Our crew of creative designers and tech wizards can't
					wait to dive into your project. We're not just about building websites; we're about
					creating experiences that make people sit up and take notice. Got a vision? A question?
					Just want to chat? We're all ears!
				</p>
				{#if data.isQuote}
					<p class="text-base text-error-400 md:text-lg ml-1 font-extralight">
						Quotes may take up to 24 hours to be processed.
					</p>
				{/if}
			</div>
			<Contactuscard
				message={data.isQuote
					? `Hi,
					
I would like to get a quote for building website that has the following features:

- A 5 page layout
- SEO optimizations
- Online store / eCommerce
- Photography / Image Generation
- Integrate AI assistant into a website`
					: ''}
				class="w-full md:w-1/2"
			/>
		</div>
		<Footer class="hidden md:flex" />
		<Projectmodal />
	</div>
</div>

<AiUi />

<style lang="postcss">
	.custom-card {
		@apply relative z-[1] w-full h-fit bg-black bg-opacity-5;
	}
</style>
