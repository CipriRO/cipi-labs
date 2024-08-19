import Image from "next/image";
import CipiLogo from "@/public/logos/cipi-logo.svg";
import Logo from "@/public/logos/logo.png";
import { ChevronRight } from "lucide-react";
import { buttonVariants } from "./components/ui/Button";
import Link from "next/link";
import { cn } from "./libs/utils";

export default function Home() {
  return (
    <main className="flex flex-col items-center space-y-7">
      <Main />
    </main>
  );
}

const Main = () => (
  <>
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
      Cipi Labs is my experimental space—a place where creativity meets code.
      Here, I tinker with new ideas, test out APIs, and explore the endless
      possibilities of web development. Whether you&apos;re curious or just
      passing by, feel free to take a peek into my digital sandbox.
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
  </>
);
