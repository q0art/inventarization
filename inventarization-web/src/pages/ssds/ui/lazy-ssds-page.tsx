import { FC, lazy } from "react";

const LazySsdsPage: FC = lazy(() => import("./ssds-page"));

LazySsdsPage.displayName = "lazy-ssds-page";

export { LazySsdsPage };
