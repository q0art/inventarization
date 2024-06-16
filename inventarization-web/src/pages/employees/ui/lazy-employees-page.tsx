import { FC, lazy } from "react";

export const LazyEmployeesPage: FC = lazy(() => import("./employees-page"));
