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
    isAuth: true,
  },
  [AppRoutes.EMPLOYEES]: {
    path: getRouteEmployees(),
    element: <LazyEmployeesPage />,
    isAuth: true,
  },
  //
  [AppRoutes.WORKSPACE]: {
    path: getRouteWorkspaceById(":id"),
    element: <LazyWorkspacePage />,
    isAuth: true,
  },
  [AppRoutes.WORKSPACES]: {
    path: getRouteWorkspaces(),
    element: <LazyWorkspacesPage />,
    isAuth: true,
  },
  //
  [AppRoutes.DEPARTAMENTS]: {
    path: getRouteDepartaments(),
    element: <LazyDepartamentsPage />,
    isAuth: true,
  },
  [AppRoutes.BRANDS]: {
    path: getRouteBrand(),
    element: <LazyBrandsPage />,
    isAuth: true,
  },
  //
  [AppRoutes.DESKTOP]: {
    path: getRouteDesktopById(":id"),
    element: <LazyDesktopPage />,
    isAuth: true,
  },
  [AppRoutes.DESKTOPS]: {
    path: getRouteDesktops(),
    element: <LazyDesktopsPage />,
    isAuth: true,
  },
  //
  [AppRoutes.MONITORS]: {
    path: getRouteMonitors(),
    element: <LazyMonitorsPage />,
    isAuth: true,
  },
  [AppRoutes.MOUSES]: {
    path: getRouteMouses(),
    element: <LazyMousePage />,
    isAuth: true,
  },
  [AppRoutes.MOUSEPADS]: {
    path: getRouteMousePads(),
    element: <LazyMousepadsPage />,
    isAuth: true,
  },
  [AppRoutes.KEYBOARDS]: {
    path: getRouteKeyboards(),
    element: <LazyKeyboardsPage />,
    isAuth: true,
  },
  [AppRoutes.HEADPHONES]: {
    path: getRouteHeadphones(),
    element: <LazyHeadphonesPage />,
    isAuth: true,
  },
  //
  [AppRoutes.CPUS]: {
    path: getRouteCpus(),
    element: <LazyCpusPage />,
    isAuth: true,
  },
  [AppRoutes.GPUS]: {
    path: getRouteGpus(),
    element: <LazyGpusPage />,
    isAuth: true,
  },
  [AppRoutes.MOTHERBOARDS]: {
    path: getRouteMotherboards(),
    element: <LazyMotherboardsPage />,
    isAuth: true,
  },
  [AppRoutes.RAMS]: {
    path: getRouteRams(),
    element: <LazyRamsPage />,
    isAuth: true,
  },
  [AppRoutes.SSDS]: {
    path: getRouteSsds(),
    element: <LazySsdsPage />,
    isAuth: true,
  },
  [AppRoutes.COOLERS]: {
    path: getRouteCoolers(),
    element: <LazyCoolersPage />,
    isAuth: true,
  },
  [AppRoutes.CASES]: {
    path: getRouteCases(),
    element: <LazyCasesPage />,
    isAuth: true,
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
