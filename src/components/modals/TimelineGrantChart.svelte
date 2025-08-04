<script lang="ts">
	import { onMount } from 'svelte';
	import timelineData from '$lib/timeline_data.json';

	// Define types
	interface Project {
		title: string;
		start_date: string;
		end_date: string;
		color: string;
	}

	interface TimelineRow {
		projects: Array<{
			project: Project;
			startMonth: number;
			startYear: number;
			endMonth: number;
			endYear: number;
			left: number;
			width: number;
		}>;
	}

	// Reactive variables
	let chartContainer: HTMLElement;
	let projects: Project[] = timelineData;
	let timelineRows = $state<TimelineRow[]>([]);

	// Generate years from 2023 to current year
	const currentYear = new Date().getFullYear();
	const startYear = 2023;
	const years = Array.from({ length: currentYear - startYear + 1 }, (_, i) => startYear + i);

	// Month names for display
	const monthNames = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	];
	const quarterNames = ['Q1', 'Q2', 'Q3', 'Q4'];

	// Calculate total months from start year
	const totalMonths = (currentYear - startYear + 1) * 12;
	const monthWidth = 80; // Width of each month in pixels

	function getMonthIndex(year: number, month: number): number {
		return (year - startYear) * 12 + (month - 1);
	}

	function parseDate(dateString: string) {
		const date = new Date(dateString);
		return {
			year: date.getFullYear(),
			month: date.getMonth() + 1
		};
	}

	function calculateProjectPosition(project: Project) {
		const startDate = parseDate(project.start_date);
		const endDate = parseDate(project.end_date);

		const startMonthIndex = getMonthIndex(startDate.year, startDate.month);
		const endMonthIndex = getMonthIndex(endDate.year, endDate.month);

		return {
			project,
			startMonth: startDate.month,
			startYear: startDate.year,
			endMonth: endDate.month,
			endYear: endDate.year,
			left: startMonthIndex * monthWidth,
			width: (endMonthIndex - startMonthIndex + 1) * monthWidth - 4 // -4 for margin
		};
	}

	function arrangeProjectsInRows() {
		const sortedProjects = projects.map(calculateProjectPosition).sort((a, b) => a.left - b.left);

		const rows: TimelineRow[] = [];

		for (const projectData of sortedProjects) {
			let placed = false;

			// Try to place in existing rows
			for (const row of rows) {
				const canPlace = row.projects.every(
					(existing) =>
						projectData.left >= existing.left + existing.width + 8 ||
						projectData.left + projectData.width + 8 <= existing.left
				);

				if (canPlace) {
					row.projects.push(projectData);
					placed = true;
					break;
				}
			}

			// Create new row if couldn't place in existing ones
			if (!placed) {
				rows.push({ projects: [projectData] });
			}
		}

		timelineRows = rows;
	}

	onMount(() => {
		arrangeProjectsInRows();

		// Scroll to the right (current time) on init
		if (chartContainer) {
			setTimeout(() => {
				chartContainer.scrollLeft = chartContainer.scrollWidth - chartContainer.clientWidth;
			}, 100);
		}
	});
</script>

<div
	class="timeline-chart-container bg-white dark:bg-gray-900 p-6 rounded-lg max-h-[80vh] overflow-hidden"
>
	<!-- Timeline Chart -->
	<div class="timeline-chart mb-8">
		<div
			bind:this={chartContainer}
			class="timeline-scroll overflow-x-auto overflow-y-hidden border border-gray-200 dark:border-gray-700 rounded-lg"
			style="height: 400px;"
		>
			<div
				class="timeline-content relative"
				style="width: {totalMonths * monthWidth}px; height: 100%;"
			>
				<!-- Header: Years -->
				<div class="timeline-header bg-gray-50 dark:bg-gray-800 sticky top-0 z-20">
					<!-- Years Row -->
					<div class="years-row h-12 flex border-b-2 border-gray-900 dark:border-gray-100">
						{#each years as year}
							<div
								class="year-cell flex items-center justify-center font-bold text-lg border-r-2 border-gray-900 dark:border-gray-100 bg-gray-100 dark:bg-gray-700"
								style="width: {12 * monthWidth}px;"
							>
								{year}
							</div>
						{/each}
					</div>

					<!-- Quarters Row -->
					<div class="quarters-row h-10 flex border-b border-gray-400 dark:border-gray-500">
						{#each years as year}
							{#each quarterNames as quarter}
								<div
									class="quarter-cell flex items-center justify-center font-semibold border-r border-dashed border-gray-400 dark:border-gray-500 bg-gray-50 dark:bg-gray-800"
									style="width: {3 * monthWidth}px;"
								>
									{quarter}
								</div>
							{/each}
						{/each}
					</div>

					<!-- Months Row -->
					<div class="months-row h-8 flex border-b border-gray-300 dark:border-gray-600">
						{#each years as year}
							{#each monthNames as month}
								<div
									class="month-cell flex items-center justify-center text-sm border-r border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900"
									style="width: {monthWidth}px;"
								>
									{month}
								</div>
							{/each}
						{/each}
					</div>
				</div>

				<!-- Project Bars -->
				<div class="projects-area relative" style="height: calc(100% - 120px); padding-top: 20px;">
					{#each timelineRows as row, rowIndex}
						<div
							class="project-row absolute"
							style="top: {rowIndex * 50 + 10}px; height: 40px; width: 100%;"
						>
							{#each row.projects as projectData}
								<div
									class="project-bar absolute rounded cursor-pointer shadow-md hover:shadow-lg transition-all duration-200 flex items-center px-2 text-white text-sm font-medium"
									style="
										left: {projectData.left + 2}px; 
										width: {projectData.width}px; 
										height: 30px; 
										background-color: {projectData.project.color};
										top: 5px;
									"
									title="{projectData.project
										.title} ({projectData.startMonth}/{projectData.startYear} - {projectData.endMonth}/{projectData.endYear})"
								>
									<span class="truncate">{projectData.project.title}</span>
								</div>
							{/each}
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>

	<!-- Legend -->
	<div class="legend">
		<h3 class="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Project Legend</h3>
		<div
			class="legend-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-48 overflow-y-auto"
		>
			{#each projects as project}
				<div
					class="legend-item flex items-center gap-3 p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-800"
				>
					<div
						class="legend-color w-4 h-4 rounded flex-shrink-0"
						style="background-color: {project.color};"
					></div>
					<span
						class="legend-text text-sm text-gray-800 dark:text-gray-200 truncate"
						title={project.title}
					>
						{project.title}
					</span>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.timeline-scroll::-webkit-scrollbar {
		height: 8px;
	}

	.timeline-scroll::-webkit-scrollbar-track {
		background: #f1f1f1;
		border-radius: 4px;
	}

	.timeline-scroll::-webkit-scrollbar-thumb {
		background: #888;
		border-radius: 4px;
	}

	.timeline-scroll::-webkit-scrollbar-thumb:hover {
		background: #555;
	}

	.project-bar:hover {
		transform: translateY(-2px);
		z-index: 10;
	}
</style>
