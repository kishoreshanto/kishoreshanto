<script lang="ts">
	import '$lib/constants';

	interface Props {
		header_title: string;
		header_subtitle: string;
		research_type?: keyof typeof RESEARCH_TYPES;
	}

	let { header_title, header_subtitle, research_type }: Props = $props();
</script>

<div class="flex items-center justify-between">
	{#if research_type == RESEARCH_TYPES.independent}
		<div
			class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300"
		>
			<svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
				<path
					fill-rule="evenodd"
					d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
					clip-rule="evenodd"
				/>
			</svg>
			{header_title}
		</div>
	{:else if research_type == RESEARCH_TYPES.q1_publication}
		<div
			class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
		>
			<svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
				<path
					fill-rule="evenodd"
					d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
					clip-rule="evenodd"
				/>
			</svg>
			{header_title}
		</div>
	{:else if research_type == RESEARCH_TYPES.project}
		<div
			class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-zinc-300 text-zinc-800 dark:bg-emerald-900/30 dark:text-emerald-300"
		>
			<svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
				<path
					fill-rule="evenodd"
					d="M3 4a2 2 0 012-2h10a2 2 0 012 2v1a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 7a1 1 0 011-1h12a1 1 0 011 1v6a2 2 0 01-2 2H5a2 2 0 01-2-2V7zm13 3a1 1 0 11-2 0 1 1 0 012 0z"
					clip-rule="evenodd"
				/>
			</svg>
			Team project
		</div>
	{:else if research_type == RESEARCH_TYPES.preprint}
		<div
			class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300"
		>
			<svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
				<path
					fill-rule="evenodd"
					d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
					clip-rule="evenodd"
				/>
			</svg>
			{header_title}
		</div>
	{:else if research_type == RESEARCH_TYPES.group_research}
		<div
			class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
		>
			<svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
				<path
					d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
				/>
			</svg>
			{header_title}
		</div>
	{:else if research_type == RESEARCH_TYPES.q2_journal}
		<div
			class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
		>
			<svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
				<path
					fill-rule="evenodd"
					d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			{header_title}
		</div>
	{:else if research_type == RESEARCH_TYPES.q3_journal}
		<div
			class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
		>
			<svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
				<path
					fill-rule="evenodd"
					d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			{header_title}
		</div>
	{:else if research_type == RESEARCH_TYPES.q4_journal}
		<div
			class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-800 dark:bg-slate-900/30 dark:text-slate-300"
		>
			<svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
				<path
					fill-rule="evenodd"
					d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			{header_title}
		</div>
	{:else if research_type == RESEARCH_TYPES.awarded}
		<div
			class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
		>
			<svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
				<path
					fill-rule="evenodd"
					d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732L14.146 12.8l-1.179 4.456a1 1 0 01-1.856.048L10 14l-1.111 3.304a1 1 0 01-1.856-.048L5.854 12.8 2.5 10.866a1 1 0 010-1.732L5.854 7.2l1.179-4.456A1 1 0 018 2.5L10 5l2-2.5A1 1 0 0112 2z"
					clip-rule="evenodd"
				/>
			</svg>
			{header_title}
		</div>
	{:else if research_type == RESEARCH_TYPES.conference_publication}
		<div
			class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300"
		>
			<svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
				<path
					fill-rule="evenodd"
					d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
					clip-rule="evenodd"
				/>
			</svg>
			{header_title}
		</div>
	{:else if research_type == RESEARCH_TYPES.other}
		<span class="mr-1">Other</span>
	{/if}

	<div class="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
		{header_subtitle}
	</div>
</div>
