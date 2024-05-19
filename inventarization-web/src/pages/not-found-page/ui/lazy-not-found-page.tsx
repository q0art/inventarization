import { FC, lazy } from "react";

const LazyNotFoundPage: FC = lazy(() => import("./not-found-page"));

LazyNotFoundPage.displayName = "lazy-not-found-page";

export { LazyNotFoundPage };
