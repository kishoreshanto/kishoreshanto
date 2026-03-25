import rawStories from '$lib/data/stories.json';

export type Story = {
	id: string;
	date: string;
	coverImageUrl: string;
	storyTitle: string;
	storyDescription: string;
	storyBody: string;
	imageUrls: string[];
};

export const stories = rawStories as Story[];

/**
 * Find a story by its stable identifier.
 * @param id - The story id taken from the route params.
 * @returns The matching story, if one exists.
 */
export function getStoryById(id: string): Story | undefined {
	return stories.find((story) => story.id === id);
}
