// AI Service for generating responses about Kishore Shanto
// 
// This service integrates with Hugging Face's router API to provide AI-powered responses
// about Kishore Shanto's background, research, and expertise. It includes fallback
// responses using a local knowledge base for reliability.
//
// Environment Requirements:
// - VITE_HUGGINGFACE_INFERENCE_API_KEY: Your Hugging Face API token

import systemPromptMd from './system-prompt.md?raw';
import dataConfig from './data_en.json';
import { generateFallbackResponse } from './aiFallback'; // Fallback response generator

// Interface for Hugging Face API response
interface HuggingFaceResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Array<{
    index: number;
    message: {
      role: string;
      content: string;
    };
    logprobs: unknown;
    finish_reason: string;
  }>;
  usage: {
    queue_time: number;
    prompt_tokens: number;
    prompt_time: number;
    completion_tokens: number;
    completion_time: number;
    total_tokens: number;
    total_time: number;
  };
}

/**
 * Query Hugging Face API using the chat completions endpoint
 */
async function queryHuggingFace(messages: Array<{ role: string; content: string }>): Promise<HuggingFaceResponse> {
  const HF_TOKEN = import.meta.env.VITE_HUGGINGFACE_INFERENCE_API_KEY;
  
  if (!HF_TOKEN) {
    throw new Error('Hugging Face API token not found in environment variables');
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

  try {
    const response = await fetch("https://router.huggingface.co/v1/chat/completions", {
      headers: {
        Authorization: `Bearer ${HF_TOKEN}`,
        "Content-Type": "application/json",
      },
      method: "POST",
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
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    clearTimeout(timeoutId);
    if (error instanceof Error && error.name === 'AbortError') {
      throw new Error('Request timeout - please try again');
    }
    throw error;
  }
}

/**
 * Generate an AI response based on the user's question using Hugging Face API
 */
export async function generateAIResponse(question: string): Promise<string> {
  // Check if AI is enabled in the configuration
  if (!dataConfig.AI) {
    console.log('AI is disabled in configuration, using fallback response');
    return generateFallbackResponse(question);
  }

  try {
    // Use the imported system prompt from markdown file
    const systemPrompt = systemPromptMd;

    const messages = [
      { role: "system", content: systemPrompt },
      { role: "user", content: question }
    ];

    const response = await queryHuggingFace(messages);
    
    if (response.choices && response.choices[0] && response.choices[0].message) {
      return response.choices[0].message.content;
    } else {
      throw new Error('Invalid response format from Hugging Face API');
    }
    
  } catch (error) {
    console.error('Error generating AI response:', error);
    
    // Fallback to local knowledge base if API fails
    return generateFallbackResponse(question);
  }
}