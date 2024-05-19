import { FC, lazy } from "react";

const LazySignInPage: FC = lazy(() => import("./sign-in-page"));

LazySignInPage.displayName = "lazy-sign-in-page";

export { LazySignInPage };
