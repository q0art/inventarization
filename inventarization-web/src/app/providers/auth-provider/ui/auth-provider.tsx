import { useAuth } from "@shared/hooks/use-auth.ts";
import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface Props {
  children?: ReactNode;
}

export const AuthProvider: FC<Props> = ({ children }) => {
  const isAuth = useAuth();

  if (!isAuth) return <Navigate to={"/auth/sign-in"} replace />;

  return <>{children}</>;
};
