import type { Handle } from '@sveltejs/kit';


/**
 * Security headers to be added to all responses
 * - Strict-Transport-Security: Enforces secure (HTTPS) connections to the server
 * - X-Frame-Options: Prevents clickjacking by disallowing the page to be framed
 * - X-Content-Type-Options: Prevents MIME-sniffing attacks by forcing the browser to respect the declared content type
 * - Referrer-Policy: Controls how much referrer information is sent with requests
 * - Permissions-Policy: Restricts access to powerful features like camera, microphone, and geolocation
 */
const securityHeaders = {
	'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
	'X-Frame-Options': 'DENY',
	'X-Content-Type-Options': 'nosniff',
	'Referrer-Policy': 'strict-origin-when-cross-origin',
	'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
} as const;

/**
 * Handle function to set security headers for all responses
 * @param event - The request event
 * @param resolve - Function to resolve the request and get the response
 * @returns The response with security headers set
 */
export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);

	for (const [header, value] of Object.entries(securityHeaders)) {
		response.headers.set(header, value);
	}

	return response;
};
