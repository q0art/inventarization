import {
  Component,
  ComponentWithBrand,
  CreateComponentDto,
  UpdateComponentDto,
} from "@/entities/component";
import { baseApi } from "@/shared/api/base-api.ts";

export const gpuApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllGpus: builder.query<ComponentWithBrand[], void>({
      query: () => ({
        method: "GET",
        url: "/gpu",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "Gpu" as const,
                id,
              })),
              "Gpu",
            ]
          : ["Gpu"],
    }),
    createGpu: builder.mutation<Component, CreateComponentDto>({
      query: (dto) => ({
        method: "POST",
        url: "/gpu",
        body: dto,
      }),
      invalidatesTags: ["Gpu"],
    }),
    updateGpu: builder.mutation<
      Component,
      { id: string; dto: UpdateComponentDto }
    >({
      query: ({ id, dto }) => ({
        method: "PATCH",
        url: `/gpu/${id}`,
        body: dto,
      }),
      invalidatesTags: ["Gpu"],
    }),
    deleteGpu: builder.mutation<string, string>({
      query: (id) => ({
        method: "DELETE",
        url: `/gpu/${id}`,
      }),
      invalidatesTags: ["Gpu"],
    }),
  }),
});

export const {
  useGetAllGpusQuery,
  useCreateGpuMutation,
  useUpdateGpuMutation,
  useDeleteGpuMutation,
} = gpuApi;
