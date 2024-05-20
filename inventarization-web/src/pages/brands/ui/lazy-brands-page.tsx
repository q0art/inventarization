import { FC, lazy } from "react";

const LazyBrandsPage: FC = lazy(() => import("./brands-page"));

LazyBrandsPage.displayName = "lazy-brands-page";

export { LazyBrandsPage };
