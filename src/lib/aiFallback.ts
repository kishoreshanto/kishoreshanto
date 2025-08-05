// --- REFACTORED KNOWLEDGE BASE AND NEW OFFLINE SEARCH ENGINE ---

interface KnowledgeItem {
	source: string;
	text: string;
	keywords?: Set<string>;
}

const PERSONAL_INFO = {
	name: 'Kishore Shanto',
	legal_name: 'Shanta Biswas',
	title: 'Researcher & Developer',
	location: 'Dhaka, Bangladesh',
	email: 'tinykishore@gmail.com',
	interests: [
		'Deep Learning',
		'Computer Vision',
		'Autoregressive and Large Language Models',
		'Multi-agent CoT Models',
		'Biomedical Signal Processing'
	],
	languages: ['English (CEFR C1)', 'French (Beginner)', 'Bengali (Native)'],
	research_areas: [
		'EEG and Brain-Computer Interfaces',
		'Voice Activity Detection',
		'Garment Defect Detection using Computer Vision',
		'Password Security Research',
		'Machine Learning with GBDT and SVM'
	],
	education: 'University UIU - Computer Science & Software Engineering',
	github: 'https://www.github.com/tinykishore/',
	linkedin: 'https://www.linkedin.com/in/tinykishore',
	orcid: 'https://orcid.org/0009-0009-1147-0095'
};

const KNOWLEDGE_BASE_RAW = {
	personal: {
		'who are you': `I'm Kishore Shanto (legal name: Shanta Biswas), a researcher and developer based in Dhaka, Bangladesh. I'm passionate about deep learning, computer vision, and biomedical signal processing.`,
		'what do you do': `I'm a researcher and developer specializing in machine learning and AI. My work focuses on deep learning, computer vision, large language models, and biomedical signal processing.`,
		'where are you from': `I'm from Bangladesh, currently based in Dhaka. I speak Bengali natively, English at CEFR C1 level, and I'm learning French.`,
		education: `I studied Computer Science and Software Engineering at University UIU (United International University).`,
		about: `I'm Kishore Shanto, a passionate researcher and developer from Bangladesh specializing in AI, machine learning, and computer vision. I work on cutting-edge projects involving deep learning, biomedical signal processing, and brain-computer interfaces.`
	},
	research: {
		research: `My research spans several exciting areas: EEG and Brain-Computer Interfaces for upper limb motor movement, Voice Activity Detection using machine learning, Garment Defect Detection with computer vision, Password Security research, and Machine Learning implementations with GBDT and SVM algorithms.`,
		eeg: `I work on EEG (Electroencephalogram) research focusing on brain-computer interfaces, particularly for upper limb motor movement classification using deep learning techniques.`,
		'computer vision': `My computer vision work includes garment defect detection for textile manufacturing quality control, using advanced image processing and deep learning methods.`,
		'machine learning': `I specialize in various machine learning approaches including deep learning, GBDT (Gradient Boosting Decision Trees), SVM (Support Vector Machines), and autoregressive language models for different applications.`,
		projects: `Some of my notable projects include EEG-based brain-computer interfaces, voice activity detection systems, garment defect detection using computer vision, password security analysis, and various machine learning implementations.`
	},
	technical: {
		skills: `My technical skills include deep learning, computer vision, signal processing, machine learning algorithms, and full-stack development.`,
		technologies: `I work with Python, TensorFlow, PyTorch, scikit-learn, OpenCV, and various other machine learning and web development frameworks.`,
		programming: `I'm proficient in Python for machine learning and data science, JavaScript/TypeScript for web development, and have experience with various other programming languages and frameworks.`
	},
	contact: {
		contact: `You can reach me through several channels: Email at tinykishore@gmail.com, GitHub at github.com/tinykishore, LinkedIn at linkedin.com/in/tinykishore, or check my ORCID profile at orcid.org/0009-0009-1147-0095.`,
		email: `You can email me at tinykishore@gmail.com for any inquiries or collaboration opportunities.`,
		github: `Check out my GitHub profile at github.com/tinykishore to see my open-source projects and contributions.`,
		linkedin: `Connect with me on LinkedIn at linkedin.com/in/tinykishore for professional networking.`
	}
};

// Flatten the nested KNOWLEDGE_BASE_RAW object into an array for the search engine
const KNOWLEDGE_BASE: KnowledgeItem[] = Object.entries(KNOWLEDGE_BASE_RAW).flatMap(
	([category, entries]) =>
		Object.entries(entries).map(([key, text]) => ({
			source: `${category}:${key}`,
			text
		}))
);

