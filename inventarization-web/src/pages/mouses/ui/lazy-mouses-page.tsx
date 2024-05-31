import { FC, lazy } from "react";

export const LazyMousePage: FC = lazy(() => import("./mouses-page"));

LazyMousePage.displayName = "lazy-mouse-page";
