import {
  Cpu,
  CpuWithBrandName,
  CreateCpuDto,
  UpdateCpuDto,
} from "@/entities/cpu";
import { baseApi } from "@/shared/api/base-api.ts";

export const cpuApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCpus: builder.query<CpuWithBrandName[], void>({
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
    createCpu: builder.mutation<Cpu, CreateCpuDto>({
      query: (dto) => ({
        method: "POST",
        url: "/cpu",
        body: dto,
      }),
      invalidatesTags: ["Cpu"],
    }),
    updateCpu: builder.mutation<Cpu, { id: string; dto: UpdateCpuDto }>({
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
