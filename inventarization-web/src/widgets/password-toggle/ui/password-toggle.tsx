import { Eye, EyeOff } from "lucide-react";
import { FC, MouseEvent } from "react";

import { cn } from "@/shared/lib/cn.ts";
import { buttonVariants } from "@/shared/ui/button.tsx";

interface Props {
  isOpen: boolean;
  onClick: (event: MouseEvent<SVGElement>) => void;
  className?: string;
}

const PasswordToggle: FC<Props> = ({ isOpen, onClick, className }) => {
  return isOpen ? (
    <Eye
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
    <EyeOff
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

PasswordToggle.displayName = "password-toggle";

export { PasswordToggle };
