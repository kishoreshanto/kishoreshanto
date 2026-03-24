import researchData from '$lib/research.json';
import { clampYear } from '$lib/timeline-utils';
import { parseDateWithOrdinal } from '$lib/utils';
import workExperienceData from '$lib/work_experience.json';

import type {
	NormalizedResearchTimelineEntry,
	NormalizedTimelineEntry,
	NormalizedWorkExperienceTimelineEntry,
	RawResearchTimelineEntry,
	RawWorkExperienceTimelineEntry,
	TimelineFacetOptions,
	TimelineFilterState
} from './types';

const rawResearchEntries: RawResearchTimelineEntry[] = researchData;
const rawWorkExperienceEntries: RawWorkExperienceTimelineEntry[] = workExperienceData;

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

/**
 * Converts a timeline date label into a UTC timestamp for deterministic sorting.
 *
 * @param value Human-readable timeline date text.
 * @returns UTC timestamp for sorting, or Number.NEGATIVE_INFINITY when parsing fails.
 */
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

/**
 * Extracts the UTC year from a timestamp.
 *
 * @param timestamp UTC timestamp value.
 * @returns UTC year, or 0 when the timestamp is not finite.
 */
function getTimelineYear(timestamp: number): number {
	if (!Number.isFinite(timestamp)) {
		return 0;
	}

	return new Date(timestamp).getUTCFullYear();
}

/**
 * Deduplicates string values after trimming and removes empty entries.
 *
 * @param values Candidate string values.
 * @returns Unique, trimmed, non-empty values.
 */
function uniqueNonEmptyValues(values: string[]): string[] {
	return [...new Set(values.map((value) => value.trim()).filter((value) => value.length > 0))];
}

/**
 * Produces a locale-sorted, deduplicated list of non-empty string values.
 *
 * @param values Candidate string values.
 * @returns Unique, trimmed, non-empty values sorted with locale comparison.
 */
function uniqueSortedValues(values: string[]): string[] {
	return uniqueNonEmptyValues(values).sort((left, right) => left.localeCompare(right));
}

/**
 * Normalizes free-form timeline text for case-insensitive and accent-insensitive matching.
 *
 * @param value Raw text input.
 * @returns Normalized searchable text.
 */
export function normalizeTimelineText(value: string): string {
	return value
		.toLocaleLowerCase()
		.normalize('NFKD')
		.replace(/\p{Mark}+/gu, '')
		.replace(/[^\p{Letter}\p{Number}]+/gu, ' ')
		.replace(/\s+/g, ' ')
		.trim();
}

/**
 * Splits normalized search text into word tokens.
 *
 * @param value Raw text input.
 * @returns List of normalized tokens.
 */
export function tokenizeTimelineSearchText(value: string): string[] {
	const normalizedValue = normalizeTimelineText(value);
	return normalizedValue ? normalizedValue.split(' ') : [];
}

/**
 * Flattens and normalizes selected text fragments into a single searchable string.
 *
 * @param parts Mixed text fragments to merge.
 * @returns Normalized combined search text.
 */
function buildSearchText(parts: Array<string | string[] | undefined>): string {
	return normalizeTimelineText(
		parts
			.flatMap((part) => (Array.isArray(part) ? part : [part ?? '']))
			.map((part) => part.trim())
			.filter((part) => part.length > 0)
			.join(' ')
	);
}

/**
 * Converts a raw research timeline record into the normalized shared timeline shape.
 *
 * @param entry Raw research timeline entry.
 * @returns Normalized research timeline entry.
 */
function normalizeResearchEntry(entry: RawResearchTimelineEntry): NormalizedResearchTimelineEntry {
	const timestamp = getTimelineTimestamp(entry.date);
	const affiliations = uniqueSortedValues(entry.affiliations);
	const searchText = buildSearchText([
		entry.props.category,
		entry.props.highlight_right,
		entry.props.title,
		entry.props.subtitle_1,
		entry.props.subtitle_2,
		entry.props.overview,
		entry.props.keywords,
		affiliations,
		entry.search_terms
	]);

	return {
		id: entry.id,
		entryType: 'research',
		date: entry.date,
		timestamp,
		year: getTimelineYear(timestamp),
		category: entry.props.category.trim(),
		affiliations,
		searchText,
		searchTokens: new Set(tokenizeTimelineSearchText(searchText)),
		props: entry.props
	};
}

