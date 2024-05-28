import { FC, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LazyAuthLayout } from "@/app/layouts/auth-layout";
import { LazyRootLayout } from "@/app/layouts/root-layot";
import { AuthProvider } from "@/app/providers/auth-provider";
import { LazyBrandsPage } from "@/pages/brands";
import { LazyCasesPage } from "@/pages/cases";
import { LazyCoolersPage } from "@/pages/coolers";
import { LazyCpusPage } from "@/pages/cpus";
import { LazyDepartamentPage } from "@/pages/departaments";
import { LazyGpusPage } from "@/pages/gpus";
import { LazyHeadphonesPage } from "@/pages/headphones";
import { LazyKeyboardsPage } from "@/pages/keyboards";
import { LazyMotherboardsPage } from "@/pages/motherboards";
import { LazyMousesPage } from "@/pages/mouses";
import { LazyNotFoundPage } from "@/pages/not-found-page";
import { LazyRamsPage } from "@/pages/rams";
import { LazyRootPage } from "@/pages/root-page";
import { LazySignInPage } from "@/pages/sign-in-page";
import { LazySignUpPage } from "@/pages/sign-up-page";
import { LazySsdsPage } from "@/pages/ssds";

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
            <Route
              path="/cpus"
              element={
                <AuthProvider>
                  <LazyCpusPage />
                </AuthProvider>
              }
            />
            <Route
              path="/gpus"
              element={
                <AuthProvider>
                  <LazyGpusPage />
                </AuthProvider>
              }
            />

            <Route
              path="/rams"
              element={
                <AuthProvider>
                  <LazyRamsPage />
                </AuthProvider>
              }
            />

            <Route
              path="/ssds"
              element={
                <AuthProvider>
                  <LazySsdsPage />
                </AuthProvider>
              }
            />

            <Route
              path="/motherboards"
              element={
                <AuthProvider>
                  <LazyMotherboardsPage />
                </AuthProvider>
              }
            />

            <Route
              path="/cases"
              element={
                <AuthProvider>
                  <LazyCasesPage />
                </AuthProvider>
              }
            />

            <Route
              path="/coolers"
              element={
                <AuthProvider>
                  <LazyCoolersPage />
                </AuthProvider>
              }
            />

            <Route
              path="/headphones"
              element={
                <AuthProvider>
                  <LazyHeadphonesPage />
                </AuthProvider>
              }
            />

            <Route
              path="/keyboards"
              element={
                <AuthProvider>
                  <LazyKeyboardsPage />
                </AuthProvider>
              }
            />

            <Route
              path="/mouses"
              element={
                <AuthProvider>
                  <LazyMousesPage />
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
