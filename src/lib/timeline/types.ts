export type TimelineEntryType = 'research' | 'work_experience';

type TimelineSearchMetadata = {
	affiliations: string[];
	search_terms?: string[];
};

export type RawResearchTimelineEntry = TimelineSearchMetadata & {
	id: string;
	component: string;
	date: string;
	props: ResearchCardProps;
};

export type RawWorkExperienceTimelineEntry = TimelineSearchMetadata & {
	id: string;
	component: string;
	date: string;
	props: WorkExperienceCardProps;
};

type BaseNormalizedTimelineEntry<TEntryType extends TimelineEntryType, TProps> = {
	id: string;
	entryType: TEntryType;
	date: string;
	timestamp: number;
	year: number;
	category: string;
	affiliations: string[];
	searchText: string;
	searchTokens: Set<string>;
	props: TProps;
};

export type NormalizedResearchTimelineEntry = BaseNormalizedTimelineEntry<
	'research',
	ResearchCardProps
>;

export type NormalizedWorkExperienceTimelineEntry = BaseNormalizedTimelineEntry<
	'work_experience',
	WorkExperienceCardProps
>;

export type NormalizedTimelineEntry =
	| NormalizedResearchTimelineEntry
	| NormalizedWorkExperienceTimelineEntry;

export type TimelineFilterState = {
	query: string;
	startYear: number;
	endYear: number;
	categories: Set<string>;
	affiliations: Set<string>;
};

export type TimelineFacetOptions = {
	minYear: number;
	maxYear: number;
	categories: string[];
	affiliations: string[];
};