/**
 * Converts a raw work-experience timeline record into the normalized shared timeline shape.
 *
 * @param entry Raw work experience timeline entry.
 * @returns Normalized work experience timeline entry.
 */
function normalizeWorkExperienceEntry(
	entry: RawWorkExperienceTimelineEntry
): NormalizedWorkExperienceTimelineEntry {
	const timestamp = getTimelineTimestamp(entry.date);
	const affiliations = uniqueSortedValues(entry.affiliations);
	const searchText = buildSearchText([
		entry.props.category,
		entry.props.highlight_right,
		entry.props.title,
		entry.props.subtitle_1,
		entry.props.subtitle_2,
		entry.props.overview,
		entry.props.role,
		entry.props.key_deliverables,
		affiliations,
		entry.search_terms
	]);

	return {
		id: entry.id,
		entryType: 'work_experience',
		date: entry.date,
		timestamp,
		year: getTimelineYear(timestamp),
		category: entry.props.category.trim(),
		affiliations,
		searchText,
		searchTokens: new Set(tokenizeTimelineSearchText(searchText)),
		props: entry.props
	};
}

/**
 * Derives available timeline facet values and the bounded year range from entries.
 *
 * @param entries Normalized timeline entries.
 * @returns Computed facet options including year bounds, categories, and affiliations.
 */
function deriveTimelineFacetOptions(entries: NormalizedTimelineEntry[]): TimelineFacetOptions {
	const years = entries.map((entry) => entry.year).filter((year) => year > 0);
	const currentYear = new Date().getFullYear();
	const minYear = years.length > 0 ? Math.min(...years) : currentYear;
	const maxYear = years.length > 0 ? Math.min(Math.max(...years), currentYear) : currentYear;

	return {
		minYear,
		maxYear,
		categories: uniqueSortedValues(entries.map((entry) => entry.category)),
		affiliations: uniqueSortedValues(entries.flatMap((entry) => entry.affiliations))
	};
}

/**
 * Builds an inverted token index mapping search tokens to matching entry ids.
 *
 * @param entries Normalized timeline entries.
 * @returns Token-to-entry-id inverted index.
 */
function buildTimelineSearchIndex(entries: NormalizedTimelineEntry[]): Map<string, Set<string>> {
	const searchIndex = new Map<string, Set<string>>();

	for (const entry of entries) {
		for (const token of entry.searchTokens) {
			const ids = searchIndex.get(token) ?? new Set<string>();
			ids.add(entry.id);
			searchIndex.set(token, ids);
		}
	}

	return searchIndex;
}

/**
 * Computes the intersection of two id sets.
 *
 * @param left First id set.
 * @param right Second id set.
 * @returns Intersection of both sets.
 */
function intersectIdSets(left: Set<string>, right: Set<string>): Set<string> {
	const [smaller, larger] = left.size <= right.size ? [left, right] : [right, left];
	const intersection = new Set<string>();

	for (const value of smaller) {
		if (larger.has(value)) {
			intersection.add(value);
		}
	}

	return intersection;
}

/**
 * Resolves matching entry ids for a normalized query using token intersections.
 *
 * @param normalizedQuery Normalized query string.
 * @param searchIndex Token-to-entry-id index.
 * @returns Matching ids, an empty set when no token matches, or null when query is empty.
 */
function getQueryMatchIds(
	normalizedQuery: string,
	searchIndex: Map<string, Set<string>>
): Set<string> | null {
	if (!normalizedQuery) {
		return null;
	}

	const tokens = [...new Set(tokenizeTimelineSearchText(normalizedQuery))];

	if (tokens.length === 0) {
		return null;
	}

	let candidateIds: Set<string> | null = null;

	for (const token of tokens) {
		const tokenMatches = searchIndex.get(token);

		if (!tokenMatches) {
			return new Set<string>();
		}

		candidateIds = candidateIds
			? intersectIdSets(candidateIds, tokenMatches)
			: new Set(tokenMatches);

		if (candidateIds.size === 0) {
			return candidateIds;
		}
	}

	return candidateIds;
}

/**
 * Trims and keeps only selected values that are present in the allowed set.
 *
 * @param values Selected values from input.
 * @param allowedValues Whitelist of valid values.
 * @returns Sanitized set containing only allowed values.
 */
function sanitizeSelectedValues(values: string[], allowedValues: Set<string>): Set<string> {
	return new Set(values.map((value) => value.trim()).filter((value) => allowedValues.has(value)));
}

