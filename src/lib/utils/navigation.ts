export type TopLevelNavigationPath = '/' | '/timeline' | '/story' | '/contact';
export type SwipeStepDirection = -1 | 1;
export type RouteTransitionDirection = 'forward' | 'backward';

type NavigationItem = {
	label: string;
	href: TopLevelNavigationPath;
};

export const topLevelNavigationItems = [
	{ label: 'Hey', href: '/' },
	{ label: 'Timeline', href: '/timeline' },
	{ label: 'Stories', href: '/story' },
	{ label: 'Contact', href: '/contact' }
] as const satisfies readonly NavigationItem[];

function getExactSwipeNavigationIndex(pathname: string): number {
	return topLevelNavigationItems.findIndex((item) => item.href === pathname);
}

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

export function getExactSwipeNavigationPath(pathname: string): TopLevelNavigationPath | null {
	return getExactSwipeNavigationIndex(pathname) === -1
		? null
		: (pathname as TopLevelNavigationPath);
}

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
