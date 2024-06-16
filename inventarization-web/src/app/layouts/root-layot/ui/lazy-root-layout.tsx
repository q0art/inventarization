import { FC, lazy } from "react";

const LazyRootLayout: FC = lazy(() => import("./root-layout"));

export { LazyRootLayout };
