import { FC, lazy } from "react";

export const LazyRootPage: FC = lazy(() => import("./root-page"));
