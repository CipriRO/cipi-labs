"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../libs/utils";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 flex items-center justify-between px-14 py-7">
      <h2 className="text-xl font-semibold">Dev Playground</h2>
      <nav className="space-x-4">
        {links.map((link, id) => (
          <Link
            key={id}
            href={link.href}
            className={cn("font-medium", {
              "font-semibold underline decoration-2 underline-offset-4":
                pathname === link.href,
            })}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};
export default Header;

const links = [
  { name: "Products", href: "/" },
  { name: "Tasks", href: "/todos" },
];
