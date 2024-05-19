import { FC } from "react";

import { Container } from "@/widgets/container";
import { SignOut } from "@/features/sign-out";

const RootPage: FC = () => {
  return (
    <Container>
      <div className="flex items-center">
        <SignOut />
      </div>
    </Container>
  );
};

RootPage.displayName = "root-page";

export default RootPage;