// Add items that were previously generated dynamically from PERSONAL_INFO
KNOWLEDGE_BASE.push({
	source: 'personal:interests',
	text: `I'm passionate about ${PERSONAL_INFO.interests.join(', ')}. These areas fascinate me because they represent the cutting edge of AI and have tremendous potential to solve real-world problems.`
});
KNOWLEDGE_BASE.push({
	source: 'personal:languages',
	text: `I speak ${PERSONAL_INFO.languages.join(', ')}. This multilingual ability helps me collaborate with international research teams and access diverse academic resources.`
});

const STOP_WORDS = new Set([
	'i',
	'me',
	'my',
	'you',
	'your',
	'what',
	'which',
	'who',
	'is',
	'are',
	'a',
	'an',
	'the',
	'and',
	'do',
	'of',
	'for',
	'in',
	'on',
	'about',
	'tell',
	'that',
	'this',
	'it',
	'to',
	'with',
	'at',
	'by',
	'from',
	'as',
	'be',
	'have',
	'has',
	'had',
	'can',
	'will',
	'would',
	'could',
	'should'
]);

/**
 * A simple offline search engine using keyword scoring.
 */
class OfflineSearchEngine {
	private processedKnowledge: KnowledgeItem[] = [];
	private stopWords = STOP_WORDS;

	constructor(knowledge: KnowledgeItem[]) {
		this.processedKnowledge = knowledge.map((item) => ({
			...item,
			keywords: this._processText(item.text)
		}));
	}

	/**
	 * Process text into a set of keywords by normalizing, tokenizing, and filtering
	 * @param text - The text to process into keywords
	 * @returns A set of processed keywords excluding stop words and single characters
	 */
	private _processText(text: string): Set<string> {
		return new Set(
			text
				.toLowerCase()
				.replace(/[^\w\s]/g, ' ') // Replace punctuation with spaces
				.split(/\s+/)
				.filter((token) => token.length > 1 && !this.stopWords.has(token)) // Filter tokens with length > 1
		);
	}

	/**
	 * Search the knowledge base for the best matching response to a query
	 * @param query - The search query string
	 * @param scoreThreshold - Minimum score threshold for returning a match (default: 1)
	 * @returns The best matching text response or a default fallback message
	 */
	public search(query: string, scoreThreshold = 1): string {
		const queryKeywords = this._processText(query);
		let bestMatch = { score: 0, text: '', source: '' };

		// Debug: log query keywords in development
		if (import.meta.env.DEV) {
			console.log('Search query keywords:', Array.from(queryKeywords));
		}

		for (const item of this.processedKnowledge) {
			let currentScore = 0;

			// Score based on exact keyword matches
			for (const keyword of queryKeywords) {
				if (item.keywords?.has(keyword)) {
					currentScore += 2; // Higher weight for exact matches
				}

				// Also check for partial matches in the original text (for compound words, etc.)
				if (item.text.toLowerCase().includes(keyword)) {
					currentScore += 1;
				}
			}

			// Bonus points for source relevance
			const queryText = query.toLowerCase();
			if (
				item.source.includes('personal') &&
				(queryText.includes('who') || queryText.includes('about'))
			) {
				currentScore += 1;
			}
			if (
				item.source.includes('research') &&
				(queryText.includes('research') || queryText.includes('work'))
			) {
				currentScore += 1;
			}
			if (
				item.source.includes('contact') &&
				(queryText.includes('contact') || queryText.includes('reach'))
			) {
				currentScore += 1;
			}

			if (currentScore > bestMatch.score) {
				bestMatch = { score: currentScore, text: item.text, source: item.source };
			}
		}

		// Debug: log best match in development
		if (import.meta.env.DEV) {
			console.log('Best match:', { score: bestMatch.score, source: bestMatch.source });
		}

		if (bestMatch.score >= scoreThreshold) {
			return bestMatch.text;
		}

		// Default response for unmatched questions
		return `That's an interesting question! While I don't have a specific answer prepared for that, I can tell you that I'm Kishore Shanto, a researcher and developer working on deep learning and computer vision. Feel free to ask about any of my projects or research areas.`;
	}
}

// Create a single instance of the engine to use for all fallback requests
const offlineEngine = new OfflineSearchEngine(KNOWLEDGE_BASE);

/**
 * Fallback response generator using the new OfflineSearchEngine.
 */
export function generateFallbackResponse(question: string): string {
	if (!question || question.trim().length === 0) {
		return "Hello! I'm Kishore Shanto. Feel free to ask me about my research, projects, or background!";
	}

	// The old if/else chain is now replaced with a single, intelligent call.
	return offlineEngine.search(question.trim());
}
