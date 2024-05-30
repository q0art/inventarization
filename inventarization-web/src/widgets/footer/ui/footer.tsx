import { FC } from "react";

import { cn } from "@/shared/lib/cn.ts";

interface Props {
  className?: string;
}

export const Footer: FC<Props> = ({ className }) => {
  const year = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "border-t-[1px] border-neutral-500 py-3 md:py-5 xl:py-7",
        className,
      )}
    >
      <div className="container">
        <div className="flex items-center justify-center">
          <span>&copy; {year}</span>
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = "footer";
