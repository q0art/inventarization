import { FC, lazy } from "react";

export const LazyCoolersPage: FC = lazy(() => import("./coolers-page"));

LazyCoolersPage.displayName = "lazy-coolers-page";
