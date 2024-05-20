import { FC, lazy } from "react";

const LazyDepartamentPage: FC = lazy(() => import("./departament-page"));

export { LazyDepartamentPage };
