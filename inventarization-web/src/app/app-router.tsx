import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FC, Suspense } from "react";
import { LazyRootPage } from "@/pages/root-page";

const AppRouter: FC = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route index path={"/"} element={<LazyRootPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default AppRouter;
