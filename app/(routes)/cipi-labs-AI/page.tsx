import Content from "./content.mdx";
import CipiLabsAI from "@/app/components/CipiLabsAI";
import { Page, PageContent, PageDemo } from "@/app/components/ui/Page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cipi Labs AI",
};

const page = () => {
  return (
    <Page>
      <PageContent>
        <Content />
      </PageContent>

      <PageDemo>
        <CipiLabsAI />
      </PageDemo>
    </Page>
  );
};
export default page;
