import { baseApi } from "@/shared/api/base-api";

import {
  CreateDepartamentDto,
  Departament,
  UpdateDepartamentDto,
} from "./../model/types";

export const departamentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllDepartaments: builder.query<Departament[], void>({
      query: () => ({
        method: "GET",
        url: "/departament",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "Departament" as const,
                id,
              })),
              "Departament",
            ]
          : ["Departament"],
    }),
    createDepartament: builder.mutation<Departament, CreateDepartamentDto>({
      query: (dto) => ({
        method: "POST",
        url: `/departament`,
        body: dto,
      }),
      invalidatesTags: ["Departament"],
    }),
    updateDepartament: builder.mutation<
      Departament,
      { id: string; dto: UpdateDepartamentDto }
    >({
      query: ({ id, dto }) => ({
        method: "PATCH",
        url: `/departament/${id}`,
        body: dto,
      }),
      invalidatesTags: ["Departament"],
    }),
    deleteDepartament: builder.mutation<string, string>({
      query: (id) => ({
        method: "DELETE",
        url: `/departament/${id}`,
      }),
      invalidatesTags: ["Departament"],
    }),
  }),
});

export const {
  useGetAllDepartamentsQuery,
  useCreateDepartamentMutation,
  useUpdateDepartamentMutation,
  useDeleteDepartamentMutation,
} = departamentApi;
