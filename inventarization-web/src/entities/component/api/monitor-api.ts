import {
  Component,
  ComponentWithBrand,
  CreateComponentDto,
  UpdateComponentDto,
} from "@entities/component";
import { baseApi } from "@shared/api/base-api";

export const monitorApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllMonitors: builder.query<ComponentWithBrand[], void>({
      query: () => ({
        method: "GET",
        url: "/monitor",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "Monitor" as const,
                id,
              })),
              "Monitor",
            ]
          : ["Monitor"],
    }),
    createMonitor: builder.mutation<Component, CreateComponentDto>({
      query: (dto) => ({
        method: "POST",
        url: "/monitor",
        body: dto,
      }),
      invalidatesTags: ["Monitor"],
    }),
    updateMonitor: builder.mutation<
      Component,
      { id: string; dto: UpdateComponentDto }
    >({
      query: ({ id, dto }) => ({
        method: "PATCH",
        url: `/monitor/${id}`,
        body: dto,
      }),
      invalidatesTags: ["Monitor"],
    }),
    deleteMonitor: builder.mutation<string, string>({
      query: (id) => ({
        method: "DELETE",
        url: `/monitor/${id}`,
      }),
      invalidatesTags: ["Monitor"],
    }),
  }),
});

export const {
  useGetAllMonitorsQuery,
  useCreateMonitorMutation,
  useUpdateMonitorMutation,
  useDeleteMonitorMutation,
} = monitorApi;
