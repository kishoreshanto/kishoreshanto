/**
 * Date and time utility helpers used across the application.
 * Author: Kishore Shanto, ChatGPT Codex (GPT 5.4), Claude (Opus 4.6)
 * Version: 1.0
 * Created: 25 March 2026
 *
 * These helpers provide shared formatting and parsing behavior for route and UI
 * components that work with publication dates, story dates, and timezone-aware
 * time labels.
 */

import type { ParsedDate } from '$lib/types';

/** Default UTC-based formatting options used by the cached date formatter. */
const dateFormatterOptions = {
	month: 'long',
	day: 'numeric',
	year: 'numeric',
	timeZone: 'UTC'
} as const;

/** Cache of locale-specific Intl.DateTimeFormat instances. */
const dateFormatterCache = new Map<string, Intl.DateTimeFormat>();

/**
 * Returns a cached date formatter for the requested locale region.
 * @param region - BCP 47 locale tag used for formatting.
 * @returns The cached or newly created Intl.DateTimeFormat instance.
 */
function getDateFormatter(region: string): Intl.DateTimeFormat {
	const cachedFormatter = dateFormatterCache.get(region);

	if (cachedFormatter) {
		return cachedFormatter;
	}

	const formatter = new Intl.DateTimeFormat(region, dateFormatterOptions);
	dateFormatterCache.set(region, formatter);

	return formatter;
}

/**
 * Formats a date string using the cached UTC date formatter.
 * @param date - ISO-compatible date string to format.
 * @param region - BCP 47 locale tag used to format the date.
 * @returns The formatted date string.
 */
export function formatDate(date: string, region: string): string {
	return getDateFormatter(region).format(new Date(date));
}

/**
 * Checks whether a string matches the expected "Month day, year" date format.
 * @param dateString - The date string to validate.
 * @returns True when the string matches the expected format.
 */
export function isValidDate(dateString: string): boolean {
	const regex =
		/^(January|February|March|April|May|June|July|August|September|October|November|December)\s(\d{1,2})(st|nd|rd|th),\s\d{4}$/;
	return regex.test(dateString);
}

/**
 * Converts a UTC offset into a formatted GMT label.
 * @param GMT - The offset from UTC in hours.
 * @returns The formatted GMT label.
 */
function makeGMTString(GMT: number): string {
	let GMTString = 'GMT';
	if (GMT >= 0) GMTString = `${GMTString}+`;
	else GMTString = `${GMTString}-`;

	if (Math.abs(GMT) < 10) GMTString = `${GMTString}0`;

	const hours: number = Math.floor(Math.abs(GMT));
	const fractionalHours: number = Math.abs(GMT) - hours;
	GMTString = `${GMTString}${hours}`;

	GMTString = `${GMTString}:`;

	const min: number = fractionalHours * 60;

	if (min < 10) GMTString = `${GMTString}0`;
	GMTString = `${GMTString}${min}`;

	return GMTString;
}

/**
 * Calculates a local 24-hour time string for a UTC offset.
 * @param utcOffset - The offset from UTC in hours.
 * @returns The local time and GMT label for the offset.
 */
export function getLocalTimeFromUTCOffset(utcOffset: number): { local_time: string; GMT: string } {
	const now: Date = new Date();
	const utc: Date = new Date(
		now.getUTCFullYear(),
		now.getUTCMonth(),
		now.getUTCDate(),
		now.getUTCHours(),
		now.getUTCMinutes(),
		now.getUTCSeconds()
	);

	const offsetMilliseconds = utcOffset * 60 * 60 * 1000;
	const new_date: Date = new Date(utc.getTime() + offsetMilliseconds);

	return {
		local_time: new_date.toString().split(' ')[4].split(':').slice(0, 2).join(':'),
		GMT: makeGMTString(utcOffset)
	};
}

/**
 * Parses a date string in the format "Month day, year" into its components.
 * @param dateString - The date string to parse.
 * @returns The parsed month, day prefix, and year, or undefined when invalid.
 */
export function parseDate(
	dateString: string
): { prefix: string; date: string; month: string; year: string } | undefined {
	if (!isValidDate(dateString)) {
		return undefined;
	}

	const string_array: string[] = dateString.split(',');
	const a1: string = string_array[0];
	const year: string = string_array[1];
	const month: string = a1.split(' ')[0];
	const date: string = a1.split(' ')[1].slice(0, -2);
	const prefix: string = a1.split(' ')[1].slice(-2);

	return { prefix, date, month, year };
}

/**
 * Returns the ordinal suffix for a numeric day value.
 * @param day - The day of the month.
 * @returns The ordinal suffix for the day.
 */
export function getOrdinalSuffix(day: number) {
	const remainder = day % 100;

	if (remainder >= 11 && remainder <= 13) {
		return 'th';
	}

	switch (day % 10) {
		case 1:
			return 'st';
		case 2:
			return 'nd';
		case 3:
			return 'rd';
		default:
			return 'th';
	}
}

/**
 * Parses a date string into its day, suffix, and remaining text.
 * @param value - The date string to parse.
 * @returns The parsed date pieces, or null when the string is invalid.
 */
export function parseDateWithOrdinal(value: string): ParsedDate | null {
	const match = value.trim().match(/^(\d{1,2})(?:st|nd|rd|th)?(\s+.*)$/i);

	if (!match) {
		return null;
	}

	const day = Number(match[1]);

	if (!Number.isInteger(day) || day < 1 || day > 31) {
		return null;
	}

	return {
		day: String(day),
		suffix: getOrdinalSuffix(day),
		rest: match[2]
	};
}
