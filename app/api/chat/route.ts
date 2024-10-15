import { google } from "@ai-sdk/google";
import { convertToCoreMessages, streamText } from "ai";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: google("gemini-1.0-pro"),
    system: "You are a helpful assistant mamed Cipi Labs AI.",
    messages: convertToCoreMessages(messages),
  });

  return result.toDataStreamResponse();
}
