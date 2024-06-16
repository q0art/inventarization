import { Brand } from "@entities/brand";

export interface Component {
  id: string;
  model: string;
  manufacturerCode: string;
  brandId: string;
  createdAt: string;
  updatedAt: string;
}

export type ComponentWithBrand = Component & {
  brand: Brand;
};

export interface CreateComponentDto {
  model: string;
  manufacturerCode: string;
  brandId: string;
}

export interface UpdateComponentDto {
  model?: string;
  manufacturerCode?: string;
  brandId?: string;
}
