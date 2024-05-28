export type Case = {
  id: string;
  model: string;
  manufacturerCode: string;
  brandId: string;
  createdAt: string;
  updatedAt: string;
};

export type CaseWithBrandName = {
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

export type CreateCaseDto = {
  model: string;
  manufacturerCode: string;
  brandId: string;
};

export type UpdateCaseDto = {
  model?: string;
  manufacturerCode?: string;
  brandId?: string;
};
