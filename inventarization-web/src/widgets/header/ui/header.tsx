import { FC } from "react";

import { Container } from "@/widgets/container";
import { ThemeToggle } from "@/widgets/theme-toggle";
import { cn } from "@/shared/lib/cn.ts";

interface Props {
  className?: string;
}

const Header: FC<Props> = ({ className }) => {
  return (
    <header
      className={cn(
        "border-b-[1px] border-neutral-500 py-3 md:py-5 xl:py-7",
        className,
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          <h1>some text</h1>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
};

Header.displayName = "header";

export { Header };
