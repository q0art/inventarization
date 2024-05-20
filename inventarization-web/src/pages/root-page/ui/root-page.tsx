import { FC } from "react";

import { SignOut } from "@/features/sign-out";
import { Container } from "@/widgets/container";

const RootPage: FC = () => {
  return (
    <Container>
      <div className="py-3">
        <div className="flex items-center">
          <SignOut />
        </div>
      </div>
    </Container>
  );
};

RootPage.displayName = "root-page";

export default RootPage;
