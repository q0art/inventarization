import { FC, lazy } from "react";

const LazyMousesPage: FC = lazy(() => import("./mouses-page.tsx"));

LazyMousesPage.displayName = "lazy-mouses-page";

export { LazyMousesPage };
