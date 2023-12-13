<script lang="ts">
	import { onMount } from 'svelte';
	import { setScrollY } from '$lib/scrollstore';
	import { fade } from 'svelte/transition';
	import Projectscrollcontainer from '$lib/projectscrollcontainer.svelte';
	import Contactuscard from '$lib/contactuscard.svelte';
	import Footer from '$lib/footer.svelte';
	import Projectmodal from '$lib/projectmodal.svelte';
	import { ArrowRightRhombus, BrandZoom, Phone, Users } from 'tabler-icons-svelte';
	import ServiceCard from '$lib/service-card.svelte';
	import Seo from '$lib/seo.svelte';
	import { PUBLIC_BRAND_NAME } from '$env/static/public';
	import AiUi from '$lib/ai-ui.svelte';
	import Employeebadge from '$lib/employeebadge.svelte';
	import TitleSpaced from '$lib/title-spaced.svelte';

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
	title="build your companies web presence with our expertise"
	description="The homepage of {PUBLIC_BRAND_NAME}"
	type="WebSite"
/>

<div in:fade|global={{ duration: 200 }} class="animated-space-bg">
	<div bind:this={outer} class="page-inner-scroll-container">
		<!-- Landing Banner -->
		<div class="relative w-full min-h-[98vh] shadow-2xl border-b-[1px] border-primary">
			<img
				class="w-full h-full object-cover object-center filter drop-shadow-2xl sepia contrast-75 pointer-events-none"
				src="/images/about-pic.webp"
				alt="landing banner"
			/>
			<div class="absolute-centered flex flex-col w-fit text-center mt-10 md:mt-0">
				<h1 class="text-3xl md:text-6xl text-primary text-shadow font-bold">
					Build Your Businesses<br class="hidden md:block" /> Online Presence Today
				</h1>
				<div
					class="w-full h-[5px] bg-secondary border-b-[2px] border-base-100 rounded-xl mt-5 mb-3 self-center"
				/>
				<div
					class="w-11/12 h-[3px] bg-secondary border-b-[2px] border-base-100 rounded-xl shadow-2xl self-center"
				/>
				<a
					href="/pricing"
					class="text-xl md:text-3xl text-primary text-shadow font-bold mt-5 hover:underline"
				>
					As low as $0 upfront and $150 a month!
				</a>
				<div
					class="w-fit h-fit bg-base-100/75 border-[2px] border-secondary/75 rounded-3xl md:rounded-full shadow-2xl self-center mt-5 px-5 py-3 flex flex-col md:flex-row gap-5 items-center"
				>
					<a href="/pricing" class="btn1 gap-3 whitespace-nowrap">Our Plan<ArrowRightRhombus /></a>
					<a href="/contact" class="btn1 gap-3 whitespace-nowrap"
						>Get a Quote<ArrowRightRhombus /></a
					>
					<a href="/services" class="btn1 gap-3 whitespace-nowrap"
						>Other Services<ArrowRightRhombus /></a
					>
				</div>
			</div>
		</div>

		<!-- Company Services Offered -->
		<div class="flex flex-col gap-5 w-full items-center justify-center px-3 md:px-10 my-12">
			<h1
				class="text-3xl md:text-5xl lg:text-7xl font-normal lg:font-thin border-b-[1px] border-primary mt-5 pb-1 lg:pb-3 lg:px-5"
			>
				Company Services
			</h1>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-20 w-full lg:px-5 my-10">
				<!-- (REWRITE BLURB) -->
				<ServiceCard>
					<h1 slot="header">Web development</h1>
					<p slot="content">
						We handle everything from complicated e-commerce websites down to simple company
						information websites. We also do feature integrations with existing websites.
					</p>
					<a slot="read-more" href="/services/#web-dev-service">Read More</a>
				</ServiceCard>
				<!-- (REWRITE BLURB) -->
				<ServiceCard>
					<h1 slot="header">UI / UX Design</h1>
					<p slot="content">
						Our websites are modern and responsive. This means you get a great website at a great
						price for desktops and mobile platforms.
					</p>
					<a slot="read-more" href="/services/#user-xp">Read More</a>
				</ServiceCard>
				<!-- (REWRITE BLURB) -->
				<ServiceCard>
					<h1 slot="header">Image Generation</h1>
					<p slot="content">
						Need a photographer? We are happy to offer professional photography services to capture
						great images for your website and general marketing materials.
					</p>
					<a slot="read-more" href="/services/#user-xp">Read More</a>
				</ServiceCard>
				<!-- (REWRITE BLURB) -->
				<ServiceCard>
					<h1 slot="header">Digital Strategy</h1>
					<p slot="content">
						Search engine optimization or SEO is the lifeblood of our online marketing campaigns.
						From the ground up, we can help your business achieve new levels of success by appealing
						to new customers and getting more clicks online.
					</p>
					<a slot="read-more" href="/services/#seo-service">Read More</a>
				</ServiceCard>
				<!-- (REWRITE BLURB) -->
				<ServiceCard>
					<h1 slot="header">mobile / Responsive Design</h1>
					<p slot="content">
						The majority of online visitors are mobile users. As such our website load fast and are
						designed to be easy to navigate and use on phones and tablets. Ask about responsive web
						design today.
					</p>
					<a slot="read-more" href="/services/#user-xp">Read More</a>
				</ServiceCard>
				<ServiceCard>
					<h1 slot="header">AI Integrations</h1>
					<p slot="content">
						We offer AI driven services powered by OpenAI technologies. Need someone to handle
						customer support but don't have the money to hire a person? We can tailor an AI
						assistant to help users who visit your website.
					</p>
					<a slot="read-more" href="/services/#ai-service">Read More</a>
				</ServiceCard>
			</div>
		</div>

		<!-- Client Meetings Blurb -->
		<div
			class="relative block md:flex custom-card text-primary items-center justify-start gap-28 backdrop-blur-sm my-12 px-3 md:px-10"
		>
			<div class="w-full md:w-1/2 py-16 lg:py-32 lg:ml-12">
				<h1 class="text-center md:text-left text-4xl font-semibold uppercase">
					Meetings are Important!
				</h1>
				<p class="text-center md:text-left mt-3 md:ml-5">
					We strive for an excellent communication experience with our clients. Keeping a client
					informed is paramount to delivering a quality website. Our team is glad to meet you,
					either in person or over web conference to discuss estimates, design critiques, and SEO
					reports.
				</p>
			</div>
			<div
				class="grid grid-cols-3 grid-rows-2 gap-0 w-fit mx-auto min-w-fit max-h-[400px] pb-20 md:py-0"
			>
				<div class="meetings-icon col-start-2 row-start-1 md:translate-y-5">
					<Phone class="-rotate-45" strokeWidth="1" size="90" />
				</div>
				<div class="meetings-icon row-start-2 col-start-1 md:translate-x-5">
					<BrandZoom class="-rotate-45" strokeWidth="1" size="90" />
				</div>
				<div class="meetings-icon row-start-2 col-start-3 md:-translate-x-5">
					<Users class="-rotate-45" strokeWidth="1" size="90" />
				</div>
			</div>
			<div
				class="absolute top-0 left-0 flex w-full h-full bg-secondary meetings-shape-cutout z-[-1] backdrop-blur-sm opacity-25"
			/>
		</div>

		<!-- Work -->
		<div class="custom-card flex flex-col justify-center px-5 md:px-10">
			<TitleSpaced headerText="Recent Work" />
			<Projectscrollcontainer />
		</div>

		<!-- Contact -->
		<div id="contact" class="flex backdrop-blur-sm custom-card py-16 md:py-32 px-10">
			<Employeebadge
				employeeName="Justin Morrow"
				employeeTitle="Co-Founder / CTO"
				employeeImage="/images/profile.webp"
			/>
			<Contactuscard />
			<Employeebadge
				employeeName="Thomas Bender"
				employeeTitle="Co-Founder / COO"
				employeeImage="/images/thomas.webp"
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

	.meetings-shape-cutout {
		clip-path: polygon(0% 0%, 100% 0%, 50% 100%, 0% 100%);
	}

	.meetings-icon {
		@apply flex justify-center items-center 
		bg-primary text-secondary rotate-45 
		w-[70px] h-[70px] md:w-[130px] md:h-[130px] 
		shadow-xl 
		border-[5px] border-accent
		transition-transform duration-700
		hover:rotate-[405deg];
	}

	.text-shadow {
		text-shadow: #000000 1px 2px 5px;
	}
</style>
