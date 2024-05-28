export type Monitor = {
  id: string;
  model: string;
  manufacturerCode: string;
  brandId: string;
  createdAt: string;
  updatedAt: string;
};

export type MonitorWithBrandName = {
  id: string;
  model: string;
  manufacturerCode: string;
  brandId: string;
  createdAt: string;
  updatedAt: string;
  brand: {
    id: string;
    name: string;
  };
};

export type CreateMonitorDto = {
  model: string;
  manufacturerCode: string;
  brandId: string;
};

export type UpdateMonitorDto = {
  model?: string;
  manufacturerCode?: string;
  brandId?: string;
};
