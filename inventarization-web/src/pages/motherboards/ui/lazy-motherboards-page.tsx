import { FC, lazy } from "react";

const LazyMotherboardsPage: FC = lazy(() => import("./motherboards-page"));

LazyMotherboardsPage.displayName = "lazy-motherboard-page";

export { LazyMotherboardsPage };
