import { AppRoutesProps } from "@/shared/types/routes";
import { PageLoader } from "@/widgets/page-loader/ui/page-loader";
import { FC, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "@/app/providers/auth-provider";
import { routesWithAuthLayout, routesWithRootLayout } from "../lib/routes";
import { LazyRootLayout } from "@/app/layouts/root-layot";
import { LazyAuthLayout } from "@/app/layouts/auth-layout";

export const RouterProvider: FC = () => {
  const render = (route: AppRoutesProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
    );

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

RouterProvider.displayName = "router-provider";
