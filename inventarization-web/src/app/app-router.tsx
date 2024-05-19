import { FC, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LazyRootLayout } from "@/app/layouts/root-layot";
import { LazyRootPage } from "@/pages/root-page";
import { LazyNotFoundPage } from "@/pages/not-found-page";
import { LazyAuthLayout } from "@/app/layouts/auth-layout";
import { AuthProvider } from "@/app/providers/auth-provider";
import { LazySignInPage } from "@/pages/sign-in-page";

const AppRouter: FC = () => {
  return (
    <Suspense>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LazyRootLayout />}>
            <Route index element={<LazyRootPage />} />
            <Route
              path="/employee"
              element={
                <AuthProvider>
                  <div>employee</div>
                </AuthProvider>
              }
            />
          </Route>

          <Route path="/auth" element={<LazyAuthLayout />}>
            <Route path="sign-in" element={<LazySignInPage />} />
            <Route path="sign-up" element={<div>sign-up</div>} />
          </Route>

          <Route path="*" element={<LazyNotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

AppRouter.displayName = "app-router";

export default AppRouter;
