import { FC, lazy } from "react";

const LazySignUpPage: FC = lazy(() => import("./sign-up-page"));

export { LazySignUpPage };
