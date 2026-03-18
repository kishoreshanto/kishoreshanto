import { error } from '@sveltejs/kit';
import { getStoryById } from '$lib/stories';
import type { PageLoad } from './$types';

/**
 * Load the story that matches the current route parameter.
 * @param params - Route parameters supplied by SvelteKit.
 * @returns The selected story for the page.
 */
export const load: PageLoad = ({ params }) => {
	const story = getStoryById(params.id);

	if (!story) {
		throw error(404, 'Story not found');
	}

	return {
		story
	};
};
