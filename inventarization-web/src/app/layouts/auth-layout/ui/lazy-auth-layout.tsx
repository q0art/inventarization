import { FC, lazy } from "react";

const LazyAuthLayout: FC = lazy(() => import("./auth-layout"));

LazyAuthLayout.displayName = "lazy-auth-layout";

export { LazyAuthLayout };
