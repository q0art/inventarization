import {
  CreateMousepadDto,
  Mousepad,
  MousepadWithBrandName,
  UpdateMousepadDto,
} from "@/entities/mousepad";
import { baseApi } from "@/shared/api/base-api";

export const mousepadApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllMousepads: builder.query<MousepadWithBrandName[], void>({
      query: () => ({
        method: "GET",
        url: "/mousepad",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "Mousepad" as const,
                id,
              })),
              "Mousepad",
            ]
          : ["Mousepad"],
    }),
    createMousepad: builder.mutation<Mousepad, CreateMousepadDto>({
      query: (dto) => ({
        method: "POST",
        url: "/mousepad",
        body: dto,
      }),
      invalidatesTags: ["Mousepad"],
    }),
    updateMousepad: builder.mutation<
      Mousepad,
      { id: string; dto: UpdateMousepadDto }
    >({
      query: ({ id, dto }) => ({
        method: "PATCH",
        url: `/mousepad/${id}`,
        body: dto,
      }),
      invalidatesTags: ["Mousepad"],
    }),
    deleteMousepad: builder.mutation<string, string>({
      query: (id) => ({
        method: "DELETE",
        url: `/mousepad/${id}`,
      }),
      invalidatesTags: ["Mousepad"],
    }),
  }),
});

export const {
  useGetAllMousepadsQuery,
  useCreateMousepadMutation,
  useUpdateMousepadMutation,
  useDeleteMousepadMutation,
} = mousepadApi;
