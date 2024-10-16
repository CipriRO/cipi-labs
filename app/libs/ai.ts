import { createAI } from "ai/rsc";
import { ClientMessage, sendMessage, ServerMessage } from "./ActionsRecipe";

export type AIState = ServerMessage[];
export type UIState = ClientMessage[];

export const AI = createAI<AIState, UIState>({
  initialAIState: [],
  initialUIState: [],
  actions: {
    sendMessage,
  },
});
