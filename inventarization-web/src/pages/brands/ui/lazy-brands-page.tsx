import { FC, lazy } from "react";

export const LazyBrandsPage: FC = lazy(() => import("./brands-page"));

LazyBrandsPage.displayName = "lazy-brands-page";
