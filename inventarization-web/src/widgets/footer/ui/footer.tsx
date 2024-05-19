import { FC } from "react";

import { Container } from "@/widgets/container";
import { cn } from "@/shared/lib/cn.ts";

interface Props {
  className?: string;
}

const Footer: FC<Props> = ({ className }) => {
  const year = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "border-t-[1px] border-neutral-500 py-3 md:py-5 xl:py-7",
        className,
      )}
    >
      <Container>
        <div className="flex items-center justify-center">
          <span>&copy; {year}</span>
        </div>
      </Container>
    </footer>
  );
};

Footer.displayName = "footer";

export { Footer };
