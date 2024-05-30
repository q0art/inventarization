import { AppRoutes, AppRoutesProps } from "@/shared/types/route";
import {
  getRouteBrand,
  getRouteCases,
  getRouteCoolers,
  getRouteCpus,
  getRouteDepartaments,
  getRouteDesktopById,
  getRouteDesktops,
  getRouteEmployeeById,
  getRouteEmployees,
  getRouteGpus,
  getRouteHeadphones,
  getRouteKeyboards,
  getRouteMonitors,
  getRouteMotherboards,
  getRouteMousePads,
  getRouteMouses,
  getRouteRams,
  getRouteRoot,
  getRouteSignIn,
  getRouteSignUp,
  getRouteSsds,
  getRouteWorkspaceById,
  getRouteWorkspaces,
} from "@/shared/constants/routes";

import { LazyRootPage } from "@/pages/root-page";
import { LazySignInPage } from "@/pages/sign-in-page";
import { LazySignUpPage } from "@/pages/sign-up-page";
import NotFoundPage from "@/pages/not-found-page/ui/not-found-page";

type R = Partial<Record<AppRoutes, AppRoutesProps>>;

export const routesWithRootLayout: R = {
  [AppRoutes.ROOT]: {
    path: getRouteRoot(),
    element: <LazyRootPage />,
  },
  //
  [AppRoutes.EMPLOYEE]: {
    path: getRouteEmployeeById(":id"),
    element: null,
  },
  [AppRoutes.EMPLOYEES]: {
    path: getRouteEmployees(),
    element: null,
  },
  //
  [AppRoutes.WORKSPACE]: {
    path: getRouteWorkspaceById(":id"),
    element: null,
  },
  [AppRoutes.WORKSPACES]: {
    path: getRouteWorkspaces(),
    element: null,
  },
  //
  [AppRoutes.DEPARTAMENTS]: {
    path: getRouteDepartaments(),
    element: null,
  },
  [AppRoutes.BRANDS]: {
    path: getRouteBrand(),
    element: null,
  },
  //
  [AppRoutes.DESKTOP]: {
    path: getRouteDesktopById(":id"),
    element: null,
  },
  [AppRoutes.DESKTOPS]: {
    path: getRouteDesktops(),
    element: null,
  },
  //
  [AppRoutes.MONITORS]: {
    path: getRouteMonitors(),
    element: null,
  },
  [AppRoutes.MOUSES]: {
    path: getRouteMouses(),
    element: null,
  },
  [AppRoutes.MOUSEPADS]: {
    path: getRouteMousePads(),
    element: null,
  },
  [AppRoutes.KEYBOARDS]: {
    path: getRouteKeyboards(),
    element: null,
  },
  [AppRoutes.HEADPHONES]: {
    path: getRouteHeadphones(),
    element: null,
  },
  //
  [AppRoutes.CPUS]: {
    path: getRouteCpus(),
    element: null,
  },
  [AppRoutes.GPUS]: {
    path: getRouteGpus(),
    element: null,
  },
  [AppRoutes.MOTHERBOARDS]: {
    path: getRouteMotherboards(),
    element: null,
  },
  [AppRoutes.RAMS]: {
    path: getRouteRams(),
    element: null,
  },
  [AppRoutes.SSDS]: {
    path: getRouteSsds(),
    element: null,
  },
  [AppRoutes.COOLERS]: {
    path: getRouteCoolers(),
    element: null,
  },
  [AppRoutes.CASES]: {
    path: getRouteCases(),
    element: null,
  },
  //
  [AppRoutes.NOT_FOUND]: {
    path: "*",
    element: <NotFoundPage />,
  },
};

export const routesWithAuthLayout: R = {
  [AppRoutes.SIGN_IN]: {
    path: getRouteSignIn(),
    element: <LazySignInPage />,
  },
  [AppRoutes.SIGN_UP]: {
    path: getRouteSignUp(),
    element: <LazySignUpPage />,
  },
};
