export type Motherboard = {
  id: string;
  model: string;
  manufacturerCode: string;
  brandId: string;
  createdAt: string;
  updatedAt: string;
};

export type MotherboardWithBrandName = {
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

export type CreateMotherboardDto = {
  model: string;
  manufacturerCode: string;
  brandId: string;
};

export type UpdateMotherboardDto = {
  model?: string;
  manufacturerCode?: string;
  brandId?: string;
};
