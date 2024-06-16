import { Container } from "@mui/material";
import { ThemeToggle } from "@widgets/theme-toggle";
import { FC } from "react";

const RootPage: FC = () => {
  return (
    <Container>
      <ThemeToggle />
    </Container>
  );
};

export default RootPage;
