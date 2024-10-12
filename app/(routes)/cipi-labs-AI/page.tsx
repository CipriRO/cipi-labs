import CipiLabsAI from "@/app/components/CipiLabsAI/CipiLabsAI";
import Content from "./content.mdx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cipi Labs AI",
};

const page = () => {
  return (
    <main className="flex gap-20 overflow-hidden">
      <article className="prose prose-invert overflow-auto pr-4">
        <Content />
      </article>

      <article className="overflow-auto">
        <CipiLabsAI />
      </article>
    </main>
  );
};
export default page;
