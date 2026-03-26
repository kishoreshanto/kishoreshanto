/**
 * Miscellaneous utility helpers shared across the application.
 * Author: Kishore Shanto, ChatGPT Codex (GPT 5.4), Claude (Opus 4.6)
 * Version: 1.0
 * Created: 25 March 2026
 *
 * This module currently contains small validation helpers used by form and
 * contact-related components.
 */

import { browser } from '$app/environment';

/**
 * Checks whether a string matches the project's email validation pattern.
 * @param email - The email address to validate.
 * @returns True when the value looks like a valid email address.
 */
export function isEmailValid(email: string): boolean {
	const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	return regex.test(email);
}

/**
 * Device Detection for Smartphones with Touch Capabilities
 * Determines if the current device is a smartphone with touch capabilities. This function checks for multiple indicators of a touch device, including user agent data, screen size, pointer capabilities, and touch points. By using a combination of these checks, we can more accurately identify smartphones and disable view transitions on those devices to improve performance and user experience.
 * @returns A boolean indicating whether the current device is a smartphone with touch capabilities.
 */
export function isSmartphoneTouchDevice(): boolean {
	if (!browser) {
		return false;
	}

	const mobileNavigator = navigator as Navigator & {
		userAgentData?: {
			mobile?: boolean;
		};
	};
	const mobileUserAgent =
		mobileNavigator.userAgentData?.mobile ??
		/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(mobileNavigator.userAgent);

	return (
		mobileUserAgent &&
		window.matchMedia('(max-width: 767px)').matches &&
		window.matchMedia('(hover: none) and (pointer: coarse)').matches &&
		mobileNavigator.maxTouchPoints > 0
	);
}