<script lang="ts">
	import TimeIcon from '$component/visuals/icons/TimeIcon.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const dateFormatter = new Intl.DateTimeFormat('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric'
	});

	function formatDate(date: string) {
		return dateFormatter.format(new Date(date));
	}
</script>

<h1 class="page-heading">What's been going on lately?</h1>
<h3 class="page-subheading">Know stories about me, my work, and my journey (and my cat)</h3>

<div
	class="mx-auto mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 md:px-16 lg:grid-cols-3 2xl:grid-cols-4"
>
	{#each data.stories as story (story.id)}
		<a href={`/story/${story.id}`} class="story-card block h-full overflow-hidden">
			<img src={story.coverImageUrl} alt={story.storyTitle} class="max-h-46" />
			<div class="story-card-body">
				<h2 class="story-card-title">{story.storyTitle}</h2>
				<p class="story-card-description">{story.storyDescription}</p>
				<div class="flex items-center gap-2 align-middle">
					<span aria-hidden="true">
						<TimeIcon />
					</span>

					<p class="story-card-timestamp">{formatDate(story.date)}</p>
				</div>
			</div>
		</a>
	{/each}
</div>
