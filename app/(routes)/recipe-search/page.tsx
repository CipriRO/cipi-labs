import { Page, PageContent, PageDemo } from "@/app/components/ui/Page";
import Content from "./content.mdx";
import { Metadata } from "next";
import RecipeSearch from "@/app/components/RecipeSearch";

export const metadata: Metadata = {
  title: "Recipe Search",
};

const page = () => {
  return (
    <Page>
      <PageContent>
        <Content />
      </PageContent>

      <PageDemo>
        <RecipeSearch />
      </PageDemo>
    </Page>
  );
};
export default page;
