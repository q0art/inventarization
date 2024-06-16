import { ArrowCircleLeft, ArrowCircleRight } from "@mui/icons-material";
import { Card, Container, Link, Stack } from "@mui/material";
import { useDispatch, useSidebar } from "@shared/hooks/use-redux";
import { AppRoutes } from "@shared/types/routes";
import { openSidebar } from "@widgets/sidebar";
import { ThemeToggle } from "@widgets/theme-toggle";
import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";

export const Header: FC = () => {
  const open = useSidebar();
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(openSidebar());
  };

  return (
    <Container
      sx={{
        py: 3,
      }}
    >
      <Stack
        component="header"
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {open ? (
          <ArrowCircleLeft onClick={onClick} width={32} />
        ) : (
          <ArrowCircleRight onClick={onClick} width={32} />
        )}

        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 5,
          }}
        >
          <ThemeToggle />

          <Card
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 3,
              py: 1,
              px: 3,
            }}
          >
            <Link
              to={AppRoutes.SIGN_IN}
              component={RouterLink}
              variant="subtitle1"
            >
              Sign in
            </Link>

            <Link
              to={AppRoutes.SIGN_UP}
              component={RouterLink}
              variant="subtitle1"
            >
              Sign up
            </Link>
          </Card>
        </Stack>
      </Stack>
    </Container>
  );
};
