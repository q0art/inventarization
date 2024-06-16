import {
  Component,
  ComponentWithBrand,
  CreateComponentDto,
  UpdateComponentDto,
} from "@entities/component";
import { baseApi } from "@shared/api/base-api";

export const coolerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCoolers: builder.query<ComponentWithBrand[], void>({
      query: () => ({
        method: "GET",
        url: "/cooler",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "Cooler" as const,
                id,
              })),
              "Cooler",
            ]
          : ["Cooler"],
    }),
    createCooler: builder.mutation<Component, CreateComponentDto>({
      query: (dto) => ({
        method: "POST",
        url: "/cooler",
        body: dto,
      }),
      invalidatesTags: ["Cooler"],
    }),
    updateCooler: builder.mutation<
      Component,
      { id: string; dto: UpdateComponentDto }
    >({
      query: ({ id, dto }) => ({
        method: "PATCH",
        url: `/cooler/${id}`,
        body: dto,
      }),
      invalidatesTags: ["Cooler"],
    }),
    deleteCooler: builder.mutation<string, string>({
      query: (id) => ({
        method: "DELETE",
        url: `/cooler/${id}`,
      }),
      invalidatesTags: ["Cooler"],
    }),
  }),
});

export const {
  useGetAllCoolersQuery,
  useCreateCoolerMutation,
  useUpdateCoolerMutation,
  useDeleteCoolerMutation,
} = coolerApi;
