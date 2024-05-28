export type Headphone = {
  id: string;
  model: string;
  manufacturerCode: string;
  brandId: string;
  createdAt: string;
  updatedAt: string;
};

export type HeadphoneWithBrandName = {
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

export type CreateHeadphoneDto = {
  model: string;
  manufacturerCode: string;
  brandId: string;
};

export type UpdateHeadphoneDto = {
  model?: string;
  manufacturerCode?: string;
  brandId?: string;
};
