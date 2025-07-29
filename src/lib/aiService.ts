// AI Service for generating responses about Kishore Shanto
// 
// This service integrates with Hugging Face's router API to provide AI-powered responses
// about Kishore Shanto's background, research, and expertise. It includes fallback
// responses using a local knowledge base for reliability.
//
// Environment Requirements:
// - VITE_HUGGINGFACE_INFERENCE_API_KEY: Your Hugging Face API token

import systemPromptMd from './system-prompt.md?raw';

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
    logprobs: any;
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

// Personal information about Kishore Shanto
const PERSONAL_INFO = {
  name: "Kishore Shanto",
  legal_name: "Shanta Biswas",
  title: "Researcher & Developer",
  location: "Dhaka, Bangladesh",
  email: "tinykishore@gmail.com",
  interests: [
    "Deep Learning",
    "Computer Vision", 
    "Autoregressive and Large Language Models",
    "Multi-agent CoT Models",
    "Biomedical Signal Processing"
  ],
  languages: ["English (CEFR C1)", "French (Beginner)", "Bengali (Native)"],
  research_areas: [
    "EEG and Brain-Computer Interfaces",
    "Voice Activity Detection",
    "Garment Defect Detection using Computer Vision",
    "Password Security Research",
    "Machine Learning with GBDT and SVM"
  ],
  education: "University UIU - Computer Science & Software Engineering",
  github: "https://www.github.com/tinykishore/",
  linkedin: "https://www.linkedin.com/in/tinykishore",
  orcid: "https://orcid.org/0009-0009-1147-0095"
};

