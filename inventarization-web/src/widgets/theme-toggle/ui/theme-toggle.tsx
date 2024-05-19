import { useTheme } from "@/shared/hooks/use-theme.ts";
import { useAppDispatch } from "@/shared/hooks/use-app-dispatch.ts";
import { toggleTheme } from "@/entities/theme";
import { FC, MouseEvent } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";
import { cn } from "@/shared/lib/cn.ts";
import { buttonVariants } from "@/shared/ui/button.tsx";

const ThemeToggle: FC = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const onClick = (event: MouseEvent<SVGElement>) => {
    event.stopPropagation();

    dispatch(toggleTheme(theme === "light" ? "dark" : "light"));
  };

  return theme === "light" ? (
    <FaMoon
      onClick={onClick}
      className={cn(
        buttonVariants({
          variant: "ghost",
          size: "icon",
        }),
        "p-2 delay-75 active:scale-90",
      )}
    />
  ) : (
    <FaSun
      onClick={onClick}
      className={cn(
        buttonVariants({
          variant: "ghost",
          size: "icon",
        }),
        "p-2 delay-75 active:scale-90",
      )}
    />
  );
};

ThemeToggle.displayName = "theme-toggle";

export { ThemeToggle };
