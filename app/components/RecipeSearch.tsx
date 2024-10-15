"use client";
import { ArrowUp } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import { StreamComponent } from "../libs/RecipeSearchActions";

const RecipeSearch = () => {
  const [component, setComponent] = useState<React.ReactNode>();

  return (
    <div className="relative flex h-full w-[420px] flex-col items-center overflow-hidden rounded-3xl bg-slate-700/20 pl-4">
      <div className="flex h-full w-full flex-col space-y-2.5 overflow-auto pb-[72px] pr-4 pt-4">
        {/* {messages.map((message) => (
          <Message
            key={message.id}
            variant={message.role === "user" ? "primary" : "secondary"}
          >
            {message.content}
          </Message>
        ))} */}
        {component}
      </div>

      <TextBar setComponent={setComponent} />
    </div>
  );
};
export default RecipeSearch;

const TextBar = ({
  setComponent,
}: {
  setComponent: Dispatch<SetStateAction<React.ReactNode>>;
}) => {
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setComponent(await StreamComponent("Hey. How are you?"));
      }}
      className="absolute bottom-4 left-4 right-4 inline-flex h-[44px] items-center justify-between gap-4 rounded-full bg-purple-900 px-3.5 py-1.5 shadow-2xl ring-1 ring-purple-800"
    >
      <input
        type="text"
        placeholder="What do you want to cook?"
        className="w-full bg-transparent text-lg outline-none placeholder:text-text-700"
      />

      <button className="rounded-full bg-purple-600 p-1 shadow-sm hover:bg-purple-600/80 disabled:opacity-40">
        <ArrowUp size={24} />
      </button>
    </form>
  );
};
