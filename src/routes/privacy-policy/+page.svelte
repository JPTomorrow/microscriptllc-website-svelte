<script lang="ts">
	import Footer from '$lib/footer.svelte';
	import { setScrollY } from '$lib/scrollstore';
	import Seo from '$lib/seo.svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

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
	title="privacy policy for MicroScript LLC"
	description="The privacy policy page"
	type="WebPage"
/>

<div in:fade|global={{ duration: 200 }} class="animated-space-bg">
	<div bind:this={outer} class="page-inner-scroll-container pt-[85px]">
		<div class="content-container">
			<h1 class="uppercase mb-2 !text-3xl lg:!text-6xl font-light underline">Privacy Policy</h1>
			<p class="mb-5 !text-sm">Last updated: 9/13/2023</p>

			<h2>Introduction</h2>
			<p>
				Welcome to MicroScript LLC's privacy policy. We are committed to protecting and respecting
				your privacy. This policy outlines how we collect, use, disclose, and safeguard your
				personal information when you visit our website, including any other media form, media
				channel, mobile website, or mobile application related or connected thereto
				(www.microscriptllc.com).
			</p>
			<p>
				Please read this privacy policy carefully. If you do not agree with the terms of this
				privacy policy, please do not access or use the website.
			</p>

			<h2>Information We Collect</h2>
			<h3>Personal Data</h3>
			<p>We may collect personal identification information, such as:</p>
			<ul>
				<li>Name</li>
				<li>Email address</li>
				<li>Phone number</li>
				<li>Employment history</li>
				<li>Other relevant information if you apply for a job</li>
				<li>Other personal information you voluntarily provide</li>
			</ul>

			<h3>Non-Personal Data</h3>
			<p>We may also collect non-personal identification information like:</p>
			<ul>
				<li>Email addresses collected from subscriptions or registrations</li>
				<li>User passwords for authentication and secure access</li>
				<li>Phone numbers provided voluntarily for contact or support</li>
			</ul>

			<h2>Information Collected Through Cookies</h2>
			<p>
				Cookies are small files that a site or its service provider transfers to your computer's
				hard drive through your web browser (if you allow) that enables the site's or service
				provider's systems to recognize your browser and capture and remember certain information.
			</p>

			<h2>How We Use Your Information</h2>
			<p>We use your information for the following purposes:</p>
			<ul>
				<li>To personalize your user experience</li>
				<li>To respond to your customer service requests</li>
				<li>To administer a contest, promotion, survey, or other site feature</li>
				<li>To quickly process your transactions</li>
				<li>To send periodic emails regarding your order or other products and services</li>
			</ul>
			<p>
				We do not sell, trade, or rent your personal identification information to others. We may
				share generic aggregated demographic information not linked to any personal identification
				information regarding visitors and users with our business partners, trusted affiliates, and
				advertisers.
			</p>

			<h2>Security of Information</h2>
			<p>
				We have implemented suitable security measures to prevent your personal data from being
				accidentally lost, used, or accessed in an unauthorized way. We limit access to your
				personal data to those employees who have a business need to know such data.
			</p>

			<h2>Third-Party Websites</h2>
			<p>
				The website may contain links to other sites that are not operated by us. If you click on a
				third-party link, you will be directed to that third party's site. We strongly advise you to
				review the privacy policy of every site you visit.
			</p>
			<h2>Your Rights</h2>
			<p>You have the right to:</p>
			<ul>
				<li>Request access to your personal data</li>
				<li>Request correction of the personal data that we hold about you</li>
				<li>Request erasure of your personal data</li>
				<li>Object to processing of your personal data</li>
				<li>Request the transfer of your personal data to another party</li>
			</ul>

			<h2>Changes to Our Privacy Policy</h2>
			<p>
				We reserve the right to update or change our privacy policy at any time. We will notify you
				of any changes by posting the new privacy policy on this page and updating the "last
				updated" date at the top of this policy.
			</p>

			<h2>Contact Information</h2>
			<p>If you have any questions about this privacy policy, please contact us at:</p>
			<ul>
				<li>Microscript LLC</li>
				<li>P.O. Box 25242</li>
				<li>Salt Lake City, UT 84125</li>
				<li>Email: connect@microscrptllc.com</li>
			</ul>
			<p>Thank you for choosing Microscript LLC!</p>
			<a href="/" class="btn1 mt-5">Go Back</a>
		</div>
		<Footer class="mt-5 hidden lg:flex" />
	</div>
</div>

<style lang="postcss">
	.content-container {
		@apply w-full lg:w-3/4 
		px-5 lg:px-10 py-5 
		backdrop-blur-sm 
		lg:rounded-md 
		lg:border-l-[1px] lg:border-secondary;
	}

	p {
		@apply text-sm lg:text-lg lg:ml-3 mt-5;
	}

	ul {
		@apply text-sm lg:text-lg ml-4 lg:ml-7 mt-5 list-disc;
	}

	h2 {
		@apply text-2xl lg:text-5xl font-light mt-10 border-b-[1px] w-fit;
	}

	h3 {
		@apply text-lg lg:text-2xl lg:ml-3 mt-5 border-b-[1px] w-fit;
	}
</style>
