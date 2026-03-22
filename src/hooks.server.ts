import type { Handle } from '@sveltejs/kit';

const securityHeaders = {
	'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
	'X-Frame-Options': 'DENY',
	'X-Content-Type-Options': 'nosniff',
	'Referrer-Policy': 'strict-origin-when-cross-origin',
	'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
} as const;

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);

	for (const [header, value] of Object.entries(securityHeaders)) {
		response.headers.set(header, value);
	}

	return response;
};
