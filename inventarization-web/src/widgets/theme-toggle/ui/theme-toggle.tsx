import { Moon, Sun } from "lucide-react";
import { FC, MouseEvent } from "react";

import { toggleTheme } from "@/entities/theme";
import { useAppDispatch } from "@/shared/hooks/use-app-dispatch.ts";
import { useTheme } from "@/shared/hooks/use-theme.ts";
import { cn } from "@/shared/lib/cn.ts";
import { buttonVariants } from "@/shared/ui/button.tsx";

interface Props {
  className?: string;
}

export const ThemeToggle: FC<Props> = ({ className }) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const onClick = (event: MouseEvent<SVGElement>) => {
    event.stopPropagation();

    dispatch(toggleTheme(theme === "light" ? "dark" : "light"));
  };

  return theme === "dark" ? (
    <Moon
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
    <Sun
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
