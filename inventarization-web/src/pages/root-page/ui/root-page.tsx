import { FC } from "react";

import { Container } from "@/widgets/container";

const RootPage: FC = () => {
  return (
    <Container>
      <div className="py-3">
        <div className="flex items-center">now nothing :3</div>
      </div>
    </Container>
  );
};

RootPage.displayName = "root-page";

export default RootPage;
