import { FC } from "react";
import { Button } from "@/shared/ui/button";
import { FaXmark } from "react-icons/fa6";
import { useAppDispatch } from "@/shared/hooks/use-app-dispatch.ts";
import { toggleSidebar } from "@/widgets/sidebar";
import { useOnClickOutside } from "@/shared/hooks/use-click-outside.ts";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/shared/ui/command";
import { Link, useNavigate } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";

interface Props {
  commands: { name: string; link: string }[];
  isOpen: boolean;
}

const Sidebar: FC<Props> = ({ isOpen, commands }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const ref = useOnClickOutside(() => {
    dispatch(toggleSidebar(false));
  });

  const onClickProfile = () => {
    navigate("/user/profile");
  };

  const onClickClose = () => {
    dispatch(toggleSidebar(false));
  };

  return isOpen ? (
    <aside
      ref={ref}
      className="fixed left-0 top-0 z-10 h-full w-full border-r-[1px] border-neutral-500 bg-neutral-100 sm:min-w-[150px] sm:max-w-fit dark:bg-neutral-900"
    >
      <div className="flex flex-col items-start gap-6 px-6 py-3">
        <div className="flex w-full items-center justify-between">
          <FaCircleUser
            onClick={onClickProfile}
            className="h-10 w-10 cursor-pointer delay-75 hover:opacity-30 active:scale-90"
          />

          <Button onClick={onClickClose} variant="ghost" className="mr-0">
            <FaXmark />
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
      </div>
    </aside>
  ) : null;
};

Sidebar.displayName = "sidebar";

export { Sidebar };
