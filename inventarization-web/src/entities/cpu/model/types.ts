export type Cpu = {
  id: string;
  model: string;
  manufacturerCode: string;
  brandId: string;
  createdAt: string;
  updatedAt: string;
};

export type CpuWithBrandName = {
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

export type CreateCpuDto = {
  model: string;
  manufacturerCode: string;
  brandId: string;
};

export type UpdateCpuDto = {
  model?: string;
  manufacturerCode?: string;
  brandId?: string;
};
