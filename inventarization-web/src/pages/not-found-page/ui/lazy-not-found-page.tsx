import { FC, lazy } from "react";

export const LazyNotFoundPage: FC = lazy(() => import("./not-found-page"));

LazyNotFoundPage.displayName = "lazy-not-found-page";
