import { FC, lazy } from "react";

export const LazyDesktopPage: FC = lazy(() => import("./desktop-page"));
