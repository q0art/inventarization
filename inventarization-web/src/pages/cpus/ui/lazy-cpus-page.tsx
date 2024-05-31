import { FC, lazy } from "react";

export const LazyCpusPage: FC = lazy(() => import("./cpus-page"));

LazyCpusPage.displayName = "lazy-cpus-page";
