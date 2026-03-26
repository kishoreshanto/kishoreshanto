/**
 * Miscellaneous utility helpers shared across the application.
 * Author: Kishore Shanto, ChatGPT Codex (GPT 5.4), Claude (Opus 4.6)
 * Version: 1.0
 * Created: 25 March 2026
 *
 * This module currently contains small validation helpers used by form and
 * contact-related components.
 */

/**
 * Checks whether a string matches the project's email validation pattern.
 * @param email - The email address to validate.
 * @returns True when the value looks like a valid email address.
 */
export function isEmailValid(email: string): boolean {
	const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	return regex.test(email);
}
