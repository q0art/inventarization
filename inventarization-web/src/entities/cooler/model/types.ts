export type Cooler = {
  id: string;
  model: string;
  manufacturerCode: string;
  brandId: string;
  createdAt: string;
  updatedAt: string;
};

export type CoolerWithBrandName = {
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

export type CreateCoolerDto = {
  model: string;
  manufacturerCode: string;
  brandId: string;
};

export type UpdateCoolerDto = {
  model?: string;
  manufacturerCode?: string;
  brandId?: string;
};
