<script lang="ts">
	import DateMark from '../DateMark.svelte';

	let {
		date,
		category,
		highlight_right = '',
		title,
		subtitle_1,
		subtitle_2,
		overview,
		role = [],
		key_deliverables = []
	}: WorkExperienceCardProps = $props();

	let normalizedRoles = $derived(role.filter((item) => item.trim().length > 0));
	let normalizedDeliverables = $derived(key_deliverables.filter((item) => item.trim().length > 0));
</script>

<div id="card-container" class="card-container">
	<DateMark {date} />

	<article class="card-body">
		<div class="card-highlight">
			<div class="rounded-full border bg-[#f9d8b0] px-2 py-1">{category}</div>
			<h1>{highlight_right}</h1>
		</div>

		<div class="flex flex-col gap-0.5">
			<h1 id="title" class="card-title text-amber-800">{title}</h1>
			<div id="subtitle" class="card-subtitle">
				<span id="s1" class="font-medium text-amber-500">{subtitle_1}</span>
				<span id="bullet" class="text-amber-700">•</span>
				<span id="s2" class="text-amber-700">{subtitle_2}</span>
			</div>
			<div class=" flex flex-wrap gap-2">
				{#each normalizedRoles as item, index (`${item}-${index}`)}
					<span class="rounded-full border px-3 py-1 font-lora text-sm md:text-base">{item}</span>
				{/each}
			</div>
		</div>

		<div class="research-card-overview">
			<div>
				<p class="research-card-overview-title">Scope of work</p>
				<p class="research-card-overview-description">
					{overview}
				</p>
			</div>
		</div>

		<div class="flex flex-col gap-1 space-y-4">
			<section class="research-card-overview" aria-labelledby="work-card-deliverables">
				<div class="work-card-panel-header pb-2">
					<p id="work-card-deliverables" class="research-card-overview-title">Key deliverables</p>
					<ol class="work-card-deliverables">
						{#each normalizedDeliverables as deliverable, index (`${deliverable}-${index}`)}
							<li class="work-card-deliverable rounded-2xl border-2 border-amber-700/40 text-sm md:text-base">
								<p>{deliverable}</p>
							</li>
						{/each}
					</ol>
				</div>
			</section>
		</div>
	</article>
</div>

<style>
	.work-card-panel-header {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 0.65rem;
	}
	.work-card-deliverables {
		padding: 0;
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 0.55rem;
	}

	.work-card-deliverable {
		display: grid;
		grid-template-columns: auto minmax(0, 1fr);
		align-items: flex-start;
		gap: 0.85rem;
		background: rgb(255 251 235 / 0.72);
		padding: 0.45rem 0.95rem;
		font-family: var(--font-lora), serif;
		line-height: 1.55;
		color: var(--ks-text-muted);
	}
</style>
