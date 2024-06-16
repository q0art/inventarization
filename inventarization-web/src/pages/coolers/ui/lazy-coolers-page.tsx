import { FC, lazy } from "react";

export const LazyCoolersPage: FC = lazy(() => import("./coolers-page"));
