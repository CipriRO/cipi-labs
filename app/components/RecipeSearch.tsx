"use client";
import { ArrowUp } from "lucide-react";
import { useActions, useUIState } from "ai/rsc";
import { AI } from "../libs/ai";
import { FormEvent } from "react";
import Message from "./ui/Message";

const RecipeSearch = () => {
  const [messages, setMessages] = useUIState();

  return (
    <div className="relative flex h-full w-[420px] flex-col items-center overflow-hidden rounded-3xl bg-slate-700/20 pl-4">
      <div className="flex h-full w-full flex-col space-y-2.5 overflow-auto pb-[72px] pr-4 pt-4">
        {messages.map((message) => (
          <Message
            key={message.id}
            variant={message.role === "user" ? "primary" : "secondary"}
          >
            {message.display}
          </Message>
        ))}
      </div>

      <TextBar messages={messages} setMessages={setMessages} />
    </div>
  );
};
export default RecipeSearch;

const TextBar = ({
  messages,
  setMessages,
}: {
  messages: any;
  setMessages: (v: any) => void;
}) => {
  const { sendMessage } = useActions<typeof AI>();

  const handleSendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("message:", e.target.message.value);

    setMessages([
      ...messages,
      { id: Date.now(), role: "user", display: e.target.message.value },
    ]);

    const response = await sendMessage(e.target.message.value);

    setMessages([
      ...messages,
      { id: Date.now(), role: "assistant", display: response },
    ]);
  };

  return (
    <form
      onSubmit={(e) => handleSendMessage(e)}
      className="absolute bottom-4 left-4 right-4 inline-flex h-[44px] items-center justify-between gap-4 rounded-full bg-purple-900 px-3.5 py-1.5 shadow-2xl ring-1 ring-purple-800"
    >
      <input
        type="text"
        name="message"
        placeholder="What do you want to cook?"
        className="w-full bg-transparent text-lg outline-none placeholder:text-text-700"
      />

      <button
        type="submit"
        className="rounded-full bg-purple-600 p-1 shadow-sm hover:bg-purple-600/80 disabled:opacity-40"
      >
        <ArrowUp size={24} />
      </button>
    </form>
  );
};
