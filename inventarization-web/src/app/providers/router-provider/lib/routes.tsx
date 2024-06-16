import { LazyBrandsPage } from "@pages/brands";
import { LazyCasesPage } from "@pages/cases";
import { LazyCoolersPage } from "@pages/coolers";
import { LazyCpusPage } from "@pages/cpus";
import { LazyDepartamentsPage } from "@pages/departaments";
import { LazyDesktopPage } from "@pages/desktop";
import { LazyDesktopsPage } from "@pages/desktops/ui/lazy-desktops-page";
import { LazyEmployeePage } from "@pages/employee";
import { LazyEmployeesPage } from "@pages/employees";
import { LazyGpusPage } from "@pages/gpus";
import { LazyHeadphonesPage } from "@pages/headphones";
import { LazyKeyboardsPage } from "@pages/keyboards";
import { LazyMonitorsPage } from "@pages/monitors";
import { LazyMotherboardsPage } from "@pages/motherboards";
import { LazyMousepadsPage } from "@pages/mousepads";
import { LazyMousePage } from "@pages/mouses";
import { LazyNotFoundPage } from "@pages/not-found-page";
import { LazyRamsPage } from "@pages/rams";
import { LazyRootPage } from "@pages/root-page";
import { LazySignInPage } from "@pages/sign-in-page";
import { LazySignUpPage } from "@pages/sign-up-page";
import { LazySsdsPage } from "@pages/ssds";
import { LazyWorkspacePage } from "@pages/workspace";
import { LazyWorkspacesPage } from "@pages/workspaces";
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
} from "@shared/constants/routes";
import { AppRoutes, AppRoutesProps } from "@shared/types/routes";

type R = Partial<Record<AppRoutes, AppRoutesProps>>;

export const routesWithRootLayout: R = {
  [AppRoutes.ROOT]: {
    path: getRouteRoot(),
    element: <LazyRootPage />,
  },
  //
  [AppRoutes.EMPLOYEE]: {
    path: getRouteEmployeeById(":id"),
    element: <LazyEmployeePage />,
  },
  [AppRoutes.EMPLOYEES]: {
    path: getRouteEmployees(),
    element: <LazyEmployeesPage />,
  },
  //
  [AppRoutes.WORKSPACE]: {
    path: getRouteWorkspaceById(":id"),
    element: <LazyWorkspacePage />,
  },
  [AppRoutes.WORKSPACES]: {
    path: getRouteWorkspaces(),
    element: <LazyWorkspacesPage />,
  },
  //
  [AppRoutes.DEPARTAMENTS]: {
    path: getRouteDepartaments(),
    element: <LazyDepartamentsPage />,
  },
  [AppRoutes.BRANDS]: {
    path: getRouteBrand(),
    element: <LazyBrandsPage />,
  },
  //
  [AppRoutes.DESKTOP]: {
    path: getRouteDesktopById(":id"),
    element: <LazyDesktopPage />,
  },
  [AppRoutes.DESKTOPS]: {
    path: getRouteDesktops(),
    element: <LazyDesktopsPage />,
  },
  //
  [AppRoutes.MONITORS]: {
    path: getRouteMonitors(),
    element: <LazyMonitorsPage />,
  },
  [AppRoutes.MOUSES]: {
    path: getRouteMouses(),
    element: <LazyMousePage />,
  },
  [AppRoutes.MOUSEPADS]: {
    path: getRouteMousePads(),
    element: <LazyMousepadsPage />,
  },
  [AppRoutes.KEYBOARDS]: {
    path: getRouteKeyboards(),
    element: <LazyKeyboardsPage />,
  },
  [AppRoutes.HEADPHONES]: {
    path: getRouteHeadphones(),
    element: <LazyHeadphonesPage />,
  },
  //
  [AppRoutes.CPUS]: {
    path: getRouteCpus(),
    element: <LazyCpusPage />,
  },
  [AppRoutes.GPUS]: {
    path: getRouteGpus(),
    element: <LazyGpusPage />,
  },
  [AppRoutes.MOTHERBOARDS]: {
    path: getRouteMotherboards(),
    element: <LazyMotherboardsPage />,
  },
  [AppRoutes.RAMS]: {
    path: getRouteRams(),
    element: <LazyRamsPage />,
  },
  [AppRoutes.SSDS]: {
    path: getRouteSsds(),
    element: <LazySsdsPage />,
  },
  [AppRoutes.COOLERS]: {
    path: getRouteCoolers(),
    element: <LazyCoolersPage />,
  },
  [AppRoutes.CASES]: {
    path: getRouteCases(),
    element: <LazyCasesPage />,
  },
  //
  [AppRoutes.NOT_FOUND]: {
    path: "*",
    element: <LazyNotFoundPage />,
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
