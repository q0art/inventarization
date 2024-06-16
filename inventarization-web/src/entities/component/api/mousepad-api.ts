import {
  Component,
  ComponentWithBrand,
  CreateComponentDto,
  UpdateComponentDto,
} from "@entities/component";
import { baseApi } from "@shared/api/base-api";

export const mousepadApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllMousepads: builder.query<ComponentWithBrand[], void>({
      query: () => ({
        method: "GET",
        url: "/mousepad",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "Mousepad" as const,
                id,
              })),
              "Mousepad",
            ]
          : ["Mousepad"],
    }),
    createMousepad: builder.mutation<Component, CreateComponentDto>({
      query: (dto) => ({
        method: "POST",
        url: "/mousepad",
        body: dto,
      }),
      invalidatesTags: ["Mousepad"],
    }),
    updateMousepad: builder.mutation<
      Component,
      { id: string; dto: UpdateComponentDto }
    >({
      query: ({ id, dto }) => ({
        method: "PATCH",
        url: `/mousepad/${id}`,
        body: dto,
      }),
      invalidatesTags: ["Mousepad"],
    }),
    deleteMousepad: builder.mutation<string, string>({
      query: (id) => ({
        method: "DELETE",
        url: `/mousepad/${id}`,
      }),
      invalidatesTags: ["Mousepad"],
    }),
  }),
});

export const {
  useGetAllMousepadsQuery,
  useCreateMousepadMutation,
  useUpdateMousepadMutation,
  useDeleteMousepadMutation,
} = mousepadApi;
