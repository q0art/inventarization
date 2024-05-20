import {
  Brand,
  CreateBrandDto,
  UpdateBrandDto,
} from "@/entities/brand/model/types.ts";
import { baseApi } from "@/shared/api/base-api.ts";

export const brandApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBrands: builder.query<Brand[], void>({
      query: () => ({
        method: "GET",
        url: "/brand",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "Brand" as const,
                id,
              })),
              "Brand",
            ]
          : ["Brand"],
    }),
    createBrand: builder.mutation<Brand, CreateBrandDto>({
      query: (dto) => ({
        method: "POST",
        url: "/brand",
        body: dto,
      }),
      invalidatesTags: ["Brand"],
    }),
    updateBrand: builder.mutation<Brand, { id: string; dto: UpdateBrandDto }>({
      query: ({ id, dto }) => ({
        method: "PATCH",
        url: `/brand/${id}`,
        body: dto,
      }),
      invalidatesTags: ["Brand"],
    }),
    deleteBrand: builder.mutation<string, string>({
      query: (id) => ({
        method: "DELETE",
        url: `/brand/${id}`,
      }),
      invalidatesTags: ["Brand"],
    }),
  }),
});

export const {
  useGetAllBrandsQuery,
  useCreateBrandMutation,
  useUpdateBrandMutation,
  useDeleteBrandMutation,
} = brandApi;
