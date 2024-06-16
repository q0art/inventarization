import { getRouteSignIn } from "@shared/constants/routes";
import { useAuth } from "@shared/hooks/use-redux";
import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface Props {
  children?: ReactNode;
}

export const AuthProvider: FC<Props> = ({ children }) => {
  const isAuth = useAuth();

  if (!isAuth) return <Navigate to={getRouteSignIn()} replace />;

  return <>{children}</>;
};
