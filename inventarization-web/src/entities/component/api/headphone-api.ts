import {
  Component,
  ComponentWithBrand,
  CreateComponentDto,
  UpdateComponentDto,
} from "@entities/component";
import { baseApi } from "@shared/api/base-api";

export const headphoneApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllHeadphones: builder.query<ComponentWithBrand[], void>({
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
    createHeadphone: builder.mutation<Component, CreateComponentDto>({
      query: (dto) => ({
        method: "POST",
        url: "/headphone",
        body: dto,
      }),
      invalidatesTags: ["Headphone"],
    }),
    updateHeadphone: builder.mutation<
      Component,
      { id: string; dto: UpdateComponentDto }
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
