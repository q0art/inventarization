import { FC, lazy } from "react";

export const LazyWorkspacesPage: FC = lazy(() => import("./workspaces-page"));
