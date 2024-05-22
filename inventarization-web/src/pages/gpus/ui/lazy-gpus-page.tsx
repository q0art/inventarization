import { FC, lazy } from "react";

const LazyGpusPage: FC = lazy(() => import("./gpus-page"));

LazyGpusPage.displayName = "lazy-gpus-page";

export { LazyGpusPage };
