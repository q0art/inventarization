import { cn } from "@/shared/lib/cn";
import { FC } from "react";

interface Props {
  className?: string;
}

export const PageLoader: FC<Props> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <p>loading...</p>
    </div>
  );
};

PageLoader.displayName = "page-loader";
