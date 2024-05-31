import { FC, lazy } from "react";

export const LazyKeyboardsPage: FC = lazy(() => import("./keyboards-page"));

LazyKeyboardsPage.displayName = "lazy-keyboards-page";
