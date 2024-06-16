import { FC, lazy } from "react";

export const LazyWorkspacePage: FC = lazy(() => import("./workspace-page"));
