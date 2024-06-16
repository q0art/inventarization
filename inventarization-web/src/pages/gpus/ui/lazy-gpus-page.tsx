import { FC, lazy } from "react";

export const LazyGpusPage: FC = lazy(() => import("./gpus-page"));
