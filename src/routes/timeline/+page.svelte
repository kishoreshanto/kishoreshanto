<script lang="ts">
	import ResearchCard from '$component/timeline-page/cards/ResearchCard.svelte';
	import WorkExperienceCard from '$component/timeline-page/cards/WorkExperienceCard.svelte';
	import TimeLine from '$component/timeline-page/TimeLine.svelte';
	import filterData from '$lib/filters.json';
	import researchData from '$lib/research.json';
	import workExperienceData from '$lib/work_experience.json';
	import {
		clearTimelineFilters,
		toggleStringSet,
		updateEndYearState,
		updateStartYearState
	} from '$lib/timeline-utils';
	import { parseDateWithOrdinal } from '$lib/utils';

	type TimelineComponent = 'research' | 'work_experience' | 'education';

	type BaseTimelineEntry<TComponent extends TimelineComponent, TProps> = {
		id: string;
		component: TComponent;
		date: string;
		props: TProps;
	};

	type ResearchTimelineEntry = BaseTimelineEntry<'research', ResearchCardProps>;
	type WorkExperienceTimelineEntry = BaseTimelineEntry<'work_experience', WorkExperienceCardProps>;
	type EducationTimelineEntry = BaseTimelineEntry<'education', Record<string, unknown>>;
	type TimelineEntry = ResearchTimelineEntry | WorkExperienceTimelineEntry | EducationTimelineEntry;

	type RawWorkExperienceEntry = {
		id: string;
		component: string;
		date: string;
		props: WorkExperienceCardProps;
	};

	const monthIndexByName: Record<string, number> = {
		January: 0,
		February: 1,
		March: 2,
		April: 3,
		May: 4,
		June: 5,
		July: 6,
		August: 7,
		September: 8,
		October: 9,
		November: 10,
		December: 11
	};

	function getTimelineTimestamp(value: string): number {
		const parsedDate = parseDateWithOrdinal(value);

		if (!parsedDate) {
			return Number.NEGATIVE_INFINITY;
		}

		const [rawMonthName, yearWithComma] = parsedDate.rest.trim().split(/\s+/);
		const monthName = rawMonthName?.replace(',', '');
		const month = monthIndexByName[monthName];
		const year = Number(yearWithComma?.replace(',', ''));
		const day = Number(parsedDate.day);

		if (month === undefined || !Number.isInteger(year) || !Number.isInteger(day)) {
			return Number.NEGATIVE_INFINITY;
		}

		return Date.UTC(year, month, day);
	}

	function isResearchEntry(entry: TimelineEntry): entry is ResearchTimelineEntry {
		return entry.component === 'research';
	}

	function isWorkExperienceEntry(entry: TimelineEntry): entry is WorkExperienceTimelineEntry {
		return entry.component === 'work_experience';
	}

	const researchTimelineEntries = researchData as ResearchTimelineEntry[];
	const workTimelineEntries = (workExperienceData as RawWorkExperienceEntry[]).map((entry) => ({
		id: entry.id,
		component: 'work_experience' as const,
		date: entry.date,
		props: entry.props
	}));
	const timelineEntries: TimelineEntry[] = [...researchTimelineEntries, ...workTimelineEntries];

	const filters = filterData[0];
	const currentYear = new Date().getFullYear();
	const minimumYear = filters.year.start_year;
	const maximumYear = Math.min(filters.year.end_year, currentYear);

	let startYear = $state(minimumYear);
	let endYear = $state(maximumYear);
	let selectedCategories = $state<Set<string>>(new Set());
	let selectedAffiliations = $state<Set<string>>(new Set());
	let yearValidationMessage = $state('');
	let sortedTimelineEntries = $derived(
		[...timelineEntries].sort(
			(firstEntry, secondEntry) =>
				getTimelineTimestamp(secondEntry.date) - getTimelineTimestamp(firstEntry.date)
		)
	);
</script>

<div class="container mx-auto md:px-16">
	<div class="align-items mb-12 flex w-full flex-row items-center justify-center gap-4">
		<input
			type="text"
			placeholder="Search experiences..."
			class="xs:min-w-sm rounded-full border border-gray-300 px-6 py-4 font-lora focus:border-transparent focus:ring-2 focus:ring-amber-800 focus:outline-none lg:min-w-xl"
		/>
		<button
			class="rounded-full bg-amber-800 px-4 py-4 font-lora font-medium text-white transition-colors duration-200 hover:bg-amber-700 focus:outline-none"
		>
			Search
		</button>
	</div>
</div>

