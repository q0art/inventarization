import { lazy } from "react";

const LazyRootPage = lazy(() => import("./root-page"));

export { LazyRootPage };
