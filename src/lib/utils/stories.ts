import rawStories from '$lib/data/stories.json';
import type { Story } from '$lib/types';

// Directly export the raw stories data as a typed array of Story objects.
export const stories = rawStories as Story[];

/**
 * Find a story by its stable identifier.
 * @param id - The story id taken from the route params.
 * @returns The matching story, if one exists.
 */
export function getStoryById(id: string): Story | undefined {
	return stories.find((story) => story.id === id);
}