/**
 * Parses URL search params into a validated timeline filter state.
 *
 * @param searchParams URL search parameters.
 * @param facetOptions Allowed facet options and year bounds.
 * @returns Validated timeline filter state.
 */
export function parseTimelineFilterState(
	searchParams: URLSearchParams,
	facetOptions: TimelineFacetOptions
): TimelineFilterState {
	const allowedCategories = new Set(facetOptions.categories);
	const allowedAffiliations = new Set(facetOptions.affiliations);

	let startYear = clampYear(
		Number(searchParams.get('start')),
		facetOptions.minYear,
		facetOptions.maxYear
	);
	let endYear = clampYear(
		Number(searchParams.get('end')),
		facetOptions.minYear,
		facetOptions.maxYear
	);

	if (!searchParams.has('start')) {
		startYear = facetOptions.minYear;
	}

	if (!searchParams.has('end')) {
		endYear = facetOptions.maxYear;
	}

	if (startYear > endYear) {
		const normalizedStart = Math.min(startYear, endYear);
		const normalizedEnd = Math.max(startYear, endYear);
		startYear = normalizedStart;
		endYear = normalizedEnd;
	}

	return {
		query: searchParams.get('q')?.trim() ?? '',
		startYear,
		endYear,
		categories: sanitizeSelectedValues(searchParams.getAll('category'), allowedCategories),
		affiliations: sanitizeSelectedValues(searchParams.getAll('affiliation'), allowedAffiliations)
	};
}

/**
 * Serializes timeline filter state into URL search params.
 *
 * @param filterState Current timeline filter state.
 * @param facetOptions Allowed facet options and default year bounds.
 * @returns URLSearchParams representation of the filter state.
 */
export function buildTimelineSearchParams(
	filterState: TimelineFilterState,
	facetOptions: TimelineFacetOptions
): URLSearchParams {
	const searchParams = new URLSearchParams();
	const query = filterState.query.trim();

	if (query) {
		searchParams.set('q', query);
	}

	if (filterState.startYear !== facetOptions.minYear) {
		searchParams.set('start', String(filterState.startYear));
	}

	if (filterState.endYear !== facetOptions.maxYear) {
		searchParams.set('end', String(filterState.endYear));
	}

	for (const category of [...filterState.categories].sort((left, right) =>
		left.localeCompare(right)
	)) {
		searchParams.append('category', category);
	}

	for (const affiliation of [...filterState.affiliations].sort((left, right) =>
		left.localeCompare(right)
	)) {
		searchParams.append('affiliation', affiliation);
	}

	return searchParams;
}

/**
 * Applies query and facet constraints to timeline entries.
 *
 * @param entries Normalized timeline entries.
 * @param filterState Active filter values.
 * @param searchIndex Token-to-entry-id index for query matching.
 * @returns Entries that satisfy all active filters.
 */
export function filterTimelineEntries(
	entries: NormalizedTimelineEntry[],
	filterState: TimelineFilterState,
	searchIndex: Map<string, Set<string>>
): NormalizedTimelineEntry[] {
	const normalizedQuery = normalizeTimelineText(filterState.query);
	const queryMatchIds = getQueryMatchIds(normalizedQuery, searchIndex);

	return entries.filter((entry) => {
		const matchesQuery =
			!normalizedQuery ||
			(queryMatchIds?.has(entry.id) ?? false) ||
			entry.searchText.includes(normalizedQuery);

		const matchesYear =
			entry.year >= filterState.startYear && entry.year <= filterState.endYear;

		const matchesCategory =
			filterState.categories.size === 0 ||
			filterState.categories.has(entry.category);

		const matchesAffiliation =
			filterState.affiliations.size === 0 ||
			entry.affiliations.some((affiliation) => filterState.affiliations.has(affiliation));

		return matchesQuery && matchesYear && matchesCategory && matchesAffiliation;
	});
}

export const timelineEntries: NormalizedTimelineEntry[] = [
	...rawResearchEntries.map(normalizeResearchEntry),
	...rawWorkExperienceEntries.map(normalizeWorkExperienceEntry)
].sort((left, right) => right.timestamp - left.timestamp);

export const timelineFacetOptions = deriveTimelineFacetOptions(timelineEntries);
export const timelineSearchIndex = buildTimelineSearchIndex(timelineEntries);
