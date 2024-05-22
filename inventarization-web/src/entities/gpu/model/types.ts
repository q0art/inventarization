export type Gpu = {
  id: string;
  model: string;
  manufacturerCode: string;
  brandId: string;
  createdAt: string;
  updatedAt: string;
};

export type GpuWithBrandName = {
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

export type CreateGpuDto = {
  model: string;
  manufacturerCode: string;
  brandId: string;
};

export type UpdateGpuDto = {
  model?: string;
  manufacturerCode?: string;
  brandId?: string;
};
