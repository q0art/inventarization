import { FC, ReactNode } from "react";
import { cn } from "@/shared/lib/cn.ts";

interface Props {
  className?: string;
  children?: ReactNode;
}

const Container: FC<Props> = ({ className, children }) => {
  return (
    <div
      className={cn(
        'md:max-w[117.5rem] xl:max-w-[116.5]", "mx-auto max-w-[118.5rem] px-3 md:px-5 xl:px-7',
        className,
      )}
    >
      {children}
    </div>
  );
};

export { Container };
