import { X } from "lucide-react";
import { FC } from "react";
import { Link } from "react-router-dom";

import { SignOut } from "@/features/sign-out";
import { useAppDispatch } from "@/shared/hooks/use-app-dispatch.ts";
import { useOnClickOutside } from "@/shared/hooks/use-click-outside.ts";
import { Button } from "@/shared/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/shared/ui/command";
import { toggleSidebar } from "@/widgets/sidebar";

interface Props {
  commands: { name: string; link: string }[];
  isOpen: boolean;
}

const Sidebar: FC<Props> = ({ isOpen, commands }) => {
  const dispatch = useAppDispatch();
  const ref = useOnClickOutside(() => {
    dispatch(toggleSidebar(false));
  });

  const onClickClose = () => {
    dispatch(toggleSidebar(false));
  };

  return isOpen ? (
    <aside
      ref={ref}
      className="fixed left-0 top-0 z-50 h-full w-full border-r-[1px] border-neutral-500 bg-neutral-100 dark:bg-neutral-900 sm:min-w-[150px] sm:max-w-fit"
    >
      <div className="flex flex-col items-start gap-6 px-6 py-3">
        <div className="flex w-full justify-end">
          <Button onClick={onClickClose} variant="ghost">
            <X />
          </Button>
        </div>

        <Command>
          <CommandInput />
          <CommandEmpty>not found</CommandEmpty>
          <CommandList>
            <CommandGroup heading="all categories">
              {commands.map((command) => (
                <CommandItem
                  key={command.link}
                  className="cursor-pointer active:scale-90"
                >
                  <Link to={command.link}>{command.name}</Link>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>

        <SignOut />
      </div>
    </aside>
  ) : null;
};

Sidebar.displayName = "sidebar";

export { Sidebar };
