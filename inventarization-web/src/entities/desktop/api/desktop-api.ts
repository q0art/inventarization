import { baseApi } from "@shared/api/base-api";

import {
  CreateDesktopDto,
  Desktop,
  DesktopWithComponents,
  UpdateDesktopDto,
} from "./../model/types";

export const desktopApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllDesktops: builder.query<Desktop[], void>({
      query: () => ({
        method: "GET",
        url: "/desktop",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "Desktop" as const,
                id,
              })),
              "Desktop",
            ]
          : ["Desktop"],
    }),
    getDesktopById: builder.query<DesktopWithComponents, string>({
      query: (id) => ({
        method: "GET",
        url: `/desktop/${id}`,
      }),
    }),

    createDesktop: builder.mutation<Desktop, CreateDesktopDto>({
      query: (dto) => ({
        method: "POST",
        url: "/desktop",
        body: dto,
      }),
      invalidatesTags: ["Desktop"],
    }),
    updateDesktop: builder.mutation<
      Desktop,
      { id: string; dto: UpdateDesktopDto }
    >({
      query: ({ id, dto }) => ({
        method: "PATCH",
        url: `/desktop/${id}`,
        body: dto,
      }),
      invalidatesTags: ["Desktop"],
    }),
    deleteDesktop: builder.mutation<string, string>({
      query: (id) => ({
        method: "DELETE",
        url: `/desktop/${id}`,
      }),
      invalidatesTags: ["Desktop"],
    }),
  }),
});

export const {
  useGetAllDesktopsQuery,
  useGetDesktopByIdQuery,
  useCreateDesktopMutation,
  useUpdateDesktopMutation,
  useDeleteDesktopMutation,
} = desktopApi;
