<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import ResearchCard from '$component/timeline-page/cards/ResearchCard.svelte';
	import WorkExperienceCard from '$component/timeline-page/cards/WorkExperienceCard.svelte';
	import TimeLine from '$component/timeline-page/TimeLine.svelte';
	import {
		buildTimelineSearchParams,
		filterTimelineEntries,
		parseTimelineFilterState,
		timelineEntries,
		timelineFacetOptions,
		timelineSearchIndex
	} from '$lib/utils/timeline';
	import {
		clearTimelineFilters,
		toggleStringSet,
		updateEndYearState,
		updateStartYearState
	} from '$lib/utils/timeline';
	import { onDestroy, onMount, untrack } from 'svelte';

	import type {
		NormalizedResearchTimelineEntry,
		NormalizedTimelineEntry,
		NormalizedWorkExperienceTimelineEntry,
		TimelineFilterState
	} from '$lib/types';

	type TimelineFilterPatch = Partial<TimelineFilterState>;

	const minimumYear = timelineFacetOptions.minYear;
	const maximumYear = timelineFacetOptions.maxYear;
	const currentYear = new Date().getFullYear();
	const defaultSearchParams = new URLSearchParams();

	let isHydrated = $state(false);
	let searchDraft = $state('');
	let startYearInput = $state(String(minimumYear));
	let endYearInput = $state(String(maximumYear));
	let yearValidationMessage = $state('');

	let searchCommitTimer: ReturnType<typeof setTimeout> | null = null;

	let activeSearchParams = $derived(isHydrated ? page.url.searchParams : defaultSearchParams);
	let filterState = $derived(parseTimelineFilterState(activeSearchParams, timelineFacetOptions));
	let filteredTimelineEntries = $derived(
		filterTimelineEntries(timelineEntries, filterState, timelineSearchIndex)
	);
	let hasActiveFilters = $derived(
		filterState.query.length > 0 ||
			filterState.startYear !== minimumYear ||
			filterState.endYear !== maximumYear ||
			filterState.categories.size > 0 ||
			filterState.affiliations.size > 0
	);

	function isResearchEntry(
		entry: NormalizedTimelineEntry
	): entry is NormalizedResearchTimelineEntry {
		return entry.entryType === 'research';
	}

	function isWorkExperienceEntry(
		entry: NormalizedTimelineEntry
	): entry is NormalizedWorkExperienceTimelineEntry {
		return entry.entryType === 'work_experience';
	}

	function cancelSearchCommit() {
		if (searchCommitTimer) {
			clearTimeout(searchCommitTimer);
			searchCommitTimer = null;
		}
	}

	async function syncTimelineUrl(nextSearchParams: URLSearchParams) {
		if (!browser) {
			return;
		}

		const nextUrl = new URL(page.url);
		nextUrl.search = nextSearchParams.toString();

		if (nextUrl.search === page.url.search) {
			return;
		}

		await goto(nextUrl, {
			replaceState: true,
			noScroll: true,
			keepFocus: true
		});
	}

	function getWorkingQuery(): string {
		return searchDraft !== filterState.query ? searchDraft.trim() : filterState.query;
	}

	function buildPatchedFilterState(patch: TimelineFilterPatch): TimelineFilterState {
		return {
			query: patch.query ?? getWorkingQuery(),
			startYear: patch.startYear ?? filterState.startYear,
			endYear: patch.endYear ?? filterState.endYear,
			categories: patch.categories ?? filterState.categories,
			affiliations: patch.affiliations ?? filterState.affiliations
		};
	}

	function commitFilterPatch(patch: TimelineFilterPatch) {
		cancelSearchCommit();
		const nextFilterState = buildPatchedFilterState(patch);
		const nextSearchParams = buildTimelineSearchParams(nextFilterState, timelineFacetOptions);
		return syncTimelineUrl(nextSearchParams);
	}

	function scheduleSearchCommit() {
		if (!browser) {
			return;
		}

		cancelSearchCommit();
		searchCommitTimer = setTimeout(() => {
			searchCommitTimer = null;
			const nextFilterState = buildPatchedFilterState({ query: searchDraft.trim() });
			void syncTimelineUrl(buildTimelineSearchParams(nextFilterState, timelineFacetOptions));
		}, 250);
	}

	function handleSearchInput(event: Event) {
		searchDraft = (event.currentTarget as HTMLInputElement).value;
		scheduleSearchCommit();
	}

	function flushSearchCommit() {
		cancelSearchCommit();
		const nextFilterState = buildPatchedFilterState({ query: searchDraft.trim() });
		void syncTimelineUrl(buildTimelineSearchParams(nextFilterState, timelineFacetOptions));
	}

	function handleSearchSubmit(event: SubmitEvent) {
		event.preventDefault();
		flushSearchCommit();
	}

	function handleCategoryToggle(category: string) {
		yearValidationMessage = '';
		void commitFilterPatch({
			categories: toggleStringSet(filterState.categories, category)
		});
	}

	function handleAffiliationToggle(affiliation: string) {
		yearValidationMessage = '';
		void commitFilterPatch({
			affiliations: toggleStringSet(filterState.affiliations, affiliation)
		});
	}

	function applyStartYear(rawValue: string) {
		const nextState = updateStartYearState({
			value: Number(rawValue),
			endYear: filterState.endYear,
			minimumYear,
			maximumYear
		});

		startYearInput = String(nextState.startYear);
		yearValidationMessage = nextState.yearValidationMessage;
		void commitFilterPatch({ startYear: nextState.startYear });
	}

	function applyEndYear(rawValue: string) {
		const nextState = updateEndYearState({
			value: Number(rawValue),
			startYear: filterState.startYear,
			minimumYear,
			maximumYear,
			currentYear,
			configuredEndYear: maximumYear
		});

		endYearInput = String(nextState.endYear);
		yearValidationMessage = nextState.yearValidationMessage;
		void commitFilterPatch({ endYear: nextState.endYear });
	}

	function handleClearFilters() {
		cancelSearchCommit();
		const cleared = clearTimelineFilters(minimumYear, maximumYear);
		searchDraft = cleared.query;
		startYearInput = String(cleared.startYear);
		endYearInput = String(cleared.endYear);
		yearValidationMessage = cleared.yearValidationMessage;
		void syncTimelineUrl(new URLSearchParams());
	}

	onMount(() => {
		isHydrated = true;
	});

	onDestroy(() => {
		cancelSearchCommit();
	});

	$effect(() => {
		const nextQuery = filterState.query;

		if (untrack(() => searchDraft) !== nextQuery) {
			searchDraft = nextQuery;
		}
	});

	$effect(() => {
		const nextStartYear = String(filterState.startYear);

		if (untrack(() => startYearInput) !== nextStartYear) {
			startYearInput = nextStartYear;
		}
	});

	$effect(() => {
		const nextEndYear = String(filterState.endYear);

		if (untrack(() => endYearInput) !== nextEndYear) {
			endYearInput = nextEndYear;
		}
	});

	$effect(() => {
		if (!isHydrated) {
			return;
		}

		const sanitizedSearch = buildTimelineSearchParams(filterState, timelineFacetOptions).toString();
		const currentSearch = page.url.searchParams.toString();

		if (sanitizedSearch !== currentSearch) {
			void syncTimelineUrl(new URLSearchParams(sanitizedSearch));
		}
	});
