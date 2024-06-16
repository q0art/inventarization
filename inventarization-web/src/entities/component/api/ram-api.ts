import {
  Component,
  ComponentWithBrand,
  CreateComponentDto,
  UpdateComponentDto,
} from "@entities/component";
import { baseApi } from "@shared/api/base-api.ts";

export const ramApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllRams: builder.query<ComponentWithBrand[], void>({
      query: () => ({
        method: "GET",
        url: "/ram",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "Ram" as const,
                id,
              })),
              "Ram",
            ]
          : ["Ram"],
    }),
    createRam: builder.mutation<Component, CreateComponentDto>({
      query: (dto) => ({
        method: "POST",
        url: "/ram",
        body: dto,
      }),
      invalidatesTags: ["Ram"],
    }),
    updateRam: builder.mutation<
      Component,
      { id: string; dto: UpdateComponentDto }
    >({
      query: ({ id, dto }) => ({
        method: "PATCH",
        url: `/ram/${id}`,
        body: dto,
      }),
      invalidatesTags: ["Ram"],
    }),
    deleteRam: builder.mutation<string, string>({
      query: (id) => ({
        method: "DELETE",
        url: `/ram/${id}`,
      }),
      invalidatesTags: ["Ram"],
    }),
  }),
});

export const {
  useGetAllRamsQuery,
  useCreateRamMutation,
  useUpdateRamMutation,
  useDeleteRamMutation,
} = ramApi;
