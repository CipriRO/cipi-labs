"use server";
import { google } from "@ai-sdk/google";
import { getMutableAIState, streamUI } from "ai/rsc";
import Message from "@/app/components/ui/Message";

export type ServerMessage = {
  role: "user" | "assistant";
  content: string;
};

export type ClientMessage = {
  id: string;
  role: "user" | "assistant";
  display: React.ReactNode;
};

export const sendMessage = async (prompt: string) => {
  const history = getMutableAIState();

  history.update([...history.get(), { role: "user", content: prompt }]);

  const result = await streamUI({
    model: google("gemini-1.5-pro"),
    messages: history.get(),
    text: ({ content }) => <Message variant={"secondary"}>{content}</Message>,
    tools: {},
  });

  history.done([...history.get(), { role: "assistant", content: result }]);

  return result.value;
};
