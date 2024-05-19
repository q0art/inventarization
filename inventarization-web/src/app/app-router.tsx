import { FC, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LazyRootLayout } from "@/app/layouts/root-layot";
import { LazyRootPage } from "@/pages/root-page";
import { LazyNotFoundPage } from "@/pages/not-found-page";

const AppRouter: FC = () => {
  return (
    <Suspense>
      <BrowserRouter>
        <Routes>
          <Route element={<LazyRootLayout />}>
            <Route index path={"/"} element={<LazyRootPage />} />
          </Route>

          <Route path="*" element={<LazyNotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

AppRouter.displayName = "app-router";

export default AppRouter;
