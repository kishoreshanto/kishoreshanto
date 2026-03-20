<script lang="ts">
	import { browser } from '$app/environment';
	import { tick } from 'svelte';

	type ChatRole = 'user' | 'assistant';

	type ChatMessage = {
		id: number;
		role: ChatRole;
		text: string;
		sentAt: string;
	};

	class ChatSessionState {
		draft = $state('');
		messages = $state<ChatMessage[]>([]);
		isResponding = $state(false);
		nextMessageId = $state(1);
	}

	type ChatWindow = Window & {
		__ksChatSession?: ChatSessionState;
	};

	const SAMPLE_RESPONSE = 'Message Received, Sample Response';

	function createChatSessionState() {
		return new ChatSessionState();
	}

	function getChatSession() {
		if (!browser) {
			return createChatSessionState();
		}

		const host = window as ChatWindow;
		host.__ksChatSession ??= createChatSessionState();
		return host.__ksChatSession;
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

<main class="container mx-auto mb-20 md:px-10">
		<div class="">
			<header class="flex lg:justify-between items-center lg:items-start flex-col gap-2 lg:flex-row mb-6">
				<p class="chat-kicker">Quick conversation</p>
				<p class="font-lora">Enter to send. <span class="font-mono text-sm bg-amber-200 rounded-full px-2 py-0.5">Shift+Enter</span> creates a new line.</p>
			</header>

			<div
				aria-busy={chatSession.isResponding}
				aria-live="polite"
				bind:this={viewport}
				class="chat-thread bg-amber-100 border-x border-t border-amber-500 rounded-t-4xl"
			>
				{#if chatSession.messages.length === 0}
					<div class="chat-empty">
						<p class="chat-empty-kicker">No conversation yet</p>
						<h3>Start a conversation by typing a message below.</h3>
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
								<p class="message-label">{message.role === 'user' ? 'You' : 'Assistant'}</p>
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

			<form class="chat-composer bg-amber-100 border-x border-b border-amber-500 rounded-b-4xl" onsubmit={handleSubmit}>
				<div class="chat-input-wrap">
					<label class="sr-only" for="chat-message">Write a message</label>
					<textarea
						id="chat-message"
						autocomplete="off"
						bind:this={composer}
						bind:value={chatSession.draft}
						class="chat-input"
						onkeydown={handleComposerKeydown}
						placeholder="Type a question here..."
						rows="1"
						spellcheck="true"
					></textarea>
				</div>

				<div class="chat-actions">
					<button class="brand-button chat-send" disabled={sendDisabled} type="submit">
						{chatSession.isResponding ? 'Thinking...' : 'Send'}
					</button>
				</div>
			</form>
		</div>
</main>

<style>

	.chat-kicker,
	.chat-empty-kicker,
	.message-label,
	.message-time{
		font-family: var(--font-mono), monospace;
		letter-spacing: 0.18em;
		text-transform: uppercase;
	}

	.chat-kicker,
	.chat-empty-kicker {
		font-size: 0.76rem;
		font-weight: 600;
		color: var(--ks-action-primary);
	}

	.chat-thread {
		display: flex;
		flex-direction: column;
		min-height: clamp(24rem, 58vh, 38rem);
		max-height: 38rem;
		overflow-y: auto;
		padding: 1rem;
		scroll-behavior: smooth;
	}

	@media (min-width: 640px) {
		.chat-thread {
			padding: 1.45rem;
		}
	}

	.chat-thread::-webkit-scrollbar {
		width: 0.7rem;
	}

	.chat-thread::-webkit-scrollbar-thumb {
		border: 2px solid transparent;
		border-radius: 9999px;
		background: rgb(168 103 0 / 0.28);
		background-clip: padding-box;
	}

	.chat-empty {
		display: grid;
		min-height: 100%;
		align-content: center;
		justify-items: center;
		gap: 0.8rem;
		border: 1px dashed rgb(196 154 60 / 0.4);
		border-radius: 1.6rem;
		background: linear-gradient(135deg, rgb(255 250 240 / 0.84), rgb(245 237 217 / 0.78));
		padding: 2rem 1.35rem;
		text-align: center;
	}

	.chat-empty h3 {
		max-width: 29rem;
		font-family: var(--font-crimson-text), serif;
		font-size: clamp(1.8rem, 3vw, 2.45rem);
		line-height: 1.08;
		font-weight: 700;
		color: var(--ks-text-heading);
	}

	.chat-empty p:last-child {
		max-width: 34rem;
		font-family: var(--font-ivy-text), serif;
		font-size: 1.05rem;
		line-height: 1.68;
		color: var(--ks-text-muted);
	}

	.message-row {
		display: flex;
		margin-bottom: 0.95rem;
	}

	.message-row--assistant {
		justify-content: flex-start;
	}

	.message-row--user {
		justify-content: flex-end;
	}

	.message-bubble {
		max-width: min(42rem, 92%);
		border-radius: 1.45rem;
		padding: 1rem 1.05rem 0.85rem;
		box-shadow: 0 22px 34px -30px var(--ks-shadow-strong);
	}

	@media (min-width: 640px) {
		.message-bubble {
			padding: 1.05rem 1.15rem 0.9rem;
		}
	}

	.message-bubble--assistant {
		border: 1px solid rgb(196 154 60 / 0.34);
		border-bottom-left-radius: 0.42rem;
		background: rgb(255 251 235 / 0.84);
		color: var(--ks-text-body);
	}

	.message-bubble--user {
		border: 1px solid rgb(132 85 34 / 0.24);
		border-bottom-right-radius: 0.42rem;
		background: linear-gradient(145deg, rgb(168 103 0 / 0.96), rgb(132 85 34 / 0.96));
		color: var(--ks-text-on-brand);
	}

	.message-label {
		font-size: 0.71rem;
		font-weight: 700;
		opacity: 0.78;
	}

	.message-text {
		margin-top: 0.55rem;
		font-family: var(--font-ivy-text), serif;
		font-size: 1.06rem;
		line-height: 1.64;
		white-space: pre-wrap;
		overflow-wrap: anywhere;
	}

	.message-time {
		margin-top: 0.72rem;
		font-size: 0.72rem;
		opacity: 0.66;
	}

	.typing-bubble {
		min-width: 8rem;
	}

	.typing-dots {
		display: flex;
		align-items: center;
		gap: 0.35rem;
		margin-top: 0.62rem;
	}

	.typing-dots span {
		width: 0.48rem;
		height: 0.48rem;
		border-radius: 9999px;
		background: rgb(132 85 34 / 0.62);
		animation: chat-typing 1s infinite ease-in-out;
	}

	.typing-dots span:nth-child(2) {
		animation-delay: 0.16s;
	}

	.typing-dots span:nth-child(3) {
		animation-delay: 0.32s;
	}

	@keyframes chat-typing {
		0%,
		80%,
		100% {
			transform: translateY(0);
			opacity: 0.35;
		}

		40% {
			transform: translateY(-3px);
			opacity: 1;
		}
	}

	.chat-composer {
		display: grid;
		gap: 1rem;
		padding: 1rem;
	}

	@media (min-width: 768px) {
		.chat-composer {
			grid-template-columns: minmax(0, 1fr) auto;
			align-items: flex-end;
			padding: 1.15rem;
		}
	}

	.chat-input-wrap {
		display: flex;
		min-height: 4rem;
		border: 1px solid rgb(196 154 60 / 0.34);
		border-radius: 1.35rem;
		background: rgb(255 255 255 / 0.78);
		padding: 0.25rem 0.4rem 0.25rem 0.85rem;
		box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.64);
	}

	.chat-input {
		width: 100%;
		min-height: 3.2rem;
		max-height: 10rem;
		border: 0;
		background: transparent;
		padding: 0.78rem 0.45rem 0.78rem 0;
		font-family: var(--font-ivy-text), serif;
		font-size: 1.05rem;
		line-height: 1.58;
		color: var(--ks-text-body);
		resize: none;
	}

	.chat-input:focus {
		outline: none;
		box-shadow: none;
	}

	.chat-input::placeholder {
		color: rgb(139 115 85 / 0.8);
	}

	.chat-actions {
		display: flex;
		flex-direction: column;
		gap: 0.65rem;
	}

	@media (min-width: 768px) {
		.chat-actions {
			min-width: 10rem;
			align-items: flex-end;
			justify-content: space-between;
		}
	}
	.chat-send {
		min-width: 9rem;
		border-radius: 9999px;
		padding: 0.95rem 1.55rem;
		font-family: var(--font-lora), serif;
		font-size: 1.02rem;
		font-weight: 700;
	}

	.chat-send:disabled {
		cursor: not-allowed;
		transform: none;
		background: rgb(132 85 34 / 0.48);
		box-shadow: none;
	}

	@media (max-width: 639px) {
		.message-bubble {
			max-width: 100%;
		}
	}
</style>
