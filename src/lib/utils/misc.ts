import type { Rank } from '$lib/types';

export function isEmailValid(email: string): boolean {
	/**
	 * Check if an email is valid
	 * @param email - The email to check
	 * @returns - A boolean indicating whether the email is valid
	 */
	const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	return regex.test(email);
}

export function rankColor(rank: string) {
	/**
	 * Get the color of the rank
	 * @param rank - The rank to get the color of
	 * @returns - The color of the rank
	 */
	const normalizedRank = rank.trim().toUpperCase() as Rank | '';

	switch (normalizedRank) {
		case 'Q1':
			return 'border-emerald-200 bg-linear-to-r from-emerald-50 to-teal-50';
		case 'Q2':
			return 'border-blue-200 bg-linear-to-r from-blue-50 to-indigo-50';
		case 'Q3':
			return 'border-yellow-200 bg-linear-to-r from-yellow-50 to-orange-50';
		case 'Q4':
			return 'border-gray-200 bg-linear-to-r from-gray-50 to-gray-100';
		default:
			return 'border-gray-200 bg-linear-to-r from-gray-50 to-gray-100';
	}
}
