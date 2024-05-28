import { FC, lazy } from "react";

const LazyCoolersPage: FC = lazy(() => import("./coolers-page.tsx"));

LazyCoolersPage.displayName = "lazy-coolers-page";

export { LazyCoolersPage };
