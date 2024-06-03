interface Component {
  id: string;
  model: string;
  manufacturerCode: string;
}

export interface Desktop {
  id: string;
  name: string;
  cpuId: string;
  gpuId: string;
  ramId: string;
  ssdId: string;
  motherboardId: string;
  caseId: string;
  coolerId: string;
  createdAt: string;
  updatedAt: string;
}

export interface DesktopWithComponents {
  id: string;
  name: string;
  cpu: Component;
  gpu: Component;
  ram: Component;
  ssd: Component;
  motherboard: Component;
  case: Component;
  cooler: Component;
}

export interface CreateDesktopDto {
  name: string;
  cpuId: string;
  gpuId: string;
  ramId: string;
  ssdId: string;
  motherboardId: string;
  caseId: string;
  coolerId: string;
}

export interface UpdateDesktopDto {
  name?: string;
  cpuId?: string;
  gpuId?: string;
  ramId?: string;
  ssdId?: string;
  motherboardId?: string;
  caseId?: string;
  coolerId?: string;
}
