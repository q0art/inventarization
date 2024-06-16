import { toggleTheme } from "@entities/theme";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useAppDispatch } from "@shared/hooks/use-app-dispatch";
import { useTheme } from "@shared/hooks/use-theme";
import { FC, MouseEvent } from "react";

export const ThemeToggle: FC = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const onClick = (e: MouseEvent<SVGSVGElement>) => {
    e.stopPropagation();

    dispatch(toggleTheme(theme === "light" ? "dark" : "light"));
  };

  return theme === "light" ? (
    <DarkMode onClick={onClick} />
  ) : (
    <LightMode onClick={onClick} />
  );
};
