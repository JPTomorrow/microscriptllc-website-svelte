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
	import { formBlogPostSlug } from '$lib/scripts/blog';
	import SvelteMarkdown from 'svelte-markdown';

	export let data;
	let articleSubject: string = '';
	let paragraphSubject: string = '';
	let imgSubject: string =
		'Digital art of alien flora using a vibrant color palette and unusual shapes';
	let headline = '';
	let loading = false;
	let paragraphs: BlogParagraph[] = [];

	let imgUrl = '';
	$: imgPreview = async () => {
		if (imgUrl === '') return;
		const imgBase64 = await fetch(imgUrl, { method: 'GET' }).then((r) => r.text());
		return imgBase64;
	};

	const generateParagraph = async () => {
		loading = true;
		const res = await fetch('/api/blog/make-paragraph', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				articleSubject,
				paragraphSubject,
				articleParagraphs: paragraphs
					.map((p) => {
						return `${p.header}\n\n${p.content}`;
					})
					.join('\n\n')
			})
		}).then((r) => r.json());

		paragraphs = [
			...paragraphs,
			{
				header: res.header,
				content: res.content,
				codeExample: res.codeExample
			}
		];
		loading = false;
	};

	const removeParagraph = () => {
		const p = paragraphs.slice(0, paragraphs.length - 1);
		paragraphs = [...p];
	};

	const generateHeadline = async () => {
		loading = true;
		const res = await fetch('/api/blog/make-headline', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				articleSubject: articleSubject,
				articleParagraphs: paragraphs
					.map((p) => {
						return `${p.header}\n\n${p.content}`;
					})
					.join('\n\n')
			})
		}).then((r) => r.json());
		headline = res.headline;
		loading = false;
	};

	const generateImage = async () => {
		loading = true;
		const res = await fetch('/api/blog/make-image', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				imgSubject: imgSubject
			})
		}).then((r) => r.json());
		imgUrl = res.imgUrl;
		loading = false;
	};

	const addPost = async () => {
		if (paragraphs.length <= 0) return;

		let generatedPost = {
			headline: headline,
			shortDescription: paragraphs[0].content,
			body: paragraphs,
			imgUrl: imgUrl
		};
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
		paragraphs = [];
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

	function cvtTimestamp(createdAt: number) {
		const date = new Date(0);
		date.setUTCSeconds(createdAt);
		return date.toLocaleDateString();
	}

	const conicStops: ConicStop[] = [
		{ color: 'transparent', start: 0, end: 25 },
		{ color: 'rgb(var(--color-primary-300))', start: 75, end: 100 }
	];

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
	title="Blog"
	description="The blog page. Random thoughts by Justin Morrow, the co-founder of {PUBLIC_BRAND_NAME}."
	type="WebPage"
/>

<div in:fade|global={{ duration: 200 }} class="animated-space-bg">
	<div bind:this={outer} class="page-inner-scroll-container pt-[85px]">
		{#if dev}
			<article class="post-1 gap-5 py-16 mb-5 border-b-[1px] border-secondary-300">
				<h1 class="uppercase">AI Add Post</h1>
				<div class="w-full border-[1px] border-secondary-300 rounded-lg min-h-[200px] p-5">
					<h1>{headline}</h1>
					{#each paragraphs as p, i (i)}
						<SvelteMarkdown
							options={{ breaks: true }}
							source="{p.header}{p.content}{p.codeExample ? p.codeExample : ''}"
						/>
					{/each}
					{#await imgPreview() then aiImg}
						{#if aiImg}
							<img
								class="w-full object-cover max-h-[512px]"
								src="data:image/jpeg;base64,{aiImg}"
								alt="Article Header"
							/>
						{/if}
					{/await}
				</div>
				<input
					class="input"
					disabled={loading}
					bind:value={articleSubject}
					placeholder="Enter an article subject..."
				/>
				<input
					class="input"
					disabled={loading}
					bind:value={paragraphSubject}
					placeholder="Enter a subject for the next paragraph..."
				/>
				<input
					class="input"
					disabled={loading}
					bind:value={imgSubject}
					placeholder="Enter a subject for the article image..."
				/>
				<div class="flex flex-col md:flex-row gap-3 mt-5">
					<button disabled={loading} class="btn1" on:click={generateParagraph}>
						Add Paragraph
					</button>
					<button disabled={loading} class="btn1" on:click={removeParagraph}>
						Remove Paragraph
					</button>
					<button disabled={loading} class="btn1" on:click={generateHeadline}>
						Add Headline
					</button>
					<button disabled={loading} class="btn1" on:click={generateImage}> Add Image </button>
					<button disabled={loading} class="btn1 bg-secondary-900 bg-opacity-75" on:click={addPost}>
						Publish
					</button>
					{#if loading}
						<ConicGradient width="w-5 ml-4" stops={conicStops} spin />
					{/if}
				</div>
			</article>
		{/if}
		<TitleSpaced headerText="Justin talks about tech" />
		<div class="grid grid-cols-1 md:grid-cols-2 gap-3 my-10 mx-2 md:mx-0">
			{#if data.streamed}
				{#await data.streamed.blogPosts then posts}
					{#each posts.reverse() as post, i (i)}
						<article in:fade|global class="post-{(i % 2) + 1}">
							<div
								class="flex flex-col items-start justify-between text-left w-full h-fit px-10 py-2 my-5"
							>
								<a
									class="w-11/12 hover:underline underline-offset-8"
									href="/blog/{formBlogPostSlug(post.headline, post.id)}"
								>
									<h2 class="w-full">
										{post.headline}
									</h2>
								</a>
								<p class="text-sm lg:text-xl ml-5 mb-5 font-thin">
									Posted On: {cvtTimestamp(post.createdAt)}
								</p>

								<p
									class="text-lg lg:text-xl mb-2 font-thin text-primary-50 text-ellipsis line-clamp-3 lg:line-clamp-5"
								>
									{post.shortDescription}
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
						<!-- {#if i % 5 == 0}
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
						{/if} -->
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
	:global(pre) {
		@apply w-fit bg-black bg-opacity-20 p-5 rounded-xl;
	}

	article :global(h1) {
		@apply text-base md:text-3xl font-normal lg:font-thin;
	}
	article :global(h2) {
		@apply text-base md:text-2xl my-2 font-normal lg:font-thin;
	}
	article :global(p) {
		@apply text-sm md:text-lg my-2 font-thin;
	}

	.post-1 {
		@apply flex flex-col items-start text-left w-full  
		bg-secondary-900 backdrop-blur-sm bg-opacity-40;
	}
	.post-2 {
		@apply flex flex-col items-start text-left 
		w-full bg-tertiary-800 bg-opacity-40;
	}
</style>
