export type Keyboard = {
  id: string;
  model: string;
  manufacturerCode: string;
  brandId: string;
  createdAt: string;
  updatedAt: string;
};

export type KeyboardWithBrandName = {
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

export type CreateKeyboardDto = {
  model: string;
  manufacturerCode: string;
  brandId: string;
};

export type UpdateKeyboardDto = {
  model?: string;
  manufacturerCode?: string;
  brandId?: string;
};
