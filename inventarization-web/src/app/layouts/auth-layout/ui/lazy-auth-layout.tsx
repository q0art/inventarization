import { FC, lazy } from "react";

const LazyAuthLayout: FC = lazy(() => import("./auth-layout"));

export { LazyAuthLayout };
