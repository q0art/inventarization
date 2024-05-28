export type Mouse = {
  id: string;
  model: string;
  manufacturerCode: string;
  brandId: string;
  createdAt: string;
  updatedAt: string;
};

export type MouseWithBrandName = {
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

export type CreateMouseDto = {
  model: string;
  manufacturerCode: string;
  brandId: string;
};

export type UpdateMouseDto = {
  model?: string;
  manufacturerCode?: string;
  brandId?: string;
};
