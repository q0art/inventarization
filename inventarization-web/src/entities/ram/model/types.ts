export type Ram = {
  id: string;
  model: string;
  manufacturerCode: string;
  brandId: string;
  createdAt: string;
  updatedAt: string;
};

export type RamWithBrandName = {
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

export type CreateRamDto = {
  model: string;
  manufacturerCode: string;
  brandId: string;
};

export type UpdateRamDto = {
  model?: string;
  manufacturerCode?: string;
  brandId?: string;
};
