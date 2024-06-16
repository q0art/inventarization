import {
  createTheme,
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material";
import { useDispatch } from "@shared/hooks/use-redux";
import { useTheme } from "@shared/hooks/use-redux";
import { FC, ReactNode, useEffect } from "react";

import { toggleTheme } from "../lib/theme-slice";

interface Props {
  children?: ReactNode;
}

export const ThemeProvider: FC<Props> = ({ children }) => {
  const _theme = useTheme();
  const dispatch = useDispatch();

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
