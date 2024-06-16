import {
  Component,
  ComponentWithBrand,
  CreateComponentDto,
  UpdateComponentDto,
} from "@entities/component";
import { baseApi } from "@shared/api/base-api.ts";

export const MotherboardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllMotherboards: builder.query<ComponentWithBrand[], void>({
      query: () => ({
        method: "GET",
        url: "/motherboard",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "Motherboard" as const,
                id,
              })),
              "Motherboard",
            ]
          : ["Motherboard"],
    }),
    createMotherboard: builder.mutation<Component, CreateComponentDto>({
      query: (dto) => ({
        method: "POST",
        url: "/motherboard",
        body: dto,
      }),
      invalidatesTags: ["Motherboard"],
    }),
    updateMotherboard: builder.mutation<
      Component,
      { id: string; dto: UpdateComponentDto }
    >({
      query: ({ id, dto }) => ({
        method: "PATCH",
        url: `/motherboard/${id}`,
        body: dto,
      }),
      invalidatesTags: ["Motherboard"],
    }),
    deleteMotherboard: builder.mutation<string, string>({
      query: (id) => ({
        method: "DELETE",
        url: `/motherboard/${id}`,
      }),
      invalidatesTags: ["Motherboard"],
    }),
  }),
});

export const {
  useGetAllMotherboardsQuery,
  useCreateMotherboardMutation,
  useUpdateMotherboardMutation,
  useDeleteMotherboardMutation,
} = MotherboardApi;
