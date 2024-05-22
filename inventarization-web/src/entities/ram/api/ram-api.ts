import {
  CreateRamDto,
  Ram,
  RamWithBrandName,
  UpdateRamDto,
} from "./../model/types";
import { baseApi } from "@/shared/api/base-api.ts";

export const ramApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllRams: builder.query<RamWithBrandName[], void>({
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
    createRam: builder.mutation<Ram, CreateRamDto>({
      query: (dto) => ({
        method: "POST",
        url: "/ram",
        body: dto,
      }),
      invalidatesTags: ["Ram"],
    }),
    updateRam: builder.mutation<Ram, { id: string; dto: UpdateRamDto }>({
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
