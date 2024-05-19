import { FC } from "react";
import { Container } from "@/widgets/container";

const Header: FC = () => {
  return (
    <header className="border-b-[1px] border-neutral-500 py-3 md:py-5 xl:py-7">
      <Container>
        <div className="flex items-center justify-center">this is header</div>
      </Container>
    </header>
  );
};

export { Header };
