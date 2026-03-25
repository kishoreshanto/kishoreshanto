import { stories } from '$lib/utils/stories';
import type { PageLoad } from './$types';

/**
 * Load the full story collection for the story index page.
 * @returns The stories available for rendering.
 */
export const load: PageLoad = () => {
	return {
		stories
	};
};
