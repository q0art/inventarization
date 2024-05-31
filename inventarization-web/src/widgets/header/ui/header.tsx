import { FC } from "react";
import { Link } from "react-router-dom";

import { useUser } from "@/shared/hooks/use-user";
import { cn } from "@/shared/lib/cn";
import { Button } from "@/shared/ui/button";
import { ThemeToggle } from "@/widgets/theme-toggle";
import { Sidebar } from "@/widgets/sidebar/";

interface Props {
  className?: string;
}

export const Header: FC<Props> = ({ className }) => {
  const user = useUser();

  return (
    <header
      className={cn(
        "border-b-[1px] border-neutral-500 py-3 md:py-5 xl:py-7",
        className,
      )}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Sidebar />

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
      </div>
    </header>
  );
};

Header.displayName = "header";
