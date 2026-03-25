export function clampYear(value: number, min: number, max: number): number {
	/**
	 * Clamp a value between a minimum and maximum value
	 * @param value - The value to clamp
	 * @param min - The minimum value
	 * @param max - The maximum value
	 * @returns - The clamped value
	 */
	if (Number.isNaN(value)) return min;
	return Math.min(Math.max(value, min), max);
}

export function updateStartYearState(params: {
	value: number;
	endYear: number;
	minimumYear: number;
	maximumYear: number;
}): { startYear: number; yearValidationMessage: string } {
	/**
	 * Update the start year state
	 * @param value - The value to update the start year to
	 * @param endYear - The end year
	 * @param minimumYear - The minimum year
	 * @param maximumYear - The maximum year
	 * @returns - An object containing the next start year and year validation message
	 */
	const { value, endYear, minimumYear, maximumYear } = params;
	const nextStartYear = clampYear(value, minimumYear, maximumYear);

	if (value > endYear) {
		return {
			startYear: endYear,
			yearValidationMessage: 'Start year cannot be greater than end year.'
		};
	}

	if (value < minimumYear) {
		return {
			startYear: nextStartYear,
			yearValidationMessage: `Start year cannot be earlier than ${minimumYear}.`
		};
	}

	if (value > maximumYear) {
		return {
			startYear: nextStartYear,
			yearValidationMessage: `Start year cannot be later than ${maximumYear}.`
		};
	}

	return {
		startYear: nextStartYear,
		yearValidationMessage: ''
	};
}

export function updateEndYearState(params: {
	value: number;
	startYear: number;
	minimumYear: number;
	maximumYear: number;
	currentYear: number;
	configuredEndYear: number;
}): { endYear: number; yearValidationMessage: string } {
	/**
	 * Update the end year state
	 * @param value - The value to update the end year to
	 * @param startYear - The start year
	 * @param minimumYear - The minimum year
	 * @param maximumYear - The maximum year
	 * @param currentYear - The current year
	 * @param configuredEndYear - The configured end year
	 * @returns - An object containing the next end year and year validation message
	 */
	const { value, startYear, minimumYear, maximumYear, currentYear, configuredEndYear } = params;
	const nextEndYear = clampYear(value, minimumYear, maximumYear);

	if (value < startYear) {
		return {
			endYear: startYear,
			yearValidationMessage: 'End year cannot be earlier than start year.'
		};
	}

	if (value > currentYear) {
		return {
			endYear: nextEndYear,
			yearValidationMessage: `End year cannot be greater than the current year (${currentYear}).`
		};
	}

	if (value > configuredEndYear) {
		return {
			endYear: nextEndYear,
			yearValidationMessage: `End year cannot be later than ${configuredEndYear}.`
		};
	}

	if (value < minimumYear) {
		return {
			endYear: nextEndYear,
			yearValidationMessage: `End year cannot be earlier than ${minimumYear}.`
		};
	}

	return {
		endYear: nextEndYear,
		yearValidationMessage: ''
	};
}

export function toggleStringSet(source: Set<string>, value: string): Set<string> {
	/**
	 * Toggle a value in a set
	 * @param source - The set to toggle the value in
	 * @param value - The value to toggle
	 * @returns - The next set
	 */
	const next = new Set(source);
	if (next.has(value)) next.delete(value);
	else next.add(value);
	return next;
}

export function clearTimelineFilters(minimumYear: number, maximumYear: number) {
	/**
	 * Clear all timeline filters
	 * @param minimumYear - The minimum year
	 * @param maximumYear - The maximum year
	 * @returns - An object containing the cleared timeline filters
	 */
	return {
		query: '',
		startYear: minimumYear,
		endYear: maximumYear,
		selectedCategories: new Set<string>(),
		selectedAffiliations: new Set<string>(),
		yearValidationMessage: ''
	};
}
