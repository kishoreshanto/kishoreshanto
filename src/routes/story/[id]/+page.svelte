<script lang="ts">
	import TimeIcon from '$component/shared/svg/TimeIcon.svelte';
	import { formatDate } from '$lib/utils/datetime';
	import { parseTextMarkup, textParseClasses } from '$lib/utils/textParse';
	import settings from '$lib/data/settings.json';
	import type { PageProps } from './$types';

	let dateFormatterRegion = settings.date_time_format || 'en-US';

	type FontSize = 'small' | 'normal' | 'large';

	let { data }: PageProps = $props();
	let fontSize = $state<FontSize>('small');

	const fontSizeOptions: { value: FontSize; label: string; iconClass: string }[] = [
		{ value: 'small', label: 'Small', iconClass: 'text-sm' },
		{ value: 'normal', label: 'Normal', iconClass: 'text-base' },
		{ value: 'large', label: 'Large', iconClass: 'text-xl' }
	];

	const fontSizeClasses: Record<FontSize, string> = {
		small: 'text-base',
		normal: 'text-base md:text-xl',
		large: 'text-lg md:text-2xl'
	};

	let formattedDate = $derived(formatDate(data.story.date, dateFormatterRegion));
	let parsedStoryBody = $derived(parseTextMarkup(data.story.storyBody));
	let galleryImages = $derived(
		data.story.imageUrls.filter((imageUrl) => imageUrl !== data.story.coverImageUrl)
	);
</script>

<div class="mx-6 mt-18 p-0 pb-12 sm:mx-12 sm:px-6 md:container md:mx-auto lg:px-22">
	<div class="flex flex-row items-center justify-between gap-4">
		<a
			href="/story"
			class="inline-flex items-center gap-2 rounded-full border border-amber-400 bg-surface-card px-4 py-3.5 font-mono text-xs tracking-[0.2em] text-amber-700 uppercase transition-colors duration-200 hover:bg-amber-200 hover:text-amber-900 md:p-3 md:text-sm"
		>
			<svg
				aria-hidden="true"
				class="h-4 w-4"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M15 19 8 12l7-7" />
			</svg>
			Back to stories
		</a>

		<div
			class="flex flex-row items-center gap-3 rounded-full border border-amber-400 bg-surface-card px-1 py-1"
			aria-label="Story font size"
		>
			{#each fontSizeOptions as option (option.value)}
				<button
					type="button"
					aria-label={`${option.label} text size`}
					aria-pressed={fontSize === option.value}
					onclick={() => (fontSize = option.value)}
					class={[
						'flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-200',
						fontSize === option.value
							? 'border-amber-700 bg-amber-700 text-amber-50'
							: 'border-amber-300 bg-transparent text-amber-700 hover:bg-amber-200'
					]}
				>
					<span aria-hidden="true" class={['font-lora leading-none', option.iconClass]}>A</span>
				</button>
			{/each}
		</div>
	</div>

	<article class="mt-6 flex flex-col">
		<div class="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-12">
			<img
				src={data.story.coverImageUrl}
				alt={data.story.storyTitle}
				decoding="async"
				fetchpriority="high"
				class="aspect-auto max-h-105 w-full rounded-4xl object-cover lg:max-h-132 lg:min-h-96 lg:max-w-lg"
			/>

			<div>
				<div class="flex items-center gap-1 pt-6 pb-2 align-middle text-sm text-gray-600">
					<span aria-hidden="true"><TimeIcon /></span>
					<span class="font-mono text-sm tracking-[0.16em] uppercase sm:text-base"
						>{formattedDate}</span
					>
				</div>

				<div class="space-y-3">
					<h2 class="font-lora text-4xl font-semibold text-amber-700 md:text-5xl">
						{data.story.storyTitle}
					</h2>
					<p class="font-crimson-text text-xl text-amber-500 sm:text-2xl">
						{data.story.storyDescription}
					</p>
				</div>
			</div>
		</div>

		<hr class="my-8 border-amber-700" />

		<div class="space-y-8">
			<div class={[textParseClasses.root, fontSizeClasses[fontSize]]}>
				{@html parsedStoryBody}
			</div>

			{#if galleryImages.length > 0}
				<section class="space-y-4 pt-4">
					<h3 class="font-mono text-sm tracking-[0.2em] text-amber-700 uppercase">
						Here are some memories:
					</h3>
					<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
						{#each galleryImages as imageUrl (imageUrl)}
							<img
								src={imageUrl}
								alt={`${data.story.storyTitle} gallery image`}
								loading="lazy"
								decoding="async"
								class="h-64 w-full rounded-4xl object-cover"
							/>
						{/each}
					</div>
				</section>
			{/if}
		</div>
	</article>
</div>