// Knowledge base for different types of questions
const KNOWLEDGE_BASE = {
  personal: {
    "who are you": `I'm Kishore Shanto (legal name: Shanta Biswas), a researcher and developer based in Dhaka, Bangladesh. I'm passionate about deep learning, computer vision, and biomedical signal processing.`,
    "what do you do": `I'm a researcher and developer specializing in machine learning and AI. My work focuses on deep learning, computer vision, large language models, and biomedical signal processing.`,
    "where are you from": `I'm from Bangladesh, currently based in Dhaka. I speak Bengali natively, English at CEFR C1 level, and I'm learning French.`,
    "education": `I studied Computer Science and Software Engineering at University UIU (United International University).`
  },
  
  research: {
    "research": `My research spans several exciting areas: EEG and Brain-Computer Interfaces for upper limb motor movement, Voice Activity Detection using machine learning, Garment Defect Detection with computer vision, Password Security research, and Machine Learning implementations with GBDT and SVM algorithms.`,
    "eeg": `I work on EEG (Electroencephalogram) research focusing on brain-computer interfaces, particularly for upper limb motor movement classification using deep learning techniques.`,
    "computer vision": `My computer vision work includes garment defect detection for textile manufacturing quality control, using advanced image processing and deep learning methods.`,
    "machine learning": `I work with various ML techniques including Gradient Boosting Decision Trees (GBDT), Support Vector Machines (SVM), and deep learning for different applications like voice activity detection and signal processing.`
  },
  
  technical: {
    "programming": `I'm proficient in multiple programming languages and frameworks, with expertise in machine learning, deep learning, and web development technologies.`,
    "projects": `I've worked on diverse projects including EEG research, voice activity detection, garment defect detection, password security research, and various machine learning implementations.`,
    "skills": `My technical skills include deep learning, computer vision, signal processing, machine learning algorithms, and full-stack development.`
  },
  
  contact: {
    "contact": `You can reach me through several channels: Email at tinykishore@gmail.com, GitHub at github.com/tinykishore, LinkedIn at linkedin.com/in/tinykishore, or check my ORCID profile at orcid.org/0009-0009-1147-0095.`,
    "github": `My GitHub profile is github.com/tinykishore where you can find my open-source projects and contributions.`,
    "linkedin": `Connect with me on LinkedIn at linkedin.com/in/tinykishore for professional networking.`,
    "email": `You can email me directly at tinykishore@gmail.com for any inquiries or collaboration opportunities.`
  }
};

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
        model: "meta-llama/Llama-3.3-70B-Instruct:groq",
        stream: false,
        max_tokens: 350,
        temperature: 0.65
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
  try {
    // Use the system prompt from the external markdown file
    // This makes it easy to update the AI's personality and context without code changes
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

/**
 * Fallback response generator using local knowledge base
 */
function generateFallbackResponse(question: string): string {
  const lowerQuestion = question.toLowerCase();
  
  // Check for specific keywords and provide targeted responses
  if (lowerQuestion.includes('who') && (lowerQuestion.includes('you') || lowerQuestion.includes('kishore'))) {
    return KNOWLEDGE_BASE.personal["who are you"];
  }
  
  if (lowerQuestion.includes('what') && lowerQuestion.includes('do')) {
    return KNOWLEDGE_BASE.personal["what do you do"];
  }
  
  if (lowerQuestion.includes('where') && (lowerQuestion.includes('from') || lowerQuestion.includes('located'))) {
    return KNOWLEDGE_BASE.personal["where are you from"];
  }
  
  if (lowerQuestion.includes('education') || lowerQuestion.includes('study') || lowerQuestion.includes('university')) {
    return KNOWLEDGE_BASE.personal.education;
  }
  
  if (lowerQuestion.includes('research')) {
    return KNOWLEDGE_BASE.research.research;
  }
  
  if (lowerQuestion.includes('eeg') || lowerQuestion.includes('brain')) {
    return KNOWLEDGE_BASE.research.eeg;
  }
  
  if (lowerQuestion.includes('computer vision') || lowerQuestion.includes('image') || lowerQuestion.includes('vision')) {
    return KNOWLEDGE_BASE.research["computer vision"];
  }
  
  if (lowerQuestion.includes('machine learning') || lowerQuestion.includes('ml') || lowerQuestion.includes('gbdt') || lowerQuestion.includes('svm')) {
    return KNOWLEDGE_BASE.research["machine learning"];
  }
  
  if (lowerQuestion.includes('contact') || lowerQuestion.includes('reach')) {
    return KNOWLEDGE_BASE.contact.contact;
  }
  
  if (lowerQuestion.includes('github')) {
    return KNOWLEDGE_BASE.contact.github;
  }
  
  if (lowerQuestion.includes('linkedin')) {
    return KNOWLEDGE_BASE.contact.linkedin;
  }
  
  if (lowerQuestion.includes('email')) {
    return KNOWLEDGE_BASE.contact.email;
  }
  
  if (lowerQuestion.includes('programming') || lowerQuestion.includes('code') || lowerQuestion.includes('develop')) {
    return KNOWLEDGE_BASE.technical.programming;
  }
  
  if (lowerQuestion.includes('project')) {
    return KNOWLEDGE_BASE.technical.projects;
  }
  
  if (lowerQuestion.includes('skill')) {
    return KNOWLEDGE_BASE.technical.skills;
  }
  
  if (lowerQuestion.includes('interest') || lowerQuestion.includes('passion')) {
    return `I'm passionate about ${PERSONAL_INFO.interests.join(', ')}. These areas fascinate me because they represent the cutting edge of AI and have tremendous potential to solve real-world problems.`;
  }
  
  if (lowerQuestion.includes('language')) {
    return `I speak ${PERSONAL_INFO.languages.join(', ')}. This multilingual ability helps me collaborate with international research teams and access diverse academic resources.`;
  }
  
  // Default response for unmatched questions
  return `That's an interesting question! While I don't have a specific answer prepared for that, I can tell you that I'm Kishore Shanto, a researcher and developer working on deep learning, computer vision, and biomedical signal processing. I'm always happy to discuss my research areas including EEG/BCI, voice activity detection, computer vision applications, and machine learning. Feel free to ask about any of these topics or check out my work on GitHub!`;
}

/**
 * Test function for the Hugging Face API
 * This can be used for debugging and testing the AI service
 */
export async function testAIService(): Promise<void> {
  try {
    console.log('Testing Hugging Face AI service...');
    const response = await generateAIResponse("Who are you?");
    console.log('AI Response:', response);
  } catch (error) {
    console.error('Test failed:', error);
  }
}