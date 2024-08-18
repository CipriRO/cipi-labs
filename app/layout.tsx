import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { cn } from "./libs/utils";
import Navbar from "./components/Navbar";
import MadeBy from "./components/MadeBy";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Cipi Labs",
    template: "%s - Cipi Labs",
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-background text-text decoration-text">
      <body
        className={cn(
          raleway.className,
          "flex min-h-svh flex-col items-center justify-between py-4",
        )}
      >
        <Navbar />
        {children}
        <MadeBy />
      </body>
    </html>
  );
}
