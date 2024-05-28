import { baseApi } from "@/shared/api/base-api.ts";

import {
  CreateSsdDto,
  Ssd,
  SsdWithBrandName,
  UpdateSsdDto,
} from "../model/types";

export const ssdApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSsds: builder.query<SsdWithBrandName[], void>({
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
    createSsd: builder.mutation<Ssd, CreateSsdDto>({
      query: (dto) => ({
        method: "POST",
        url: "/ssd",
        body: dto,
      }),
      invalidatesTags: ["Ssd"],
    }),
    updateSsd: builder.mutation<Ssd, { id: string; dto: UpdateSsdDto }>({
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
