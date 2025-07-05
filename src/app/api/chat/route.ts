import { streamText } from "ai";
import { createGroq } from "@ai-sdk/groq";
import { generatePrompt } from "@/lib/generatePrompt";

export const maxDuration = 30;

const groq = createGroq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: groq("llama-3.1-8b-instant"),
    system: generatePrompt(),
    messages,
  });

  return result.toDataStreamResponse();
}
