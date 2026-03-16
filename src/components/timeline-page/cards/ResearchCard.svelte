<script lang="ts">
	import PublicationRanking from '$component/timeline-page/cards/PublicationRanking.svelte';
	import { rankColor } from '$lib/utils';
	import DateMark from '../DateMark.svelte';

	let {
		date,
		category,
		highlight_right = '',
		title,
		subtitle_1,
		subtitle_2,
		doi_url = '',
		overview,
		keywords = [],
		rank = ''
	}: ResearchCardProps = $props();

	let normalizedRank = $derived(rank.trim().toUpperCase() as Rank | '');
	let rankColorClass = $derived(rankColor(normalizedRank));
</script>

<div id="card-container" class="card-container">
	<DateMark {date} />

	<div class="card-body">
		<!-- Highlight -->
		<div class="card-highlight">
			<div class="rounded-full border bg-[#f9d8b0] px-2 py-1">{category}</div>
			<h1>{highlight_right}</h1>
		</div>

		<!-- Card Header -->
		<div class="">
			<h1 id="title" class="card-title">{title}</h1>
			<div id="subtitle" class="card-subtitle">
				<span id="s1" class="font-medium text-amber-600">{subtitle_1}</span>
				<span id="bullet" class="text-amber-700">•</span>
				<span id="s2" class="text-amber-700">{subtitle_2}</span>
			</div>
			{#if doi_url}
				<a
					id="doi"
					class="font-mono text-sm text-amber-700 underline"
					href={doi_url}
					target="_blank"
					rel="noopener noreferrer"
				>
					{#if doi_url.includes('doi.org/')}
						DOI: {doi_url.split('doi.org/')[1] || doi_url}
					{:else}
						View Report
					{/if}
				</a>
			{/if}
		</div>

		<!-- Card Overview -->

		<div class="research-card-overview">
			<div>
				<p class="research-card-overview-title">Overview</p>
				<p class="research-card-overview-description">
					{overview}
				</p>
			</div>
		</div>

		<!-- Journal Quartile Highlight -->
		{#if normalizedRank === 'Q1'}
			<div class="research-card-rank {rankColorClass}">
				<div class="research-card-rank-container">
					<PublicationRanking rank="Q1" />
				</div>
			</div>
		{:else if normalizedRank === 'Q2'}
			<div class="research-card-rank {rankColorClass}">
				<div class="research-card-rank-container">
					<PublicationRanking rank="Q2" />
				</div>
			</div>
		{:else if normalizedRank === 'Q3'}
			<div class="research-card-rank {rankColorClass}">
				<div class="research-card-rank-container">
					<PublicationRanking rank="Q3" />
				</div>
			</div>
		{:else if normalizedRank === 'Q4'}
			<div class="research-card-rank {rankColorClass}">
				<div class="research-card-rank-container">
					<PublicationRanking rank="Q4" />
				</div>
			</div>
		{/if}

		<!-- Research Focus Areas / Keywords -->
		<div class="research-card-keywords-container">
			<p class="research-card-keywords-title">Research Focus Areas / Keywords</p>
			<div class="research-card-keywords-list">
				{#each keywords as keyword, index (`${keyword}-${index}`)}
					<span class="research-tag">{keyword}</span>
				{/each}
			</div>
		</div>
	</div>
</div>
