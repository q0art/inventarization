import { useTheme } from "@/shared/hooks/use-theme.ts";
import { useAppDispatch } from "@/shared/hooks/use-app-dispatch.ts";
import { toggleTheme } from "@/entities/theme";
import { FC, MouseEvent } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";
import { cn } from "@/shared/lib/cn.ts";
import { buttonVariants } from "@/shared/ui/button.tsx";

interface Props {
  className?: string;
}

const ThemeToggle: FC<Props> = ({ className }) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const onClick = (event: MouseEvent<SVGElement>) => {
    event.stopPropagation();

    dispatch(toggleTheme(theme === "light" ? "dark" : "light"));
  };

  return theme === "dark" ? (
    <FaMoon
      onClick={onClick}
      className={cn(
        buttonVariants({
          variant: "ghost",
          size: "icon",
        }),
        "p-3",
        className,
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
        "p-3",
        className,
      )}
    />
  );
};

ThemeToggle.displayName = "theme-toggle";

export { ThemeToggle };
