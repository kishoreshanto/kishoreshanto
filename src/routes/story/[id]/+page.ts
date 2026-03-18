import { error } from '@sveltejs/kit';
import { getStoryById } from '$lib/stories';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const story = getStoryById(params.id);

	if (!story) {
		error(404, 'Story not found');
	}

	return {
		story
	};
};
