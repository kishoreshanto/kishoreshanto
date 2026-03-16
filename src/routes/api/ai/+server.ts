import { json } from '@sveltejs/kit';
import { HUGGINGFACE_API_KEY } from '$env/static/private';
import type { RequestHandler } from './$types';
import dataConfig from '$lib/data_en.json';

/**
 * Server-side proxy for Hugging Face API calls.
 * Keeps the API key private — never exposed to the client bundle.
 */
export const POST: RequestHandler = async ({ request }) => {
    try {
        const { messages } = await request.json();

        if (!Array.isArray(messages) || messages.length === 0) {
            return json({ error: 'Invalid request: messages array is required' }, { status: 400 });
        }

        if (!HUGGINGFACE_API_KEY) {
            console.error('HUGGINGFACE_API_KEY is not set in the environment');
            return json({ error: 'AI service is not configured' }, { status: 500 });
        }

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

        try {
            const response = await fetch('https://router.huggingface.co/v1/chat/completions', {
                headers: {
                    Authorization: `Bearer ${HUGGINGFACE_API_KEY}`,
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    messages,
                    model: dataConfig.AI_model,
                    stream: false,
                    max_tokens: 300,
                    temperature: 0.7
                }),
                signal: controller.signal
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
                const errorText = await response.text();
                console.error(`Hugging Face API error: ${response.status} - ${errorText}`);
                return json(
                    { error: `AI service error (status ${response.status})` },
                    { status: 502 }
                );
            }

            const result = await response.json();
            return json(result);
        } catch (error) {
            clearTimeout(timeoutId);

            if (error instanceof Error && error.name === 'AbortError') {
                return json({ error: 'AI service request timed out' }, { status: 504 });
            }

            throw error;
        }
    } catch (error) {
        console.error('Error in AI proxy endpoint:', error);
        return json({ error: 'Internal server error' }, { status: 500 });
    }
};
