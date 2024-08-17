import Image from "next/image";
import CipiLogo from "@/public/logos/cipi-logo.svg";
import Logo from "@/public/logos/logo.png";
import { ChevronRight } from "lucide-react";
import { buttonVariants, linkVariants } from "./components/ui/Button";
import Link from "next/link";
import { cn } from "./libs/utils";
import MadeBy from "./components/ui/MadeBy";

export default function Home() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-between space-y-16 py-4">
      <Navbar />

      <article className="relative flex flex-col items-center space-y-7">
        <div className="space-y-1">
          <div className="flex items-center justify-center gap-1">
            <div className="flex items-center gap-3">
              <Image
                priority={true}
                src={CipiLogo}
                alt="The logo of Cipi"
                width={108}
                height={60}
              />
              <h1 className="text-6xl font-extrabold">Labs</h1>
            </div>
            <Image
              quality={100}
              className="-rotate-12"
              src={Logo}
              alt="Logo of Cipi Labs"
              width={53}
              height={70}
            />
          </div>
          <h2 className="bg-gradient-to-b from-text-950 via-[#A9A9AC] via-[69%] to-text-400 bg-clip-text text-center text-4xl font-bold text-transparent">
            Where Code Meets Curiosity
          </h2>
        </div>
        <p className="max-w-[744px] text-center">
          Cipi Labs is my experimental space—a place where creativity meets
          code. Here, I tinker with new ideas, test out APIs, and explore the
          endless possibilities of web development. Whether you&apos;re curious
          or just passing by, feel free to take a peek into my digital sandbox.
        </p>

        <Link
          href="#"
          className={cn(
            "flex items-center rounded-full bg-text py-2 pl-5 pr-2 font-semibold text-background shadow-[0_2px_20px_rgba(237,_237,_238,_0.4)]",
            buttonVariants(),
          )}
        >
          Let&apos;s Explore
          <ChevronRight height={24} width={24} />
        </Link>

        <div className="animate-blob absolute -left-8 -top-14 -z-50 size-[400px] rounded-full bg-primary-500 opacity-10 mix-blend-lighten blur-3xl" />
        <div className="animate-blob animate-delay-2000 absolute -bottom-12 -right-8 -z-50 size-[400px] rounded-full bg-[#7A4DB3] opacity-10 mix-blend-lighten blur-3xl" />
      </article>

      <MadeBy />
    </main>
  );
}

const Navbar = () => {
  const pages = [
    { name: "OpenAI", link: "/openai" },
    { name: "Recipe Generator", link: "/recipe-generator" },
    { name: "Language Translation", link: "/language-translation" },
  ] as const;

  return (
    <nav className="flex items-center gap-5">
      {pages.map((page, key) => (
        <Link key={key} href={page.link} className={linkVariants()}>
          {page.name}
        </Link>
      ))}
    </nav>
  );
};
