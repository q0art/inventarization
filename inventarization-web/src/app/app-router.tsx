import { FC, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LazyAuthLayout } from "@/app/layouts/auth-layout";
import { LazyRootLayout } from "@/app/layouts/root-layot";
import { AuthProvider } from "@/app/providers/auth-provider";
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
