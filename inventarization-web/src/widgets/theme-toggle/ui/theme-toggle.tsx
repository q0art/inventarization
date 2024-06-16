import { toggleTheme } from "@app/providers/theme-provider";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useDispatch } from "@shared/hooks/use-redux";
import { useTheme } from "@shared/hooks/use-redux";
import { FC, MouseEvent } from "react";

export const ThemeToggle: FC = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

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
