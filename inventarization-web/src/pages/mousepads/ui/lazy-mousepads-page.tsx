import { FC, lazy } from "react";

const LazyMousepadsPage: FC = lazy(() => import("./mousepads-page.tsx"));

LazyMousepadsPage.displayName = "lazy-mousepads-page";

export { LazyMousepadsPage };
