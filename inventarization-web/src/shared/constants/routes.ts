import { AppRoutes as R } from "@/shared/types/route";

export const getRouteRoot = () => "";
//
export const getRouteSignIn = () => "sign-in";
export const getRouteSignUp = () => "sign-up";
//
export const getRouteEmployees = () => "employees";
export const getRouteEmployeeById = (id: string) => `employees/${id}`;
//
export const getRouteWorkspaces = () => "workspaces";
export const getRouteWorkspaceById = (id: string) => `workspaces/${id}`;
//
export const getRouteDepartaments = () => "departaments";
export const getRouteBrand = () => "brands";
//
export const getRouteDesktops = () => "desktops";
export const getRouteDesktopById = (id: string) => `desktops/${id}`;
//
export const getRouteMonitors = () => "monitors";
export const getRouteMouses = () => "mouses";
export const getRouteMousePads = () => "mousepads";
export const getRouteKeyboards = () => "keyboards";
export const getRouteHeadphones = () => "headphones";
//
export const getRouteCpus = () => "cpus";
export const getRouteGpus = () => "gpu";
export const getRouteMotherboards = () => "motherboards";
export const getRouteRams = () => "rams";
export const getRouteSsds = () => "ssds";
export const getRouteCoolers = () => "coolers";
export const getRouteCases = () => "cases";

export const AppRouteByPath: Record<string, R> = {
  [getRouteRoot()]: R.ROOT,
  //
  [getRouteSignIn()]: R.SIGN_IN,
  [getRouteSignUp()]: R.SIGN_UP,
  //
  [getRouteEmployees()]: R.EMPLOYEES,
  [getRouteEmployeeById(":id")]: R.EMPLOYEE,
  //
  [getRouteWorkspaces()]: R.WORKSPACES,
  [getRouteWorkspaceById(":id")]: R.WORKSPACE,
  //
  [getRouteDepartaments()]: R.DEPARTAMENTS,
  [getRouteBrand()]: R.BRANDS,
  //
  [getRouteDesktops()]: R.DESKTOPS,
  [getRouteDesktopById(":id")]: R.DESKTOP,
  //
  [getRouteMonitors()]: R.MONITORS,
  [getRouteMouses()]: R.MOUSES,
  [getRouteMousePads()]: R.MOUSEPADS,
  [getRouteKeyboards()]: R.KEYBOARDS,
  [getRouteHeadphones()]: R.HEADPHONES,
  //
  [getRouteCpus()]: R.CPUS,
  [getRouteGpus()]: R.GPUS,
  [getRouteMotherboards()]: R.MOTHERBOARDS,
  [getRouteRams()]: R.RAMS,
  [getRouteSsds()]: R.SSDS,
  [getRouteCoolers()]: R.COOLERS,
  [getRouteCases()]: R.CASES,
};
