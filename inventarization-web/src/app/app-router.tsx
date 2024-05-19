import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FC, Suspense } from "react";
import { LazyRootPage } from "@/pages/root-page";
import { LazyRootLayout } from "@/app/layouts/root-layot";

const AppRouter: FC = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route element={<LazyRootLayout />}>
            <Route index path={"/"} element={<LazyRootPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default AppRouter;
