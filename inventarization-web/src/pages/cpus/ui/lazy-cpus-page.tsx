import { FC, lazy } from "react";

const LazyCpusPage: FC = lazy(() => import("./cpus-page.tsx"));

LazyCpusPage.displayName = "lazy-cpus-page";

export { LazyCpusPage };
