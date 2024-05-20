import { FC, ReactNode } from "react";

import { cn } from "@/shared/lib/cn.ts";

interface Props {
  children?: ReactNode;
  className?: string;
}

const Container: FC<Props> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'md:max-w[117.5rem] xl:max-w-[116.5]", "mx-auto mx-auto max-w-[118.5rem] px-3 md:px-5 xl:px-7',
        className,
      )}
    >
      {children}
    </div>
  );
};

Container.displayName = "container";

export { Container };
