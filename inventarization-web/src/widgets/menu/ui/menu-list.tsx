import { FC } from "react";

import { SignOut } from "@/features/sign-out";
import { cn } from "@/shared/lib/cn";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandList,
} from "@/shared/ui/command";

import { MenuItem } from "./menu-item";

interface Props {
  menuItems: { href: string; text: string }[];
  className?: string;
}

export const MenuList: FC<Props> = ({ menuItems, className }) => {
  return (
    <Command className={cn("flex h-fit flex-col gap-3 pb-6", className)}>
      <CommandInput placeholder="search..." />
      <CommandList>
        <CommandEmpty>not found 😭</CommandEmpty>
        {menuItems.map(({ href, text }) => (
          <MenuItem key={href} href={href} text={text} />
        ))}
      </CommandList>
      <SignOut className="mx-3" />
    </Command>
  );
};

MenuList.displayName = "menu-list";
