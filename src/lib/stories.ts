import rawStories from '$lib/stories.json';

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

export function getStoryById(id: string) {
	return stories.find((story) => story.id === id);
}
