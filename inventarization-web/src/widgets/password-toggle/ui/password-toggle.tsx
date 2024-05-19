import { FC, MouseEvent } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { cn } from "@/shared/lib/cn.ts";
import { buttonVariants } from "@/shared/ui/button.tsx";

interface Props {
  isOpen: boolean;
  onClick: (event: MouseEvent<SVGElement>) => void;
  className?: string;
}

const PasswordToggle: FC<Props> = ({ isOpen, onClick, className }) => {
  return isOpen ? (
    <FaEye
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
    <FaEyeSlash
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
