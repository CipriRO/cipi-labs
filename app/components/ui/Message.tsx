import { cva, VariantProps } from "class-variance-authority";
import { ClassValue } from "clsx";

const MessageVariants = cva("max-w-72 rounded-xl p-2", {
  variants: {
    variant: {
      primary: "bg-purple-600/70 ml-auto",
      secondary: "bg-gray-600/80 mr-auto",
    },
  },
});

type MessageTypes = Required<
  Pick<VariantProps<typeof MessageVariants>, "variant">
> & {
  className?: ClassValue[];
  children: React.ReactNode;
};

const Message = ({ variant, className, children }: MessageTypes) => {
  return (
    <div className={MessageVariants({ className, variant })}>
      <p>{children}</p>
    </div>
  );
};

export default Message;
