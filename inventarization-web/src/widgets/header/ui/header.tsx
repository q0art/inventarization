import { Home, List, X } from "lucide-react";
import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";

import { menuItems } from "@/shared/configs/menu-items";
import { useUser } from "@/shared/hooks/use-user";
import { cn } from "@/shared/lib/cn";
import { Button, buttonVariants } from "@/shared/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/shared/ui/sheet";
import { Container } from "@/widgets/container";
import { MenuList } from "@/widgets/menu/ui/menu-list";
import { ThemeToggle } from "@/widgets/theme-toggle";

interface Props {
  className?: string;
}

const Header: FC<Props> = ({ className }) => {
  const user = useUser();

  const navigate = useNavigate();

  const onClick = () => {
    navigate("/");
  };

  return (
    <header
      className={cn(
        "border-b-[1px] border-neutral-500 py-3 md:py-5 xl:py-7",
        className,
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost">
                  <List className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
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

            {user ? (
              <span>{user.email}</span>
            ) : (
              <div className="flex items-center gap-3">
                <Button variant="link">
                  <Link to={"/auth/sign-in"}>sign in</Link>
                </Button>
                <Button variant="link">
                  <Link to={"/auth/sign-up"}>sign up</Link>
                </Button>
              </div>
            )}
          </div>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
};

Header.displayName = "header";

export { Header };
