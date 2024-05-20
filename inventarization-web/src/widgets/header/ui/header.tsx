import { List } from "lucide-react";
import { FC } from "react";
import { Link } from "react-router-dom";

import { useAppDispatch } from "@/shared/hooks/use-app-dispatch.ts";
import { useUser } from "@/shared/hooks/use-user.ts";
import { cn } from "@/shared/lib/cn.ts";
import { Button } from "@/shared/ui/button.tsx";
import { Container } from "@/widgets/container";
import { toggleSidebar } from "@/widgets/sidebar";
import { ThemeToggle } from "@/widgets/theme-toggle";

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
              <List />
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
