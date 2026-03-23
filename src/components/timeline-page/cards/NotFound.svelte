<script lang="ts">
	import DateMark from '../DateMark.svelte';

	let date: string = 'OPPS...';
</script>

<div id="card-container" class="card-container">
	<DateMark {date} />

	<div class="card-body">
		<!-- Highlight -->
		<div class="card-highlight">
			<div class="w-fit rounded-full border bg-[#f9d8b0] px-2 py-1">Hmm</div>
			<h1 class="text-end">Hmm</h1>
		</div>

		<!-- Card Header -->
		<div class="">
			<h1 id="title" class="card-title text-amber-800">Hmm</h1>
			<div id="subtitle" class="card-subtitle">
				<span id="s1" class="font-medium text-amber-500">Hmm</span>
				<span id="bullet" class="text-amber-700">•</span>
				<span id="s2" class="text-amber-700">Hmm</span>
			</div>
		</div>

		<!-- Card Overview -->

		<div class="research-card-overview">
			<div>
				<p class="research-card-overview-title text-amber-700">Overview</p>
				<p class="research-card-overview-description">Hmm</p>
			</div>
		</div>
	</div>
</div>
