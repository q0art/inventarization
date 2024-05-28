import { FC, lazy } from "react";

const LazyKeyboardsPage: FC = lazy(() => import("./keyboards-page.tsx"));

LazyKeyboardsPage.displayName = "lazy-keyboards-page";

export { LazyKeyboardsPage };
