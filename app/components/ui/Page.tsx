import { cn } from "@/app/libs/utils";
import { ClassValue } from "clsx";
import { ComponentPropsWithoutRef } from "react";

type PageProps = {
  children: React.ReactNode;
  className?: ClassValue[];
};

export const Page = ({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"main"> & PageProps) => {
  return (
    <main {...props} className={cn("flex gap-20 overflow-hidden", className)}>
      {children}
    </main>
  );
};

export const PageContent = ({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"article"> & PageProps) => {
  return (
    <article
      {...props}
      className={cn("prose prose-invert overflow-auto pr-4", className)}
    >
      {children}
    </article>
  );
};

export const PageDemo = ({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"article"> & PageProps) => {
  return (
    <article {...props} className={cn("overflow-auto", className)}>
      {children}
    </article>
  );
};
