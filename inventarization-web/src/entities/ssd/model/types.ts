export type Ssd = {
  id: string;
  model: string;
  manufacturerCode: string;
  brandId: string;
  createdAt: string;
  updatedAt: string;
};

export type SsdWithBrandName = {
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

export type CreateSsdDto = {
  model: string;
  manufacturerCode: string;
  brandId: string;
};

export type UpdateSsdDto = {
  model?: string;
  manufacturerCode?: string;
  brandId?: string;
};