<div class="mx-auto mt-6 flex flex-row sm:container md:px-16">
	<!-- Filter Container -->
	<div
		id="filter-container"
		class="mr-12 hidden h-fit min-w-xs space-y-6 rounded-3xl border border-amber-700/70 p-6 lg:block"
	>
		<div class="flex flex-row gap-2">
			<h1 class="w-full text-center font-crimson-text text-xl font-bold text-amber-800">FILTERS</h1>
		</div>

		<!-- Year Range -->
		<div class="space-y-3">
			<h2 class="font-crimson-text text-sm font-bold tracking-wider text-amber-800 uppercase">
				Year Range
			</h2>
			<div class="flex items-center gap-2">
				<input
					type="number"
					min={minimumYear}
					max={endYear}
					bind:value={startYear}
					oninput={(event) => {
						const nextState = updateStartYearState({
							value: event.currentTarget.valueAsNumber,
							endYear,
							minimumYear,
							maximumYear
						});

						startYear = nextState.startYear;
						yearValidationMessage = nextState.yearValidationMessage;
					}}
					class="w-full rounded-lg border border-amber-700/40 bg-[#f9d8b0]/30 px-3 py-1.5 font-lora text-sm text-amber-900 focus:border-transparent focus:ring-2 focus:ring-amber-800 focus:outline-none"
				/>
				<span class="text-sm font-medium text-amber-700">&ndash;</span>
				<input
					type="number"
					min={startYear}
					max={maximumYear}
					bind:value={endYear}
					oninput={(event) => {
						const nextState = updateEndYearState({
							value: event.currentTarget.valueAsNumber,
							startYear,
							minimumYear,
							maximumYear,
							currentYear,
							configuredEndYear: filters.year.end_year
						});

						endYear = nextState.endYear;
						yearValidationMessage = nextState.yearValidationMessage;
					}}
					class="w-full rounded-lg border border-amber-700/40 bg-[#f9d8b0]/30 px-3 py-1.5 font-lora text-sm text-amber-900 focus:border-transparent focus:ring-2 focus:ring-amber-800 focus:outline-none"
				/>
			</div>
		</div>

		<!-- Categories -->
		<div class="space-y-2">
			<h2 class="font-crimson-text text-sm font-bold tracking-wider text-amber-800 uppercase">
				Categories
			</h2>
			<div class="space-y-1.5">
				{#each filters.categories as category (category)}
					<label
						class="flex cursor-pointer items-center gap-2.5 rounded-lg px-2 py-1 transition-colors duration-150 hover:bg-amber-100/50"
					>
						<input
							type="checkbox"
							checked={selectedCategories.has(category)}
							onchange={() => {
								selectedCategories = toggleStringSet(selectedCategories, category);
							}}
							class="h-4 w-4 rounded border-amber-700/50 text-amber-800 focus:ring-amber-700"
						/>
						<span class="font-lora text-sm text-amber-900/80">{category}</span>
					</label>
				{/each}
			</div>
		</div>

		<!-- Affiliations -->
		<div class="space-y-2">
			<h2 class="font-crimson-text text-sm font-bold tracking-wider text-amber-800 uppercase">
				Affiliations
			</h2>
			<div class="space-y-1.5">
				{#each filters.affiliations as affiliation (affiliation)}
					<label
						class="flex cursor-pointer items-center gap-2.5 rounded-lg px-2 py-1 transition-colors duration-150 hover:bg-amber-100/50"
					>
						<input
							type="checkbox"
							checked={selectedAffiliations.has(affiliation)}
							onchange={() => {
								selectedAffiliations = toggleStringSet(selectedAffiliations, affiliation);
							}}
							class="h-4 w-4 rounded border-amber-700/50 text-amber-800 focus:ring-amber-700"
						/>
						<span class="font-lora text-sm text-amber-900/80">{affiliation}</span>
					</label>
				{/each}
			</div>
		</div>

		<!-- Clear Filters -->
		<button
			onclick={() => {
				const cleared = clearTimelineFilters(minimumYear, maximumYear);
				startYear = cleared.startYear;
				endYear = cleared.endYear;
				selectedCategories = cleared.selectedCategories;
				selectedAffiliations = cleared.selectedAffiliations;
				yearValidationMessage = cleared.yearValidationMessage;
			}}
			class="w-full rounded-full border border-amber-700/50 px-4 py-2 font-lora text-sm font-medium text-amber-800 transition-colors duration-200 hover:bg-amber-800 hover:text-white"
		>
			Clear Filters
		</button>
	</div>

	<!-- Timeline Bar -->
	<TimeLine />

	<!-- Cards (Sorted by Date) -->
	<div class="flex flex-col">
		{#each sortedTimelineEntries as entry (entry.id)}
			{#if isResearchEntry(entry)}
				<ResearchCard {...entry.props} />
			{:else if isWorkExperienceEntry(entry)}
				<WorkExperienceCard {...entry.props} />
			{:else if entry.component === 'education'}
				<!-- Add EducationCard rendering here when the component is available. -->
			{/if}
		{/each}
	</div>
</div>
