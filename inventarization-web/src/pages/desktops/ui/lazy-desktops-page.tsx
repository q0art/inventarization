import { FC, lazy } from "react";

export const LazyDesktopsPage: FC = lazy(() => import("./desktops-page"));
