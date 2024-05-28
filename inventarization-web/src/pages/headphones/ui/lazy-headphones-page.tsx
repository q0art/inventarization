import { FC, lazy } from "react";

const LazyHeadphonesPage: FC = lazy(() => import("./headphones-page.tsx"));

LazyHeadphonesPage.displayName = "lazy-headphones-page";

export { LazyHeadphonesPage };
