import { FC, lazy } from "react";

export const LazySsdsPage: FC = lazy(() => import("./ssds-page"));

LazySsdsPage.displayName = "lazy-ssds-page";
