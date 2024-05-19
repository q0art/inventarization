import { FC, ReactNode, useEffect } from "react";

import { Theme, toggleTheme } from "@/entities/theme";
import { useAppDispatch } from "@/shared/hooks/use-app-dispatch.ts";
import { useTheme } from "@/shared/hooks/use-theme.ts";

interface Props {
  theme?: Theme;
  children?: ReactNode;
}

const ThemeProvider: FC<Props> = ({ theme, children }) => {
  const _theme = useTheme();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (theme && theme !== _theme) {
      dispatch(toggleTheme(theme));
      return;
    }

    if (_theme === "dark")
      window.document.documentElement.classList.add("dark");
    else window.document.documentElement.classList.remove("dark");
  }, [theme, _theme]);

  return <>{children}</>;
};

ThemeProvider.displayName = "theme-provider";

export { ThemeProvider };
