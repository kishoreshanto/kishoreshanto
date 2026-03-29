import type { ChatSessionStore } from './lib/types';

declare global {
	const __COMMIT_HASH__: string;

	interface Window {
		__ChatSession?: ChatSessionStore;
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
