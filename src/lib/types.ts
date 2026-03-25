/**
 * Shared project-wide type definition file.
 * Author: Kishore Shanto, ChatGPT Codex (GPT 5.4), Claude (Opus 4.6)
 * Version: 1.0
 * Created: 25 March 2026
 *
 * All cross-cutting types, props, and normalized data shapes used throughout the
 * application are declared here so components, routes, and utilities can import
 * a single source of truth.
 */

/** Allowed authors for a chat message. */
export type ChatRole = 'user' | 'assistant';

/**
 * A single message rendered in the chat thread.
 */
export interface ChatMessage {
	/** Stable message identifier used for keyed rendering. */
	id: number;
	/** Author of the message, used to style the bubble and label. */
	role: ChatRole;
	/** Message body displayed to the user. */
	text: string;
	/** Human-readable timestamp shown beneath the message. */
	sentAt: string;
}

/**
 * In-memory chat session state shared across the chat-with-me route.
 */
export interface ChatSessionStore {
	/** Current draft text in the composer. */
	draft: string;
	/** Conversation history in render order. */
	messages: ChatMessage[];
	/** Whether the assistant is currently generating a reply. */
	isResponding: boolean;
	/** Next message id assigned when appending to the thread. */
	nextMessageId: number;
}

/** Discriminant used to separate timeline entry families. */
export type TimelineEntryType = 'research' | 'work_experience';

/** Publication quartile label used by research cards. */
export type Rank = 'Q1' | 'Q2' | 'Q3' | 'Q4';

/**
 * Props consumed by the research timeline card component.
 */
export interface ResearchCardProps {
	/** Display date label for the card. */
	date: string;
	/** Category label shown in the card header. */
	category: string;
	/** Optional right-aligned highlight copy for the card header. */
	highlight_right?: string;
	/** Main title of the research item. */
	title: string;
	/** First subtitle fragment, usually an affiliation or venue. */
	subtitle_1: string;
	/** Second subtitle fragment, usually a role or descriptor. */
	subtitle_2: string;
	/** Optional DOI or report URL. */
	doi_url?: string;
	/** Longer summary shown in the overview section. */
	overview: string;
	/** Optional list of keyword tags rendered as chips. */
	keywords?: string[];
	/** Optional publication quartile label normalized by the card. */
	rank?: string;
}

/**
 * Props consumed by the work-experience timeline card component.
 */
export interface WorkExperienceCardProps {
	/** Display date label for the card. */
	date: string;
	/** Category label shown in the card header. */
	category: string;
	/** Optional right-aligned highlight copy for the card header. */
	highlight_right?: string;
	/** Main title of the work-experience item. */
	title: string;
	/** First subtitle fragment, usually the employer or organization. */
	subtitle_1: string;
	/** Second subtitle fragment, usually a role or descriptor. */
	subtitle_2: string;
	/** Summary shown in the scope-of-work section. */
	overview: string;
	/** Optional list of roles or tags rendered as pills. */
	role?: string[];
	/** Optional ordered list of deliverables rendered below the overview. */
	key_deliverables?: string[];
}

/**
 * Shared metadata embedded in raw timeline records before normalization.
 */
type TimelineSearchMetadata = {
	/** Related organizations or affiliations used for filtering and search. */
	affiliations: string[];
	/** Additional search-only terms that do not need to be rendered. */
	search_terms?: string[];
};

/**
 * Raw research timeline entry loaded directly from the JSON data source.
 */
export type RawResearchTimelineEntry = TimelineSearchMetadata & {
	/** Stable entry identifier used as the keyed list value. */
	id: string;
	/** Svelte component name that renders the entry. */
	component: string;
	/** Human-readable source date string. */
	date: string;
	/** Props forwarded to the research card component. */
	props: ResearchCardProps;
};

/**
 * Raw work-experience timeline entry loaded directly from the JSON data source.
 */
export type RawWorkExperienceTimelineEntry = TimelineSearchMetadata & {
	/** Stable entry identifier used as the keyed list value. */
	id: string;
	/** Svelte component name that renders the entry. */
	component: string;
	/** Human-readable source date string. */
	date: string;
	/** Props forwarded to the work-experience card component. */
	props: WorkExperienceCardProps;
};

/**
 * Shared normalized timeline shape produced after parsing and indexing raw records.
 *
 * @template TEntryType - Discriminant for the entry family.
 * @template TProps - Source props preserved on the normalized record.
 */
type BaseNormalizedTimelineEntry<TEntryType extends TimelineEntryType, TProps> = {
	/** Stable entry identifier. */
	id: string;
	/** Discriminant used in component logic and type guards. */
	entryType: TEntryType;
	/** Original source date string. */
	date: string;
	/** UTC timestamp derived from the source date for deterministic sorting. */
	timestamp: number;
	/** UTC year derived from the timestamp for filtering. */
	year: number;
	/** Normalized category label used by facet filters. */
	category: string;
	/** Deduplicated affiliations associated with the entry. */
	affiliations: string[];
	/** Flattened searchable text used by the timeline search index. */
	searchText: string;
	/** Tokenized search text used for fast set-based matching. */
	searchTokens: Set<string>;
	/** Original card props preserved for rendering. */
	props: TProps;
};

/** Normalized research timeline entry. */
export type NormalizedResearchTimelineEntry = BaseNormalizedTimelineEntry<
	'research',
	ResearchCardProps
>;

/** Normalized work-experience timeline entry. */
export type NormalizedWorkExperienceTimelineEntry = BaseNormalizedTimelineEntry<
	'work_experience',
	WorkExperienceCardProps
>;

/** Union of all normalized timeline entry types. */
export type NormalizedTimelineEntry =
	| NormalizedResearchTimelineEntry
	| NormalizedWorkExperienceTimelineEntry;

/**
 * Timeline filter state used by the timeline page.
 */
export type TimelineFilterState = {
	/** Free-text search query entered by the user. */
	query: string;
	/** Inclusive lower bound for the active year range. */
	startYear: number;
	/** Inclusive upper bound for the active year range. */
	endYear: number;
	/** Selected category filters, stored as a set for fast membership checks. */
	categories: Set<string>;
	/** Selected affiliation filters, stored as a set for fast membership checks. */
	affiliations: Set<string>;
};

/**
 * Derived facet options computed from the normalized timeline entries.
 */
export type TimelineFacetOptions = {
	/** Lowest year available in the data set. */
	minYear: number;
	/** Highest year available in the data set. */
	maxYear: number;
	/** Sorted list of available category filters. */
	categories: string[];
	/** Sorted list of available affiliation filters. */
	affiliations: string[];
};

/**
 * Structured shape returned by the parseDateWithOrdinal utility function, used to
 */
export type ParsedDate = {
	/** Day of the month as a string, without the ordinal suffix. */
	day: string;
	/** Ordinal suffix for the day, e.g. "st", "nd", "rd", "th". */
	suffix: string;
	/** Remaining part of the date string after removing the day and suffix. */
	rest: string;
};

/**
 * Story shape used for the stories page, loaded directly from the JSON data source.
 */
export type Story = {
	/** Stable story identifier used for keyed rendering and routing. */
	id: string;
	/** Human-readable date string shown in the story header. */
	date: string;
	/** URL of the cover image displayed at the top of the story. */
	coverImageUrl: string;
	/** Human-readable title of the story. */
	storyTitle: string;
	/** Short description shown in the story overview section. */
	storyDescription: string;
	/** Full story body content, which may include HTML markup. */
	storyBody: string;
	/** Optional list of additional image URLs rendered within the story body. */
	imageUrls: string[];
};
