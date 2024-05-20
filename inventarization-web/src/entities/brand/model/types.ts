export type Brand = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateBrandDto = {
  name: string;
};

export type UpdateBrandDto = {
  name: string;
};
