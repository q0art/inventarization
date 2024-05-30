import { Table } from "lucide-react";
import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { cn } from "@/shared/lib/cn.ts";
import { Button } from "@/shared/ui/button.tsx";
import { CommandItem } from "@/shared/ui/command.tsx";

interface Props {
  href: string;
  text: string;
  className?: string;
}

export const MenuItem: FC<Props> = ({ href, text, className }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const disabled =
    href.includes(location.pathname) && location.pathname !== "/";

  const onClick = () => {
    navigate(href);
  };

  return (
    <CommandItem className={cn("pl-5", className)}>
      <Button
        onClick={onClick}
        disabled={disabled}
        variant="link"
        className="flex w-full items-center justify-start gap-3"
      >
        <Table className="h-4 w-4" />
        <span>{text}</span>
      </Button>
    </CommandItem>
  );
};

MenuItem.displayName = "menu-item";
