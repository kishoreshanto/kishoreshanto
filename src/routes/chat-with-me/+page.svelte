<script lang="ts">
	import { browser } from '$app/environment';
	import type { ChatMessage, ChatRole, ChatSessionStore } from '$lib/types';
	import { tick } from 'svelte';

	class ChatSessionState implements ChatSessionStore {
		draft = $state('');
		messages = $state<ChatMessage[]>([]);
		isResponding = $state(false);
		nextMessageId = $state(1);
	}

	const SAMPLE_RESPONSE = 'Message Received, Sample Response';

	function createChatSessionState() {
		return new ChatSessionState();
	}

	function getChatSession() {
		if (!browser) {
			return createChatSessionState();
		}

		window.__ChatSession ??= createChatSessionState();
		return window.__ChatSession;
	}

	function formatTimestamp(date: Date) {
		return date.toLocaleTimeString([], {
			hour: '2-digit',
			minute: '2-digit'
		});
	}

	const chatSession = getChatSession();

	let viewport: HTMLDivElement | null = $state(null);
	let composer: HTMLTextAreaElement | null = $state(null);

	let trimmedDraft = $derived(chatSession.draft.trim());
	let sendDisabled = $derived(trimmedDraft.length === 0 || chatSession.isResponding);

	function createMessage(role: ChatRole, text: string): ChatMessage {
		return {
			id: chatSession.nextMessageId++,
			role,
			text,
			sentAt: formatTimestamp(new Date())
		};
	}

	function syncComposerHeight() {
		if (!composer) {
			return;
		}

		composer.style.height = '0px';
		composer.style.height = `${Math.min(composer.scrollHeight, 160)}px`;
	}

	$effect(() => {
		composer;
		chatSession.draft;
		syncComposerHeight();
	});

	$effect(() => {
		viewport;
		chatSession.messages.length;
		chatSession.isResponding;

		if (!viewport) {
			return;
		}

		void tick().then(() => {
			viewport?.scrollTo({
				top: viewport.scrollHeight,
				behavior: 'smooth'
			});
		});
	});

	async function sendMessage() {
		const content = chatSession.draft.trim();

		if (content.length === 0 || chatSession.isResponding) {
			return;
		}

		chatSession.messages.push(createMessage('user', content));
		chatSession.draft = '';
		chatSession.isResponding = true;

		await tick();

		window.setTimeout(() => {
			chatSession.messages.push(createMessage('assistant', SAMPLE_RESPONSE));
			chatSession.isResponding = false;
		}, 520);
	}

	function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		void sendMessage();
	}

	function handleComposerKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter' && !event.shiftKey) {
			event.preventDefault();
			void sendMessage();
		}
	}
</script>

<main class="mx-5 mt-20 mb-20 md:container md:mx-auto md:px-10">
	<div class="">
		<!-- <header
			class="mb-6 flex flex-col items-center gap-2 lg:flex-row lg:items-start lg:justify-between"
		>
			<p class="chat-kicker">Quick conversation</p>
			<p class="font-lora">
				Enter to send. <span class="rounded-full bg-amber-200 px-2 py-0.5 font-mono text-sm"
					>Shift+Enter</span
				> creates a new line.
			</p>
		</header> -->

		<div
			aria-busy={chatSession.isResponding}
			aria-live="polite"
			bind:this={viewport}
			class="chat-thread rounded-t-4xl border-x border-t border-amber-500 bg-amber-100"
		>
			{#if chatSession.messages.length === 0}
				<div class="page-container">
					<h1 class="page-heading">Talk with an AI version of me</h1>
					<h4 class="page-subheading">
						Ask anything about me, it will try its best to answer.<br /> (AI can be wrong, so take it
						with a grain of salt)
					</h4>
				</div>
			{:else}
				{#each chatSession.messages as message (message.id)}
					<article
						class={[
							'message-row',
							message.role === 'user' ? 'message-row--user' : 'message-row--assistant'
						]}
					>
						<div
							class={[
								'message-bubble',
								message.role === 'user' ? 'message-bubble--user' : 'message-bubble--assistant'
							]}
						>
							<p class="message-label">{message.role === 'user' ? 'You' : 'ChatBot'}</p>
							<p class="message-text">{message.text}</p>
							<p class="message-time">{message.sentAt}</p>
						</div>
					</article>
				{/each}

				{#if chatSession.isResponding}
					<article class="message-row message-row--assistant">
						<div class="message-bubble message-bubble--assistant typing-bubble">
							<p class="message-label">Assistant</p>
							<div aria-label="Assistant is typing" class="typing-dots" role="status">
								<span></span>
								<span></span>
								<span></span>
							</div>
						</div>
					</article>
				{/if}
			{/if}
		</div>

		<form
			class="chat-composer rounded-b-4xl border-x border-b border-amber-500 bg-amber-100"
			onsubmit={handleSubmit}
		>
			<div class="flex w-full items-center gap-4 md:max-w-4xl">
				<!-- <label class="sr-only" for="chat-message">Write a message</label> -->
				<textarea
					id="chat-message "
					autocomplete="off"
					bind:this={composer}
					bind:value={chatSession.draft}
					class="min-h-14 w-full rounded-3xl border border-amber-700/35 bg-white px-4 text-left font-ivy-text text-base text-warm-umber"
					onkeydown={handleComposerKeydown}
					placeholder="Type a question here..."
					rows="1"
					spellcheck="true"
				></textarea>

				<button class="brand-button chat-send" disabled={sendDisabled} type="submit">
					{chatSession.isResponding ? 'Thinking...' : 'Send'}
				</button>
			</div>

			<p class="font-lora text-sm md:text-base">
				Enter to send. <span class="rounded-full bg-amber-200 px-2 py-0.5 font-mono text-sm"
					>Shift+Enter</span
				> creates a new line.
			</p>
		</form>
	</div>
</main>
