import { FC } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/shared/ui/sheet";
import { Button, buttonVariants } from "@/shared/ui/button";
import { Home, List, X } from "lucide-react";
import { cn } from "@/shared/lib/cn";
import { MenuList } from "@/widgets/menu/ui/menu-list";
import { useNavigate } from "react-router-dom";
import { menuItems } from "@/shared/constants/routes";

interface Props {
  className?: string;
}

export const Sidebar: FC<Props> = ({ className }) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/");
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <List className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className={cn(className)}>
        <div className="mb-6 flex items-center justify-between">
          <Button onClick={onClick} variant="ghost">
            <Home className="h-5 w-5" />
          </Button>
          <SheetClose
            className={cn(
              buttonVariants({
                variant: "ghost",
              }),
            )}
          >
            <X className="h-4 w-4" />
          </SheetClose>
        </div>
        <MenuList menuItems={menuItems} />
      </SheetContent>
    </Sheet>
  );
};

Sidebar.displayName = "sidebar";
