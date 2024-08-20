"use client";

import Link from "next/link";
import { linkVariants } from "./ui/Button";
import { usePathname } from "next/navigation";
import { cn } from "../libs/utils";
import { ProjectLinks } from "../libs/constants";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 flex w-full items-center justify-center gap-5 py-4 backdrop-blur">
      {ProjectLinks.map((page, key) => (
        <Link
          key={key}
          href={page.link}
          className={cn(
            linkVariants({
              status: page.link === pathname ? "selected" : "default",
            }),
            "no-underline",
          )}
        >
          {page.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
