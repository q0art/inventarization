import { FC, ReactNode } from "react";
import { Location, Navigate, useLocation } from "react-router-dom";

import { useAuth } from "@/shared/hooks/use-auth.ts";
import { RouterState } from "@/shared/types/router-state.ts";

interface Props {
  children?: ReactNode;
}

const AuthProvider: FC<Props> = ({ children }) => {
  const isAuth = useAuth();
  const location: Location<RouterState> = useLocation();

  if (!isAuth)
    return (
      <Navigate
        to={"/auth/sign-in"}
        replace
        state={{
          pathname: location.pathname,
        }}
      />
    );

  return <>{children}</>;
};

AuthProvider.displayName = "auth-provider";

export { AuthProvider };
