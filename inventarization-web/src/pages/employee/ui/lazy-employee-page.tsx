import { FC, lazy } from "react";

export const LazyEmployeePage: FC = lazy(() => import("./employee-page"));
