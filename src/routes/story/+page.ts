import { stories } from '$lib/stories';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	return {
		stories
	};
};
