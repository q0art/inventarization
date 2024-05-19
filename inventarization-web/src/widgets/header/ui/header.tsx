import { FC } from "react";

import { Container } from "@/widgets/container";
import { ThemeToggle } from "@/widgets/theme-toggle";
import { cn } from "@/shared/lib/cn.ts";
import { useUser } from "@/shared/hooks/use-user.ts";
import { Button } from "@/shared/ui/button.tsx";
import { Link } from "react-router-dom";
import { FaList } from "react-icons/fa6";
import { useAppDispatch } from "@/shared/hooks/use-app-dispatch.ts";
import { toggleSidebar } from "@/widgets/sidebar";

interface Props {
  className?: string;
}

const Header: FC<Props> = ({ className }) => {
  const dispatch = useAppDispatch();
  const user = useUser();

  const onClick = () => {
    dispatch(toggleSidebar(true));
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
            <Button onClick={onClick} variant="ghost">
              <FaList />
            </Button>

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
