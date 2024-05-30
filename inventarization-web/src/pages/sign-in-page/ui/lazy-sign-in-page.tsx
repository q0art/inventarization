import { FC, lazy } from "react";

export const LazySignInPage: FC = lazy(() => import("./sign-in-page"));

LazySignInPage.displayName = "lazy-sign-in-page";
