import { RouteProps } from "react-router-dom";

export type AppRoutesProps = RouteProps & {
  isAuth?: boolean;
};

export enum AppRoutes {
  ROOT = "root",
  //
  SIGN_IN = "sign in",
  SIGN_UP = "sign up",
  //
  EMPLOYEE = "employee",
  EMPLOYEES = "employees",
  //
  WORKSPACE = "workspace",
  WORKSPACES = "workspaces",
  //
  DEPARTAMENTS = "departaments",
  BRANDS = "brands",
  //
  DESKTOP = "desktop",
  DESKTOPS = "desktops",
  //
  MONITORS = "monitors",
  MOUSES = "mouses",
  MOUSEPADS = "mousepads",
  KEYBOARDS = "keyboards",
  HEADPHONES = "headphones",
  //
  CPUS = "cpus",
  GPUS = "gpus",
  MOTHERBOARDS = "motherboards",
  RAMS = "rams",
  SSDS = "ssds",
  COOLERS = "coolers",
  CASES = "cases",
  //
  NOT_FOUND = "not found",
}
