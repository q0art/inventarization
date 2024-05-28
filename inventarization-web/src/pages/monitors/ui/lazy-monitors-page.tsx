import { FC, lazy } from "react";

const LazyMonitorsPage: FC = lazy(() => import("./monitors-page.tsx"));

LazyMonitorsPage.displayName = "lazy-monitors-page";

export { LazyMonitorsPage };
