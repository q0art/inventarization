import {
  CreateMouseDto,
  Mouse,
  MouseWithBrandName,
  UpdateMouseDto,
} from "@/entities/mouse";
import { baseApi } from "@/shared/api/base-api";

export const mouseApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllMouses: builder.query<MouseWithBrandName[], void>({
      query: () => ({
        method: "GET",
        url: "/mouse",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "Mouse" as const,
                id,
              })),
              "Mouse",
            ]
          : ["Mouse"],
    }),
    createMouse: builder.mutation<Mouse, CreateMouseDto>({
      query: (dto) => ({
        method: "POST",
        url: "/mouse",
        body: dto,
      }),
      invalidatesTags: ["Mouse"],
    }),
    updateMouse: builder.mutation<Mouse, { id: string; dto: UpdateMouseDto }>({
      query: ({ id, dto }) => ({
        method: "PATCH",
        url: `/mouse/${id}`,
        body: dto,
      }),
      invalidatesTags: ["Mouse"],
    }),
    deleteMouse: builder.mutation<string, string>({
      query: (id) => ({
        method: "DELETE",
        url: `/mouse/${id}`,
      }),
      invalidatesTags: ["Mouse"],
    }),
  }),
});

export const {
  useGetAllMousesQuery,
  useCreateMouseMutation,
  useUpdateMouseMutation,
  useDeleteMouseMutation,
} = mouseApi;
