type HeadingLevel = 1 | 2 | 3;

type TextParseClasses = {
	root: string;
	paragraph: string;
	firstParagraph: string;
	heading1: string;
	heading2: string;
	heading3: string;
	bold: string;
	italic: string;
	blockquote: string;
	blockquoteText: string;
	blockquoteAuthor: string;
};

export const textParseClasses: TextParseClasses = {
	root: 'space-y-5 font-lora text-black transition-[font-size,line-height] duration-200',
	paragraph: 'text-justify leading-relaxed',
	firstParagraph: 'story-paragraph',
	heading1: 'block font-lora text-3xl font-semibold text-amber-700 md:text-4xl',
	heading2: 'block font-lora text-2xl font-semibold text-amber-700 md:text-3xl',
	heading3: 'block font-lora text-xl font-semibold text-amber-700 md:text-2xl',
	bold: 'font-bold',
	italic: 'italic',
	blockquote: 'px-5 text-lg',
	blockquoteText: 'block text-center italic font-bold text-amber-500',
	blockquoteAuthor: 'block text-amber-500 text-center italic opacity-60 md:pr-[calc(var(--page-padding)*2)]',
};

const ESCAPED_ASTERISK_PLACEHOLDER = '__TEXT_PARSE_ESCAPED_ASTERISK__';
const QUOTE_PATTERN = />([\s\S]+?)\s*-{2,3}\s*([\s\S]+?)</g;

function escapeHtml(value: string): string {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&#39;');
}

function renderInlineMarkup(content: string): string {
	const escapedContent = escapeHtml(content).replace(/\\\*/g, ESCAPED_ASTERISK_PLACEHOLDER);
	const boldText = escapedContent.replace(/(?<!\\)\*\*(.+?)(?<!\\)\*\*/g, (_, text: string) => {
		return `<span class="${textParseClasses.bold}">${text}</span>`;
	});

	const italicText = boldText.replace(/(?<!\\)\*(.+?)(?<!\\)\*/g, (_, text: string) => {
		return `<span class="${textParseClasses.italic}">${text}</span>`;
	});

	return italicText.replaceAll(ESCAPED_ASTERISK_PLACEHOLDER, '*');
}

function renderHeading(level: HeadingLevel, content: string): string {
	const levelClass =
		level === 1
			? textParseClasses.heading1
			: level === 2
				? textParseClasses.heading2
				: textParseClasses.heading3;

	return `<span role="heading" aria-level="${level}" class="${levelClass}">${renderInlineMarkup(content.trim())}</span>`;
}

function renderBlockquote(quote: string, author: string): string {
	return `<div class="${textParseClasses.blockquote}"><span class="${textParseClasses.blockquoteText}">${renderInlineMarkup(quote.trim())}</span><span class="${textParseClasses.blockquoteAuthor}">— ${renderInlineMarkup(author.trim())}</span></div>`;
}

function renderParagraph(content: string, isFirstParagraph: boolean): string {
	const paragraphClass = isFirstParagraph
		? `${textParseClasses.paragraph} ${textParseClasses.firstParagraph}`
		: textParseClasses.paragraph;

	return `<p class="${paragraphClass}">${renderInlineMarkup(content.trim())}</p>`;
}

export function parseTextMarkup(content: string): string {
	const normalizedContent = content.replace(/\r\n?/g, '\n').trim();

	if (!normalizedContent) {
		return '';
	}

	const renderedBlocks: string[] = [];
	let hasRenderedParagraph = false;

	const renderTextSegment = (segment: string) => {
		let lastIndex = 0;

		for (const match of segment.matchAll(QUOTE_PATTERN)) {
			const quoteStartIndex = match.index ?? 0;
			const paragraphBeforeQuote = segment.slice(lastIndex, quoteStartIndex).trim();

			if (paragraphBeforeQuote) {
				renderedBlocks.push(renderParagraph(paragraphBeforeQuote, !hasRenderedParagraph));
				hasRenderedParagraph = true;
			}

			renderedBlocks.push(renderBlockquote(match[1], match[2]));
			lastIndex = quoteStartIndex + match[0].length;
		}

		const paragraphAfterQuote = segment.slice(lastIndex).trim();

		if (paragraphAfterQuote) {
			renderedBlocks.push(renderParagraph(paragraphAfterQuote, !hasRenderedParagraph));
			hasRenderedParagraph = true;
		}
	};

	for (const block of normalizedContent.split(/\n\s*\n+/)) {
		const lines = block.split('\n');
		const paragraphLines: string[] = [];

		const flushParagraphLines = () => {
			if (paragraphLines.length === 0) {
				return;
			}

			renderTextSegment(paragraphLines.map((line) => line.trim()).join(' '));
			paragraphLines.length = 0;
		};

		for (const rawLine of lines) {
			const line = rawLine.trim();

			if (!line) {
				continue;
			}

			const headingMatch = line.match(/^(#{1,3})\s*(.+)$/);

			if (headingMatch) {
				flushParagraphLines();
				renderedBlocks.push(renderHeading(headingMatch[1].length as HeadingLevel, headingMatch[2]));
				continue;
			}

			paragraphLines.push(line);
		}

		flushParagraphLines();
	}

	return renderedBlocks.join('');
}
