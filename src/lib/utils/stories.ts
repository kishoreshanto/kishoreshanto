/**
 * Story data access helpers for the stories route.
 * Author: Kishore Shanto, ChatGPT Codex (GPT 5.4), Claude (Opus 4.6)
 * Version: 1.0
 * Created: 24 March 2026
 *
 * The stories page sources its content from a JSON file. This module keeps the
 * imported dataset strongly typed and exposes a small lookup helper for route
 * and page logic that needs to resolve a story by its stable identifier.
 */

import rawStories from '$lib/data/stories.json';
import type { Story } from '$lib/types';

/**
 * Story records loaded from the JSON data source and typed for downstream use.
 */
export const stories = rawStories as Story[];

/**
 * Finds a story by its stable identifier.
 * @param id - The story id taken from the route params.
 * @returns The matching story, if one exists.
 */
export function getStoryById(id: string): Story | undefined {
	return stories.find((story) => story.id === id);
}
