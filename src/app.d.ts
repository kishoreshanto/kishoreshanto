import type { ChatSessionStore } from './lib/types';

declare global {
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
