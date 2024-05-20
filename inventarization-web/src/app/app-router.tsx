import { FC, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LazyAuthLayout } from "@/app/layouts/auth-layout";
import { LazyRootLayout } from "@/app/layouts/root-layot";
import { AuthProvider } from "@/app/providers/auth-provider";
import { LazyBrandsPage } from "@/pages/brands";
import { LazyDepartamentPage } from "@/pages/departaments";
import { LazyNotFoundPage } from "@/pages/not-found-page";
import { LazyRootPage } from "@/pages/root-page";
import { LazySignInPage } from "@/pages/sign-in-page";
import { LazySignUpPage } from "@/pages/sign-up-page";

const AppRouter: FC = () => {
  return (
    <Suspense>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LazyRootLayout />}>
            <Route index element={<LazyRootPage />} />
            <Route
              path="/brands"
              element={
                <AuthProvider>
                  <LazyBrandsPage />
                </AuthProvider>
              }
            />
            <Route
              path="/departaments"
              element={
                <AuthProvider>
                  <LazyDepartamentPage />
                </AuthProvider>
              }
            />
          </Route>

          <Route path="/auth" element={<LazyAuthLayout />}>
            <Route path="sign-in" element={<LazySignInPage />} />
            <Route path="sign-up" element={<LazySignUpPage />} />
          </Route>

          <Route path="*" element={<LazyNotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

AppRouter.displayName = "app-router";

export default AppRouter;
