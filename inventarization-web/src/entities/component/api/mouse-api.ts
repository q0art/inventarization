import {
  Component,
  ComponentWithBrand,
  CreateComponentDto,
  UpdateComponentDto,
} from "@/entities/component";
import { baseApi } from "@/shared/api/base-api";

export const mouseApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllMouses: builder.query<ComponentWithBrand[], void>({
      query: () => ({
        method: "GET",
        url: "/mouse",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "Mouse" as const,
                id,
              })),
              "Mouse",
            ]
          : ["Mouse"],
    }),
    createMouse: builder.mutation<Component, CreateComponentDto>({
      query: (dto) => ({
        method: "POST",
        url: "/mouse",
        body: dto,
      }),
      invalidatesTags: ["Mouse"],
    }),
    updateMouse: builder.mutation<
      Component,
      { id: string; dto: UpdateComponentDto }
    >({
      query: ({ id, dto }) => ({
        method: "PATCH",
        url: `/mouse/${id}`,
        body: dto,
      }),
      invalidatesTags: ["Mouse"],
    }),
    deleteMouse: builder.mutation<string, string>({
      query: (id) => ({
        method: "DELETE",
        url: `/mouse/${id}`,
      }),
      invalidatesTags: ["Mouse"],
    }),
  }),
});

export const {
  useGetAllMousesQuery,
  useCreateMouseMutation,
  useUpdateMouseMutation,
  useDeleteMouseMutation,
} = mouseApi;
