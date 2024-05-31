import {
  Component,
  ComponentWithBrand,
  CreateComponentDto,
  UpdateComponentDto,
} from "@/entities/component";
import { baseApi } from "@/shared/api/base-api";

export const cpuApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCpus: builder.query<ComponentWithBrand[], void>({
      query: () => ({
        method: "GET",
        url: "/cpu",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "Cpu" as const,
                id,
              })),
              "Cpu",
            ]
          : ["Cpu"],
    }),
    createCpu: builder.mutation<Component, CreateComponentDto>({
      query: (dto) => ({
        method: "POST",
        url: "/cpu",
        body: dto,
      }),
      invalidatesTags: ["Cpu"],
    }),
    updateCpu: builder.mutation<
      Component,
      { id: string; dto: UpdateComponentDto }
    >({
      query: ({ id, dto }) => ({
        method: "PATCH",
        url: `/cpu/${id}`,
        body: dto,
      }),
      invalidatesTags: ["Cpu"],
    }),
    deleteCpu: builder.mutation<string, string>({
      query: (id) => ({
        method: "DELETE",
        url: `/cpu/${id}`,
      }),
      invalidatesTags: ["Cpu"],
    }),
  }),
});

export const {
  useGetAllCpusQuery,
  useCreateCpuMutation,
  useUpdateCpuMutation,
  useDeleteCpuMutation,
} = cpuApi;
