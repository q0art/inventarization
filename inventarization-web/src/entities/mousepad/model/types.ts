export type Mousepad = {
  id: string;
  model: string;
  manufacturerCode: string;
  brandId: string;
  createdAt: string;
  updatedAt: string;
};

export type MousepadWithBrandName = {
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

export type CreateMousepadDto = {
  model: string;
  manufacturerCode: string;
  brandId: string;
};

export type UpdateMousepadDto = {
  model?: string;
  manufacturerCode?: string;
  brandId?: string;
};
