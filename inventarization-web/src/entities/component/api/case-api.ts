import {
  Component,
  ComponentWithBrand,
  CreateComponentDto,
  UpdateComponentDto,
} from "@entities/component";
import { baseApi } from "@shared/api/base-api";

export const caseApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCases: builder.query<ComponentWithBrand[], void>({
      query: () => ({
        method: "GET",
        url: "/case",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "Case" as const,
                id,
              })),
              "Case",
            ]
          : ["Case"],
    }),
    createCase: builder.mutation<Component, CreateComponentDto>({
      query: (dto) => ({
        method: "POST",
        url: "/case",
        body: dto,
      }),
      invalidatesTags: ["Case"],
    }),
    updateCase: builder.mutation<
      Component,
      { id: string; dto: UpdateComponentDto }
    >({
      query: ({ id, dto }) => ({
        method: "PATCH",
        url: `/case/${id}`,
        body: dto,
      }),
      invalidatesTags: ["Case"],
    }),
    deleteCase: builder.mutation<string, string>({
      query: (id) => ({
        method: "DELETE",
        url: `/case/${id}`,
      }),
      invalidatesTags: ["Case"],
    }),
  }),
});

export const {
  useGetAllCasesQuery,
  useCreateCaseMutation,
  useUpdateCaseMutation,
  useDeleteCaseMutation,
} = caseApi;
