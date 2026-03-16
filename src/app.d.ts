import type { Component } from 'svelte';

declare global {
	type Rank = 'Q1' | 'Q2' | 'Q3' | 'Q4';

	type DateMarkProps = {
		date: string;
	};

	type ParsedDate = {
		day: string;
		suffix: string;
		rest: string;
	};

	interface ResearchCardProps {
		date: string;
		category: string;
		highlight_right?: string;
		title: string;
		subtitle_1: string;
		subtitle_2: string;
		doi_url?: string;
		overview: string;
		keywords?: string[];
		rank?: string;
	}

	interface NotificationOffIconProps {
		current_time: string;
	}

	interface ContactCard {
		id: string;
		label: string;
		value: string;
		href: string;
		show: boolean;
		external: boolean;
		icon: Component<any>;
	}

	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
