import { Component } from "@shared/types/global";

export interface Workspace {
  id: string;
  name: string;
  monitorId: string;
  desktopId: string;
  mouseId: string;
  mousepadId: string;
  keyboardId: string;
  headphoneId: string;
  createdAt: string;
  updatedAt: string;
}

export interface WorkspaceWithComponents {
  id: string;
  name: string;
  desktop: {
    id: string;
    name: string;
  };
  monitor: Component;
  mouse: Component;
  mousepad: Component;
  keyboard: Component;
  headphone: Component;
}

export interface CreateWorkspaceDto {
  name: string;
  monitorId: string;
  desktopId: string;
  mouseId: string;
  mousepadId: string;
  keyboardId: string;
  headphoneId: string;
}

export interface UpdateWorkspaceDto {
  name?: string;
  monitorId?: string;
  desktopId?: string;
  mouseId?: string;
  mousepadId?: string;
  keyboardId?: string;
  headphoneId?: string;
}