</script>

<div class="container mx-auto md:px-16">
	<form
		class="align-items mb-12 flex w-full flex-row items-center justify-center gap-4"
		onsubmit={handleSearchSubmit}
	>
		<label class="sr-only" for="timeline-search">Search timeline entries</label>
		<input
			id="timeline-search"
			type="text"
			value={searchDraft}
			oninput={handleSearchInput}
			placeholder="Search experiences, publications, roles, tools..."
			autocomplete="off"
			class="min-w-sm rounded-full border border-gray-300 px-6 py-4 text-center font-lora focus:border-transparent focus:ring-2 focus:ring-amber-800 focus:outline-none lg:min-w-6xl"
		/>
		<!-- <button
			type="submit"
			class="rounded-full bg-amber-800 px-4 py-4 font-lora font-medium text-white transition-colors duration-200 hover:bg-amber-700 focus:outline-none"
		>
			Search
		</button> -->
	</form>
</div>

<!-- Filters -->
<div
	id="filter-container"
	class="mx-6 mb-6 hidden h-fit space-y-2 rounded-3xl border border-amber-700/70 p-6 lg:hidden"
>
	<div class="flex flex-row gap-2">
		<h1 class="w-full text-center font-lora text-xl font-bold text-amber-800">FILTERS</h1>
	</div>

	<div class="flex items-center gap-3 align-middle">
		<h2 class="font-lora font-bold tracking-wider text-amber-800 uppercase">Year Range</h2>
		<div class="flex items-center gap-2">
			<input
				type="number"
				min={minimumYear}
				max={filterState.endYear}
				value={startYearInput}
				oninput={(event) => {
					startYearInput = event.currentTarget.value;
					yearValidationMessage = '';
				}}
				onchange={(event) => {
					applyStartYear(event.currentTarget.value);
				}}
				class="w-full rounded-full border border-amber-700/40 bg-[#f9d8b0]/30 px-3 py-1.5 font-mono text-sm text-amber-900 focus:border-transparent focus:ring-2 focus:ring-amber-800 focus:outline-none"
			/>
			<span class="text-sm font-medium text-amber-700">&ndash;</span>
			<input
				type="number"
				min={filterState.startYear}
				max={maximumYear}
				value={endYearInput}
				oninput={(event) => {
					endYearInput = event.currentTarget.value;
					yearValidationMessage = '';
				}}
				onchange={(event) => {
					applyEndYear(event.currentTarget.value);
				}}
				class="w-full rounded-lg border border-amber-700/40 bg-[#f9d8b0]/30 px-3 py-1.5 font-mono text-sm text-amber-900 focus:border-transparent focus:ring-2 focus:ring-amber-800 focus:outline-none"
			/>
		</div>

		{#if yearValidationMessage}
			<p class="font-lora text-xs text-amber-900/80">{yearValidationMessage}</p>
		{/if}
	</div>

	<div class="flex flex-col gap-2">
		<h2 class="font-lora font-bold tracking-wider text-amber-800 uppercase">Categories</h2>

		<div class="flex flex-wrap items-center gap-x-2 gap-y-2">
			{#each timelineFacetOptions.categories as category (category)}
				<label
					class="flex w-fit cursor-pointer items-center gap-2.5 rounded-full border px-3.5 py-1 transition-colors duration-150 hover:bg-amber-100/50 has-checked:bg-amber-600 has-checked:text-white"
				>
					<input
						type="checkbox"
						checked={filterState.categories.has(category)}
						onchange={() => handleCategoryToggle(category)}
						class="peer hidden"
					/>
					<span
						class="font-lora transition-colors select-none peer-checked:bg-amber-600 peer-checked:text-white"
					>
						{category}
					</span>
				</label>
			{/each}
		</div>
	</div>

	<div class="flex flex-col gap-2">
		<h2 class="font-lora font-bold tracking-wider text-amber-800 uppercase">Affiliations</h2>
		<div class="flex flex-wrap items-center gap-x-2 gap-y-2">
			{#each timelineFacetOptions.affiliations as affiliation (affiliation)}
				<label
					class="flex w-fit cursor-pointer items-center gap-2.5 rounded-full border px-3.5 py-1 transition-colors duration-150 hover:bg-amber-100/50 has-checked:bg-amber-600 has-checked:text-white"
				>
					<input
						type="checkbox"
						checked={filterState.affiliations.has(affiliation)}
						onchange={() => {
							handleAffiliationToggle(affiliation);
						}}
						class="peer hidden"
					/>
					<span
						class="font-lora transition-colors select-none peer-checked:bg-amber-600 peer-checked:text-white"
						>{affiliation}</span
					>
				</label>
			{/each}
		</div>
	</div>

	<button
		type="button"
		onclick={handleClearFilters}
		disabled={!hasActiveFilters && !yearValidationMessage}
		class="w-full cursor-pointer rounded-full border border-amber-700/50 px-4 py-2 font-lora font-medium text-amber-800 transition-colors duration-100 hover:bg-amber-200 disabled:cursor-not-allowed disabled:border-gray-300 disabled:text-gray-300 disabled:hover:bg-transparent"
	>
		Clear Filters
	</button>
</div>

<div class="mx-auto mt-6 flex flex-row justify-center sm:container md:px-16">
	<!-- Filters -->
	<div
		id="filter-container"
		class="mr-12 mb-12 hidden h-fit space-y-3 rounded-3xl border border-amber-700/70 p-6 lg:block lg:max-w-[calc(var(--container-sm)-2rem)] xl:max-w-[calc(var(--container-sm)-1rem)]"
	>
		<div class="flex flex-row gap-2">
			<h1 class="w-full text-center font-lora text-xl font-bold text-[#845522]">FILTERS</h1>
		</div>

		<div class="space-y-2">
			<h2 class="font-lora font-bold tracking-wider text-[#845522] uppercase">Year Range</h2>
			<div class="flex items-center gap-2">
				<input
					type="number"
					min={minimumYear}
					max={filterState.endYear}
					value={startYearInput}
					oninput={(event) => {
						startYearInput = event.currentTarget.value;
						yearValidationMessage = '';
					}}
					onchange={(event) => {
						applyStartYear(event.currentTarget.value);
					}}
					class="w-full rounded-lg border border-amber-700/40 bg-[#f9d8b0]/30 px-3 py-1.5 font-mono text-sm text-amber-900 focus:border-transparent focus:ring-2 focus:ring-amber-800 focus:outline-none"
				/>
				<span class="text-sm font-medium text-amber-700">&ndash;</span>
				<input
					type="number"
					min={filterState.startYear}
					max={maximumYear}
					value={endYearInput}
					oninput={(event) => {
						endYearInput = event.currentTarget.value;
						yearValidationMessage = '';
					}}
					onchange={(event) => {
						applyEndYear(event.currentTarget.value);
					}}
					class="w-full rounded-lg border border-amber-700/40 bg-[#f9d8b0]/30 px-3 py-1.5 font-mono text-sm text-amber-900 focus:border-transparent focus:ring-2 focus:ring-amber-800 focus:outline-none"
				/>
			</div>

			<p class="text-center font-lora text-sm text-amber-600/80">
				Eariest year is {minimumYear} and latest year is {maximumYear}
			</p>
		</div>

		<div class="space-y-2">
			<h2 class="font-lora font-bold tracking-wider text-[#845522] uppercase">Categories</h2>
			<div class="flex flex-wrap items-center gap-x-2 gap-y-2">
				{#each timelineFacetOptions.categories as category (category)}
					<label
						class="flex w-fit cursor-pointer items-center gap-2.5 rounded-full border px-3.5 py-1 transition-colors duration-150 hover:bg-amber-100/50 has-checked:bg-amber-600 has-checked:text-white"
					>
						<input
							type="checkbox"
							checked={filterState.categories.has(category)}
							onchange={() => {
								handleCategoryToggle(category);
							}}
							class="peer hidden"
						/>
						<span
							class="font-lora transition-colors select-none peer-checked:bg-amber-600 peer-checked:text-white"
							>{category}</span
						>
					</label>
				{/each}
			</div>
		</div>

		<div class="space-y-2">
			<h2 class="font-lora font-bold tracking-wider text-[#845522] uppercase">Affiliations</h2>
			<div class="flex flex-wrap items-center gap-x-2 gap-y-2">
				{#each timelineFacetOptions.affiliations as affiliation (affiliation)}
					<label
						class="flex w-fit cursor-pointer items-center gap-2.5 rounded-full border px-3.5 py-1 transition-colors duration-150 hover:bg-amber-100/50 has-checked:bg-amber-600 has-checked:text-white"
					>
						<input
							type="checkbox"
							checked={filterState.affiliations.has(affiliation)}
							onchange={() => {
								handleAffiliationToggle(affiliation);
							}}
							class="peer hidden"
						/>
						<span
							class="font-lora transition-colors select-none peer-checked:bg-amber-600 peer-checked:text-white"
							>{affiliation}</span
						>
					</label>
				{/each}
			</div>
		</div>

		<button
			type="button"
			onclick={handleClearFilters}
			disabled={!hasActiveFilters && !yearValidationMessage}
			class="w-full cursor-pointer rounded-full border border-amber-700/50 px-4 py-2 font-lora font-medium text-amber-800 transition-colors duration-100 hover:bg-amber-200 disabled:cursor-not-allowed disabled:border-gray-300 disabled:text-gray-300 disabled:hover:bg-transparent"
		>
			Clear Filters
		</button>
	</div>

	{#if filteredTimelineEntries.length > 0}
		<TimeLine />
	{/if}

	<div class="flex w-full flex-col">
		{#if filteredTimelineEntries.length > 0}
			{#each filteredTimelineEntries as entry (entry.id)}
				{#if isResearchEntry(entry)}
					<ResearchCard {...entry.props} />
				{:else if isWorkExperienceEntry(entry)}
					<WorkExperienceCard {...entry.props} />
				{/if}
			{/each}
		{:else}
			<!-- <NotFound /> -->
			<div
				class="container mx-auto mb-12 flex w-full flex-col items-center gap-4 rounded-3xl bg-amber-100 px-8 py-12 md:mb-20 md:px-10"
			>
				<h2 class="text-center font-lora text-2xl font-semibold text-amber-600">
					Sorry, No matching timeline entries
				</h2>
				<p class="text-center font-lora text-gray-400">
					Try a broader search term or clear one of the active filters.
				</p>
			</div>
		{/if}
	</div>
</div>
