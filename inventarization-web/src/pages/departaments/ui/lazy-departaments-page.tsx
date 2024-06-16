import { FC, lazy } from "react";

export const LazyDepartamentsPage: FC = lazy(
  () => import("./departaments-page"),
);
