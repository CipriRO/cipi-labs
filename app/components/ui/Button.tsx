import { cn } from "@/app/libs/utils";
import { cva } from "class-variance-authority";

type buttonProps = React.ComponentPropsWithoutRef<"button"> & {
  className: string;
  children: React.ReactNode;
};

export const linkVariants = cva(
  "transition-all hover:font-bold font-medium",
);

export const buttonVariants = cva(
  "focus-visible:ring-2 ring-offset-2 ring-offset-background outline-none ring-text transition-transform hover:scale-[1.02] active:scale-100 linear",
);

const Button = ({ className, ...props }: buttonProps) => {
  return <button {...props} className={cn(className, buttonVariants())} />;
};
export default Button;
