import { FC, lazy } from "react";

const LazyCasesPage: FC = lazy(() => import("./cases-page.tsx"));

LazyCasesPage.displayName = "lazy-cases-page";

export { LazyCasesPage };
