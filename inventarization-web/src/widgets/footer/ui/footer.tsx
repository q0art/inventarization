import { FC } from "react";

import { Container } from "@/widgets/container";

const Footer: FC = () => {
  return (
    <footer className="border-t-[1px] border-neutral-500 py-3 md:py-5 xl:py-7">
      <Container>
        <div className="flex items-center justify-center">this is footer</div>
      </Container>
    </footer>
  );
};

Footer.displayName = "footer";

export { Footer };
