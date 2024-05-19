import { FC } from "react";

import { Container } from "@/widgets/container";
import { ThemeToggle } from "@/widgets/theme-toggle";

const Header: FC = () => {
  return (
    <header className="border-b-[1px] border-neutral-500 py-3 md:py-5 xl:py-7">
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
