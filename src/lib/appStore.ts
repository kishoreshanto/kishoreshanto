import { writable, derived, get } from 'svelte/store';
import type { ComponentType } from 'svelte';

// Types for better TypeScript support
export interface Project {
	id: string;
	title: string;
	keywords: string;
	date: string;
	component: ComponentType;
	modal?: ComponentType;
	show: boolean;
}

export interface AIResponseState {
	question: string;
	answer: string;
	isLoading: boolean;
}

// Core state stores
export const searchTerm = writable('');
export const debouncedSearchTerm = writable('');
export const isAskMode = writable(false);
export const showModal = writable(false);
export const selectedComponent = writable<ComponentType | null>(null);
export const aiResponse = writable<AIResponseState | null>(null);
export const isSimplifiedView = writable(false);

// Projects store
export const projects = writable<Project[]>([]);

// Derived stores for computed values
export const filteredProjects = derived(
	[projects, debouncedSearchTerm, isAskMode],
	([$projects, $debouncedSearchTerm, $isAskMode]) => {
		if ($isAskMode || !$debouncedSearchTerm.trim()) {
			return $projects.filter(project => project.show);
		}
		
		const search = $debouncedSearchTerm.toLowerCase();
		return $projects
			.filter(project => project.show)
			.filter(project => 
				project.title.toLowerCase().includes(search) || 
				project.keywords.toLowerCase().includes(search) ||
				project.date.toLowerCase().includes(search)
			);
	}
);

// Debounce utility with cleanup
let searchDebounceTimer: number;

export function debounceSearch(term: string, delay: number = 300) {
	if (searchDebounceTimer) {
		clearTimeout(searchDebounceTimer);
	}
	
	searchDebounceTimer = setTimeout(() => {
		debouncedSearchTerm.set(term);
	}, delay);
}

// State management actions for better organization
export const actions = {
	// Search actions
	setSearchTerm: (term: string) => {
		searchTerm.set(term);
		const currentMode = get(isAskMode);
		if (!currentMode) {
			debounceSearch(term);
		}
	},
	
	clearSearch: () => {
		searchTerm.set('');
		debouncedSearchTerm.set('');
		aiResponse.set(null);
		if (searchDebounceTimer) {
			clearTimeout(searchDebounceTimer);
		}
	},
	
	// Mode actions
	toggleMode: () => {
		isAskMode.update(mode => !mode);
		searchTerm.set('');
		debouncedSearchTerm.set('');
		aiResponse.set(null);
		if (searchDebounceTimer) {
			clearTimeout(searchDebounceTimer);
		}
	},
	
	// Modal actions
	openModal: (component: ComponentType) => {
		selectedComponent.set(component);
		showModal.set(true);
	},
	
	closeModal: () => {
		showModal.set(false);
		selectedComponent.set(null);
	},
	
	// AI actions
	startAILoading: (question: string) => {
		aiResponse.set({
			question,
			answer: '',
			isLoading: true
		});
	},
	
	completeAIResponse: (question: string, answer: string) => {
		aiResponse.set({
			question,
			answer,
			isLoading: false
		});
	},
	
	errorAIResponse: (question: string, errorMessage: string) => {
		aiResponse.set({
			question,
			answer: errorMessage,
			isLoading: false
		});
	},
	
	askAnotherQuestion: () => {
		searchTerm.set('');
		debouncedSearchTerm.set('');
		aiResponse.set(null);
	},
	
	// Project actions
	setProjects: (projectList: Project[]) => {
		projects.set(projectList);
	}
};

// Cleanup function for proper memory management
export function cleanup() {
	if (searchDebounceTimer) {
		clearTimeout(searchDebounceTimer);
	}
}
