import { baseApi } from "@/shared/api/base-api.ts";

import {
  CreateMotherboardDto,
  Motherboard,
  MotherboardWithBrandName,
  UpdateMotherboardDto,
} from "../model/types";

export const MotherboardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllMotherboards: builder.query<MotherboardWithBrandName[], void>({
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
    createMotherboard: builder.mutation<Motherboard, CreateMotherboardDto>({
      query: (dto) => ({
        method: "POST",
        url: "/motherboard",
        body: dto,
      }),
      invalidatesTags: ["Motherboard"],
    }),
    updateMotherboard: builder.mutation<
      Motherboard,
      { id: string; dto: UpdateMotherboardDto }
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
