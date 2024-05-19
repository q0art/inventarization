import { FC } from "react";

import { SignOut } from "@/features/sign-out";
import { Container } from "@/widgets/container";

const RootPage: FC = () => {
  return (
    <Container>
      <div className="flex items-center py-5">
        <SignOut />
      </div>
    </Container>
  );
};

RootPage.displayName = "root-page";

export default RootPage;
