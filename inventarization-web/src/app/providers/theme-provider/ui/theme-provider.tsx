import { toggleTheme } from "@entities/theme";
import {
  createTheme,
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material";
import { useAppDispatch } from "@shared/hooks/use-app-dispatch.ts";
import { useTheme } from "@shared/hooks/use-theme.ts";
import { FC, ReactNode, useEffect } from "react";

interface Props {
  children?: ReactNode;
}

export const ThemeProvider: FC<Props> = ({ children }) => {
  const _theme = useTheme();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(toggleTheme(_theme));
  }, [_theme, dispatch]);

  const theme = createTheme({
    palette: {
      mode: _theme,
    },
  });

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
};
