import { FC, lazy } from "react";

const LazyCpuPage: FC = lazy(() => import("./cpu-page"));

LazyCpuPage.displayName = "lazy-cpu-page";

export { LazyCpuPage };
