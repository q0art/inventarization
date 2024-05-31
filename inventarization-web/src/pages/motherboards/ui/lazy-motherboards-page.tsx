import { FC, lazy } from "react";

export const LazyMotherboardsPage: FC = lazy(
  () => import("./motherboards-page"),
);

LazyMotherboardsPage.displayName = "lazy-motherboard-page";
