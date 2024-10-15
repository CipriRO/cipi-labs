"use server"

import { google } from "@ai-sdk/google";
import { streamUI } from "ai/rsc";
import Message from "@/app/components/ui/Message";

export const StreamComponent = async (prompt: string) => {
  const result = await streamUI({
    model: google("gemini-1.5-pro"),
    prompt,
    text: ({ content }) => <Message variant={"secondary"}>{content}</Message>,
    tools: {},
  });

  return result.value;
};
