import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "@/shared/hooks/use-auth.ts";

interface Props {
  children?: ReactNode;
}

export const AuthProvider: FC<Props> = ({ children }) => {
  const isAuth = useAuth();

  if (!isAuth) return <Navigate to={"/auth/sign-in"} replace />;

  return <>{children}</>;
};

AuthProvider.displayName = "auth-provider";
