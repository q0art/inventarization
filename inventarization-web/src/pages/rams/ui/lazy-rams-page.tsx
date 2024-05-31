import { FC, lazy } from "react";

export const LazyRamsPage: FC = lazy(() => import("./rams-page"));

LazyRamsPage.displayName = "lazy-rams-page";
