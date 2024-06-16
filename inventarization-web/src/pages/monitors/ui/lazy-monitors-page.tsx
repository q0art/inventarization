import { FC, lazy } from "react";

export const LazyMonitorsPage: FC = lazy(() => import("./monitors-page"));
