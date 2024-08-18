import Link from "next/link";
import { linkVariants } from "./ui/Button";

export const ProjectLinks = [
  { name: "OpenAI", link: "/openai" },
  { name: "Recipe Generator", link: "/recipe-generator" },
  { name: "Language Translation", link: "/language-translation" },
] as const;

const Navbar = () => {
  return (
    <nav className="flex items-center gap-5">
      {ProjectLinks.map((page, key) => (
        <Link key={key} href={page.link} className={linkVariants()}>
          {page.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
