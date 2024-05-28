import {
  CreateHeadphoneDto,
  Headphone,
  HeadphoneWithBrandName,
  UpdateHeadphoneDto,
} from "@/entities/headphone";
import { baseApi } from "@/shared/api/base-api";

export const headphoneApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllHeadphones: builder.query<HeadphoneWithBrandName[], void>({
      query: () => ({
        method: "GET",
        url: "/headphone",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "Headphone" as const,
                id,
              })),
              "Headphone",
            ]
          : ["Headphone"],
    }),
    createHeadphone: builder.mutation<Headphone, CreateHeadphoneDto>({
      query: (dto) => ({
        method: "POST",
        url: "/headphone",
        body: dto,
      }),
      invalidatesTags: ["Headphone"],
    }),
    updateHeadphone: builder.mutation<
      Headphone,
      { id: string; dto: UpdateHeadphoneDto }
    >({
      query: ({ id, dto }) => ({
        method: "PATCH",
        url: `/headphone/${id}`,
        body: dto,
      }),
      invalidatesTags: ["Headphone"],
    }),
    deleteHeadphone: builder.mutation<string, string>({
      query: (id) => ({
        method: "DELETE",
        url: `/headphone/${id}`,
      }),
      invalidatesTags: ["Headphone"],
    }),
  }),
});

export const {
  useGetAllHeadphonesQuery,
  useCreateHeadphoneMutation,
  useUpdateHeadphoneMutation,
  useDeleteHeadphoneMutation,
} = headphoneApi;
