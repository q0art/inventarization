import { FC, lazy } from "react";

export const LazyNotFoundPage: FC = lazy(() => import("./not-found-page"));
