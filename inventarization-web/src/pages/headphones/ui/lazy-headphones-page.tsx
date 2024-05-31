import { FC, lazy } from "react";

export const LazyHeadphonesPage: FC = lazy(() => import("./headphones-page"));

LazyHeadphonesPage.displayName = "lazy-headphones-page";
