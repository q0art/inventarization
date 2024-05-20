import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { removeAuth, useSignOutMutation } from "@/entities/auth";
import { useAppDispatch } from "@/shared/hooks/use-app-dispatch";
import { useAuth } from "@/shared/hooks/use-auth";
import { cn } from "@/shared/lib/cn.ts";
import { Button } from "@/shared/ui/button.tsx";

interface Props {
  className?: string;
}

const SignOut: FC<Props> = ({ className }) => {
  const [signOut] = useSignOutMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isAuth = useAuth();

  const onClick = async () => {
    await signOut();

    dispatch(removeAuth());

    navigate("/auth/sign-in", { replace: true });
  };

  return isAuth ? (
    <Button onClick={onClick} variant="outline" className={cn("", className)}>
      sign out
    </Button>
  ) : null;
};

SignOut.displayName = "sign-out";

export { SignOut };
