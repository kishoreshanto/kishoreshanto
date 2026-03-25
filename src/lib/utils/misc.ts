export function isEmailValid(email: string): boolean {
	/**
	 * Check if an email is valid
	 * @param email - The email to check
	 * @returns - A boolean indicating whether the email is valid
	 */
	const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	return regex.test(email);
}
