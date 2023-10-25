<script lang="ts">
	import { PUBLIC_BRAND_NAME, PUBLIC_GOOGLE_REFFERER_LINK } from '$env/static/public';
	import AiUi from '$lib/ai-ui.svelte';
	import Footer from '$lib/footer.svelte';
	import { setScrollY } from '$lib/scrollstore';
	import Seo from '$lib/seo.svelte';
	import TitleSpaced from '$lib/title-spaced.svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { dev } from '$app/environment';
	import { ConicGradient, type ConicStop } from '@skeletonlabs/skeleton';
	import { Trash } from 'tabler-icons-svelte';
	import { invalidateAll } from '$app/navigation';
	import { cleanHTML } from '$lib/scripts/sanitize-html';
	import { formBlogPostSlug } from '$lib/scripts/blog';

	export let data;
	let postGenertaionPreview: string = '';
	let generatedPost = {
		headline: '',
		shortDescription: '',
		body: '',
		imgUrl: ''
	};
	let subject: string = '';
	let loading = false;

	const generatePost = async () => {
		const subCopy = subject;
		subject = '';
		loading = true;
		const res = await fetch('/api/blog/make-post', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				articleSubject: subCopy
			})
		}).then((r) => r.json());

		generatedPost.headline = cleanHTML(res.headline);
		generatedPost.body = cleanHTML(res.body);
		generatedPost.shortDescription = generatedPost.body.slice(0, 500);
		generatedPost.imgUrl = res.imgUrl;
		const imageBase64 = await fetch(res.imgUrl, { method: 'GET' }).then((r) => r.text());

		postGenertaionPreview = `<h1>Headline:</h1> ${generatedPost.headline}
		
		<h1>Image:</h1>
		<img src="data:image/jpeg;base64,${imageBase64}" alt="Generated Image" />
		<h1>Body:</h1>
		${generatedPost.body}`;
		loading = false;
	};

	const addPost = async () => {
		if (postGenertaionPreview === '') return;
		loading = true;
		await fetch('/api/blog/add-post', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				blogPost: generatedPost
			})
		});
		loading = false;
		postGenertaionPreview = '';
		invalidateAll(); // this will fire the server load function again
	};

	const deletePost = async (id: number) => {
		await fetch('/api/blog/delete-post', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				postId: id
			})
		});
		invalidateAll();
	};

	// capture scroll to hide header
	let outer: HTMLDivElement;
	onMount(() => {
		setScrollY(outer.scrollTop);
		outer.addEventListener('scroll', (_) => {
			setScrollY(outer.scrollTop);
		});
	});

	function cvtTimestamp(createdAt: number) {
		const date = new Date(0);
		date.setUTCSeconds(createdAt);
		return date.toLocaleDateString();
	}

	let collapsed = true;

	const conicStops: ConicStop[] = [
		{ color: 'transparent', start: 0, end: 25 },
		{ color: 'rgb(var(--color-primary-300))', start: 75, end: 100 }
	];
</script>

<Seo
	title="Blog"
	description="The blog page. Random thoughts by Justin Morrow, the co-founder of {PUBLIC_BRAND_NAME}."
	type="WebPage"
	enableGoogleAdSense
/>

<div in:fade|global={{ duration: 200 }} class="animated-space-bg">
	<div bind:this={outer} class="page-inner-scroll-container pt-[85px]">
		{#if dev}
			<article class="post-1 gap-5 py-16 mb-5 border-b-[1px] border-secondary-300">
				<h1 class="uppercase">AI Add Post</h1>
				<div class="w-full border-[1px] border-secondary-300 rounded-lg min-h-[200px] p-5">
					{@html postGenertaionPreview}
				</div>
				<input
					class="input"
					disabled={loading}
					bind:value={subject}
					placeholder="Enter an article subject..."
				/>
				<div class="flex gap-3 mt-5">
					<button disabled={loading} class="btn1" on:click={generatePost}>
						Generate
						{#if loading}
							<ConicGradient width="w-5 ml-4" stops={conicStops} spin />
						{/if}
					</button>
					<button disabled={loading} class="btn1" on:click={addPost}> Add </button>
				</div>
			</article>
		{/if}
		<TitleSpaced headerText="Justin talks about tech" />
		<div class="mt-10">
			{#if data.streamed}
				{#await data.streamed.blogPosts then posts}
					{#each posts.reverse() as post, i (i)}
						<article in:fade|global class="post-{(i % 2) + 1}">
							<div
								class="flex flex-col items-start justify-between text-left w-full h-fit border-x-[1px] border-double px-10 py-2 border-secondary-300 my-5"
							>
								<a
									class="w-11/12 hover:underline underline-offset-8"
									href="/blog/{formBlogPostSlug(post.headline, post.id)}"
								>
									<h2 class="w-full">
										{@html post.headline}
									</h2>
								</a>
								<p class="text-sm lg:text-xl ml-5 mb-5 font-thin">
									Posted On: {cvtTimestamp(post.createdAt)}
								</p>

								<p
									class="text-lg lg:text-xl mb-2 font-thin text-primary-50 text-ellipsis {collapsed
										? 'line-clamp-3 lg:line-clamp-5'
										: ''}"
								>
									{@html post.shortDescription}
								</p>
								<div class="flex mt-5 gap-5">
									<a href="/blog/{formBlogPostSlug(post.headline, post.id)}" class="btn1"
										>Read More</a
									>
									{#if dev}
										<button
											class="btn1 uppercase text-sm !bg-error-600 !bg-opacity-70 !p-2"
											on:click={() => deletePost(post.id)}><Trash strokeWidth="1" /></button
										>
									{/if}
								</div>
							</div>
						</article>
						{#if i % 5 == 0}
							<div class="flex w-full justify-center items-center">
								<div
									class="flex flex-col px-5 lg:px-0 lg:flex-row w-5/6 justify-center gap-5 lg:gap-10 items-center border-y-[1px] border-primary-300 py-5 my-5 bg-tertiary-900 bg-opacity-20"
								>
									<h1 class=" text-center lg:text-left text-xl lg:text-5xl font-thin">
										Try out Google Workspaces Today!
									</h1>
									<a class="w-[200px]" href={PUBLIC_GOOGLE_REFFERER_LINK}
										><img
											class="w-full"
											alt="Google Refferer Link"
											src="https://storage.googleapis.com/referworkspace-asset/img/digitalbuttons/digital_button_en.png"
										/></a
									>
								</div>
							</div>
						{/if}
					{/each}
				{:catch error}
					{error.message}
				{/await}
			{/if}
		</div>
		<Footer class="hidden lg:flex" />
	</div>
</div>

<AiUi />

<style lang="postcss">
	article :global(h1) {
		@apply text-xl md:text-5xl font-normal lg:font-thin;
	}
	article :global(h2) {
		@apply text-base md:text-2xl my-2 font-normal lg:font-thin;
	}
	article :global(p) {
		@apply text-base md:text-lg my-2 font-thin;
	}

	.post-1 {
		@apply flex flex-col items-start text-left 
		w-full h-fit 
		bg-black backdrop-blur-sm bg-opacity-25
		px-5 lg:px-64;
	}
	.post-2 {
		@apply flex flex-col items-start text-left 
		w-full h-fit bg-secondary-900 bg-opacity-20
		px-5 lg:px-64;
	}
</style>
