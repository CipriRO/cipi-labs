import { ArrowUp } from "lucide-react";

const CipiLabsAI = () => {
  return (
    <div className="relative flex h-full w-96 flex-col items-center rounded-3xl bg-slate-700/20 pl-4 overflow-hidden">
      <div className="h-full w-full space-y-2.5 overflow-auto pb-[72px] pr-4 pt-4">
        <div className="ml-auto w-72 rounded-xl bg-purple-600/70 p-2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
            quod doloribus.
          </p>
        </div>

        <div className="mr-auto w-72 rounded-2xl bg-gray-600/80 p-2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
            quod doloribus.
          </p>
        </div>
        <div className="ml-auto w-72 rounded-2xl bg-purple-600/70 p-2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
            quod doloribus.
          </p>
        </div>

        <div className="mr-auto w-72 rounded-2xl bg-gray-600/80 p-2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
            quod doloribus.
          </p>
        </div>
        <div className="ml-auto w-72 rounded-2xl bg-purple-600/70 p-2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
            quod doloribus.
          </p>
        </div>

        <div className="mr-auto w-72 rounded-2xl bg-gray-600/80 p-2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
            quod doloribus.
          </p>
        </div>
      </div>

      <div className="inline-flex h-[44px] absolute bottom-4 left-4 ring-1 ring-purple-800 right-4 items-center justify-between gap-4 rounded-full bg-purple-900 shadow-2xl px-3.5 py-1.5">
        <input
          type="text"
          placeholder="Ask me anything.."
          className="w-full bg-transparent text-lg outline-none placeholder:text-text-700"
        />

        <button className="rounded-full bg-purple-600 hover:bg-purple-600/80 disabled:opacity-40 p-1 shadow-sm">
          <ArrowUp size={24} />
        </button>
      </div>
    </div>
  );
};
export default CipiLabsAI;
