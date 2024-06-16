import { Box, Container, Stack } from "@mui/material";
import { Header } from "@widgets/header";
import { Main } from "@widgets/main";
import { Sidebar } from "@widgets/sidebar";
import { FC } from "react";
import { Outlet } from "react-router-dom";

const RootLayout: FC = () => {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />

      <Sidebar />

      <Main>
        <Outlet />
      </Main>

      <footer>
        <Container>
          <Box
            sx={{
              display: "flex",
            }}
          >
            footer
          </Box>
        </Container>
      </footer>
    </Stack>
  );
};

export default RootLayout;
