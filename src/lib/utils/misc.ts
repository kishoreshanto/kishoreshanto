import { browser } from '$app/environment';

export function isSmartphoneTouchDevice(): boolean {
	/**
	 * HELPER FUNCTION: Device Detection for Smartphones with Touch Capabilities
	 * Determines if the current device is a smartphone with touch capabilities. This function checks for multiple indicators of a touch device, including user agent data, screen size, pointer capabilities, and touch points. By using a combination of these checks, we can more accurately identify smartphones and disable view transitions on those devices to improve performance and user experience.
	 * @returns A boolean indicating whether the current device is a smartphone with touch capabilities.
	 */
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

export function isEmailValid(email: string): boolean {
	/**
	 * Check if an email is valid
	 * @param email - The email to check
	 * @returns - A boolean indicating whether the email is valid
	 */
	const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	return regex.test(email);
}
