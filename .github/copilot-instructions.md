# Portfolio Copilot Instructions

## Architecture Overview

This is a **Svelte 5 portfolio application** using **runes** for reactivity. The architecture follows a card-based timeline design where each project/research item is displayed as an interactive card with an optional detailed modal.

## Core Components & Patterns

### Svelte 5 Runes (Essential)

- Use `$props()` instead of `export let` for component props
- Use `$state()` for reactive variables (replaces `let` for reactive state)
- Use `$derived()` for computed values (replaces `$:` reactive statements)
- Use `{@render children()}` for slot content with snippets
- All new components MUST use runes - see `src/components/Card.svelte` as reference

### Project Card System

- Cards defined in `src/components/Cards/` - each represents a project/research
- Modals in `src/components/modals/` provide detailed views
- Data driven by `src/lib/data_card.json` with component/modal mapping
- Cards use the base `Card.svelte` wrapper with snippet content

### Data Architecture

- `src/lib/data_card.json`: Project definitions with component mappings
- `src/lib/data_en.json`: Global app configuration and personal data
- Component/modal mapping in `+page.svelte` connects JSON to actual components
- Search/filtering based on project `keywords` field

### AI Integration

- `src/lib/aiService.ts`: Hugging Face API integration with caching
- Toggle between search mode and AI question mode via `isAskMode` store
- Fallback responses in `src/lib/aiFallback.ts` when API unavailable
- System prompt in `src/lib/system-prompt.md` for AI context

## Key Development Patterns

### Component Structure

```typescript
// Always use this Svelte 5 pattern:
interface Props {
	someProp: string;
	optionalProp?: () => void;
}
let { someProp, optionalProp }: Props = $props();
```

### Research Card Pattern

- Header component with research type badges (`src/components/Cards/UtilComponent/Header.svelte`)
- Research types defined in `src/lib/constants.ts`
- Status indicators and tags for research progress
- External links with `onclick={(e) => e.stopPropagation()` to prevent modal opening

### Modal Implementation

- All modals use `$state()` for expand/collapse sections
- Svelte transitions with `slide` and `quintOut` easing
- Consistent header structure with research type badges

### State Management

- Svelte stores in `src/lib/appStore.ts` for global state
- `isSimplifiedView` toggles between detailed/simplified layouts
- `isAskMode` switches search to AI question interface
- Search debouncing implemented with reactive derived stores

## Build & Development

### Essential Commands

- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run check` - TypeScript/Svelte validation
- `npm run format` - Prettier formatting

### Configuration

- **Svelte 5 runes enabled** in `svelte.config.js`
- TailwindCSS 4.0 with PostCSS
- CSP headers configured for Hugging Face API
- Vite with compression and bundle analysis

### Adding New Projects

1. Add entry to `src/lib/data_card.json` with unique `id` and `component` name
2. Create card component in `src/components/Cards/` using Card wrapper
3. Optionally create modal in `src/components/modals/`
4. Add component/modal imports and mappings in `+page.svelte`

### Performance Notes

- Bundle analysis available via `npm run build:analyze`
- AI responses cached in-memory and localStorage (30min TTL)
- Compression enabled for production builds
- Vercel Speed Insights integrated

## Critical Files

- `src/routes/+page.svelte`: Main page with project mapping and filtering logic
- `src/lib/appStore.ts`: Global reactive state management
- `src/components/Card.svelte`: Base card wrapper (Svelte 5 reference)
- `svelte.config.js`: Runes enabled, CSP configuration
