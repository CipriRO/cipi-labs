"use client";
import { ArrowUp } from "lucide-react";
import Message from "./Message";
import { useChat } from "ai/react";
import { ChatRequestOptions } from "ai";

const CipiLabsAI = () => {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      keepLastMessageOnError: true,
    });

  return (
    <div className="relative flex h-full w-[420px] flex-col items-center overflow-hidden rounded-3xl bg-slate-700/20 pl-4">
      <div className="flex h-full w-full flex-col space-y-2.5 overflow-auto pb-[72px] pr-4 pt-4">
        {messages.map((message) => (
          <Message
            key={message.id}
            variant={message.role === "user" ? "primary" : "secondary"}
          >
            {message.content}
          </Message>
        ))}
      </div>

      <TextBar
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
      />
    </div>
  );
};
export default CipiLabsAI;

const TextBar = ({
  input,
  handleInputChange,
  handleSubmit,
  isLoading,
}: {
  input: string;
  handleInputChange: (event?: any) => void;
  handleSubmit: (
    event?: { preventDefault?: () => void },
    options?: ChatRequestOptions,
  ) => void;
  isLoading: boolean;
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="absolute bottom-4 left-4 right-4 inline-flex h-[44px] items-center justify-between gap-4 rounded-full bg-purple-900 px-3.5 py-1.5 shadow-2xl ring-1 ring-purple-800"
    >
      <input
        value={input}
        onChange={handleInputChange}
        type="text"
        placeholder="Ask me anything.."
        className="w-full bg-transparent text-lg outline-none placeholder:text-text-700"
      />

      <button
        disabled={isLoading}
        className="rounded-full bg-purple-600 p-1 shadow-sm hover:bg-purple-600/80 disabled:opacity-40"
      >
        <ArrowUp size={24} />
      </button>
    </form>
  );
};
