import { FC } from "react";

import { Container } from "@/widgets/container";

const RootPage: FC = () => {
  return (
    <Container>
      <div className="flex items-center">some text</div>
    </Container>
  );
};

RootPage.displayName = "root-page";

export default RootPage;
