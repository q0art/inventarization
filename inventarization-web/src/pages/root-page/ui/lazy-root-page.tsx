import { FC, lazy } from "react";

const LazyRootPage: FC = lazy(() => import("./root-page"));

LazyRootPage.displayName = "lazy-root-page";

export { LazyRootPage };
