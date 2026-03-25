export type ChatRole = 'user' | 'assistant';

export type ChatMessage = {
	id: number;
	role: ChatRole;
	text: string;
	sentAt: string;
};

export interface ChatSessionStore {
	draft: string;
	messages: ChatMessage[];
	isResponding: boolean;
	nextMessageId: number;
}


export type TimelineEntryType = 'research' | 'work_experience';
export type Rank = 'Q1' | 'Q2' | 'Q3' | 'Q4';

export interface ResearchCardProps {
	date: string;
	category: string;
	highlight_right?: string;
	title: string;
	subtitle_1: string;
	subtitle_2: string;
	doi_url?: string;
	overview: string;
	keywords?: string[];
	rank?: string;
}

export interface WorkExperienceCardProps {
	date: string;
	category: string;
	highlight_right?: string;
	title: string;
	subtitle_1: string;
	subtitle_2: string;
	overview: string;
	role?: string[];
	key_deliverables?: string[];
}


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
