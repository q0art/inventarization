import {
  Cooler,
  CoolerWithBrandName,
  CreateCoolerDto,
  UpdateCoolerDto,
} from "@/entities/cooler";
import { baseApi } from "@/shared/api/base-api";

export const coolerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCoolers: builder.query<CoolerWithBrandName[], void>({
      query: () => ({
        method: "GET",
        url: "/cooler",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "Cooler" as const,
                id,
              })),
              "Cooler",
            ]
          : ["Cooler"],
    }),
    createCooler: builder.mutation<Cooler, CreateCoolerDto>({
      query: (dto) => ({
        method: "POST",
        url: "/cooler",
        body: dto,
      }),
      invalidatesTags: ["Cooler"],
    }),
    updateCooler: builder.mutation<
      Cooler,
      { id: string; dto: UpdateCoolerDto }
    >({
      query: ({ id, dto }) => ({
        method: "PATCH",
        url: `/cooler/${id}`,
        body: dto,
      }),
      invalidatesTags: ["Cooler"],
    }),
    deleteCooler: builder.mutation<string, string>({
      query: (id) => ({
        method: "DELETE",
        url: `/cooler/${id}`,
      }),
      invalidatesTags: ["Cooler"],
    }),
  }),
});

export const {
  useGetAllCoolersQuery,
  useCreateCoolerMutation,
  useUpdateCoolerMutation,
  useDeleteCoolerMutation,
} = coolerApi;
