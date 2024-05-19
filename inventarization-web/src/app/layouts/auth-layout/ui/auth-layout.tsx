import { FC } from "react";
import { Outlet } from "react-router-dom";

const AuthLayout: FC = () => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <Outlet />
    </div>
  );
};

AuthLayout.displayName = "auth-layout";

export default AuthLayout;
