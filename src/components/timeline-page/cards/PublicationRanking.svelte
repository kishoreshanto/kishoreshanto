<script lang="ts">
	let { rank }: { rank: string } = $props();

	let textColor = $state('text-emerald-600');
	let textTitleColor = $state('text-emerald-800');
	let title = $state('Q1 Quartile Journal');
	let description = $state('Top-tier academic publication');

	if (rank === 'Q1') {
		textColor = 'text-emerald-600';
		textTitleColor = 'text-emerald-800';
		title = 'Q1 Quartile Journal';
		description = 'Top-tier academic publication';
	} else if (rank === 'Q2') {
		textColor = 'text-blue-600';
		textTitleColor = 'text-blue-800';
		title = 'Q2 Quartile Journal';
		description = 'Strong and recognized academic publication';
	} else if (rank === 'Q3') {
		textColor = 'text-yellow-600';
		textTitleColor = 'text-yellow-800';
		title = 'Q3 Quartile Journal';
		description = 'Established venue with moderate impact';
	} else if (rank === 'Q4') {
		textColor = 'text-gray-600';
		textTitleColor = 'text-gray-800';
		title = 'Q4 Quartile Journal';
		description = 'Emerging publication venue';
	}
</script>

<svg class="h-5 w-5 {textColor}" fill="currentColor" viewBox="0 0 20 20">
	<path
		fill-rule="evenodd"
		d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
		clip-rule="evenodd"
	/>
</svg>

<div class="research-card-rank-description">
	<p class=" font-semibold {textTitleColor}">{title}</p>
	<p class=" {textColor}">{description}</p>
</div>
