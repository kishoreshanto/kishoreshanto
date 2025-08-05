export const RESEARCH_TYPES: { [key: string]: string } = {
	independent: 'Independent Study',
	q1_journal: 'Q1 Journal Publication',
	project: 'Project',
	preprint: 'Preprint',
	group_research: 'Group Research',
	q2_journal: 'Q2 Journal Publication',
	q3_journal: 'Q3 Journal Publication',
	q4_journal: 'Q4 Journal Publication',
	awarded: 'Awarded Research',
	conference_publication: 'Conference Publication',
	technical_report: 'Technical Report',
	other: 'Other'
};

// Make it globally available
declare global {
	interface Window {
		RESEARCH_TYPES: { [key: string]: string };
	}
}

// Assign to global scope (browser environment)
if (typeof window !== 'undefined') {
	window.RESEARCH_TYPES = RESEARCH_TYPES;
}
