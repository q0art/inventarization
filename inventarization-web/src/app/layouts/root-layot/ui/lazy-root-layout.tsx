import { FC, lazy } from "react";

const LazyRootLayout: FC = lazy(() => import("./root-layout"));

LazyRootLayout.displayName = "lazy-root-layout";

export { LazyRootLayout };
