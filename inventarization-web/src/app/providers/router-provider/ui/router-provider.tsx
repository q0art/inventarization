import { LazyAuthLayout } from "@app/layouts/auth-layout";
import { LazyRootLayout } from "@app/layouts/root-layot";
import { AuthProvider } from "@app/providers/auth-provider";
import { AppRoutesProps } from "@shared/types/routes";
import { FC, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { routesWithAuthLayout, routesWithRootLayout } from "../lib/routes";

export const RouterProvider: FC = () => {
  const render = (route: AppRoutesProps) => {
    const element = <Suspense>{route.element}</Suspense>;

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.isAuth ? <AuthProvider>{element}</AuthProvider> : element
        }
      />
    );
  };

  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<LazyRootLayout />}>
            {Object.values(routesWithRootLayout).map(render)}
          </Route>

          <Route path="/auth" element={<LazyAuthLayout />}>
            {Object.values(routesWithAuthLayout).map(render)}
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
