import {
  Component,
  ComponentWithBrand,
  CreateComponentDto,
  UpdateComponentDto,
} from "@entities/component";
import { baseApi } from "@shared/api/base-api.ts";

export const ssdApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSsds: builder.query<ComponentWithBrand[], void>({
      query: () => ({
        method: "GET",
        url: "/ssd",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "Ssd" as const,
                id,
              })),
              "Ssd",
            ]
          : ["Ssd"],
    }),
    createSsd: builder.mutation<Component, CreateComponentDto>({
      query: (dto) => ({
        method: "POST",
        url: "/ssd",
        body: dto,
      }),
      invalidatesTags: ["Ssd"],
    }),
    updateSsd: builder.mutation<
      Component,
      { id: string; dto: UpdateComponentDto }
    >({
      query: ({ id, dto }) => ({
        method: "PATCH",
        url: `/ssd/${id}`,
        body: dto,
      }),
      invalidatesTags: ["Ssd"],
    }),
    deleteSsd: builder.mutation<string, string>({
      query: (id) => ({
        method: "DELETE",
        url: `/ssd/${id}`,
      }),
      invalidatesTags: ["Ssd"],
    }),
  }),
});

export const {
  useGetAllSsdsQuery,
  useCreateSsdMutation,
  useUpdateSsdMutation,
  useDeleteSsdMutation,
} = ssdApi;
