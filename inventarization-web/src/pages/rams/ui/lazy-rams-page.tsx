import { FC, lazy } from "react";

const LazyRamsPage: FC = lazy(() => import("./rams-page"));

LazyRamsPage.displayName = "lazy-rams-page";

export { LazyRamsPage };
