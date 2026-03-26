/**
 * Navigation metadata and route helpers used by the app shell and swipe logic.
 * Author: Kishore Shanto, ChatGPT Codex (GPT 5.4), Claude (Opus 4.6)
 * Version: 1.0
 * Created: 26 March 2026
 *
 * This module keeps the top-level navigation order in one place so swipe-based
 * navigation and route transition animations stay aligned with the visible nav.
 */

/** Paths included in the primary top-level navigation. */
export type TopLevelNavigationPath = '/' | '/timeline' | '/story' | '/contact';

/** Direction used when moving between adjacent swipe targets. */
export type SwipeStepDirection = -1 | 1;

/** Route transition direction derived from the ordered navigation list. */
export type RouteTransitionDirection = 'forward' | 'backward';

/** Single navigation item rendered in the top-level navigation. */
type NavigationItem = {
	/** Visible label presented to the user. */
	label: string;
	/** Route href associated with the label. */
	href: TopLevelNavigationPath;
};

/** Ordered list of primary navigation items. */
export const topLevelNavigationItems = [
	{ label: 'Hey', href: '/' },
	{ label: 'Timeline', href: '/timeline' },
	{ label: 'Stories', href: '/story' },
	{ label: 'Contact', href: '/contact' }
] as const satisfies readonly NavigationItem[];

/**
 * Returns the exact index of a pathname in the top-level navigation list.
 * @param pathname - The current pathname to resolve.
 * @returns The matching index, or -1 when the pathname is not exact.
 */
function getExactSwipeNavigationIndex(pathname: string): number {
	return topLevelNavigationItems.findIndex((item) => item.href === pathname);
}

/**
 * Resolves the top-level navigation index for a pathname or nested route.
 * @param pathname - The current pathname to resolve.
 * @returns The matching top-level index, or -1 when no match exists.
 */
export function getTopLevelNavigationIndex(pathname: string): number {
	if (pathname === '/') {
		return 0;
	}

	for (let index = 1; index < topLevelNavigationItems.length; index += 1) {
		const href = topLevelNavigationItems[index].href;

		if (pathname === href || pathname.startsWith(`${href}/`)) {
			return index;
		}
	}

	return -1;
}

/**
 * Returns the exact top-level navigation path for a pathname.
 * @param pathname - The current pathname to resolve.
 * @returns The matching top-level path, or null when no exact match exists.
 */
export function getExactSwipeNavigationPath(pathname: string): TopLevelNavigationPath | null {
	return getExactSwipeNavigationIndex(pathname) === -1
		? null
		: (pathname as TopLevelNavigationPath);
}

/**
 * Returns the adjacent top-level navigation path in the given swipe direction.
 * @param pathname - The current pathname to resolve.
 * @param direction - The swipe direction, where -1 is previous and 1 is next.
 * @returns The adjacent path, or null when the current path is not exact or there is no neighbor.
 */
export function getAdjacentSwipeNavigationPath(
	pathname: string,
	direction: SwipeStepDirection
): TopLevelNavigationPath | null {
	const currentIndex = getExactSwipeNavigationIndex(pathname);

	if (currentIndex === -1) {
		return null;
	}

	return topLevelNavigationItems[currentIndex + direction]?.href ?? null;
}

/**
 * Determines the route transition direction between two top-level locations.
 * @param fromPathname - The source pathname.
 * @param toPathname - The destination pathname.
 * @returns The transition direction, or null when either path is not top-level.
 */
export function getRouteTransitionDirection(
	fromPathname: string,
	toPathname: string
): RouteTransitionDirection | null {
	const fromIndex = getTopLevelNavigationIndex(fromPathname);
	const toIndex = getTopLevelNavigationIndex(toPathname);

	if (fromIndex === -1 || toIndex === -1 || fromIndex === toIndex) {
		return null;
	}

	return toIndex > fromIndex ? 'forward' : 'backward';
}
