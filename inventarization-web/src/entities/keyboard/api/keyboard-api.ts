import {
  CreateKeyboardDto,
  Keyboard,
  KeyboardWithBrandName,
  UpdateKeyboardDto,
} from "@/entities/keyboard";
import { baseApi } from "@/shared/api/base-api";

export const keyboardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllKeyboards: builder.query<KeyboardWithBrandName[], void>({
      query: () => ({
        method: "GET",
        url: "/keyboard",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "Keyboard" as const,
                id,
              })),
              "Keyboard",
            ]
          : ["Keyboard"],
    }),
    createKeyboard: builder.mutation<Keyboard, CreateKeyboardDto>({
      query: (dto) => ({
        method: "POST",
        url: "/keyboard",
        body: dto,
      }),
      invalidatesTags: ["Keyboard"],
    }),
    updateKeyboard: builder.mutation<
      Keyboard,
      { id: string; dto: UpdateKeyboardDto }
    >({
      query: ({ id, dto }) => ({
        method: "PATCH",
        url: `/keyboard/${id}`,
        body: dto,
      }),
      invalidatesTags: ["Keyboard"],
    }),
    deleteKeyboard: builder.mutation<string, string>({
      query: (id) => ({
        method: "DELETE",
        url: `/keyboard/${id}`,
      }),
      invalidatesTags: ["Keyboard"],
    }),
  }),
});

export const {
  useGetAllKeyboardsQuery,
  useCreateKeyboardMutation,
  useUpdateKeyboardMutation,
  useDeleteKeyboardMutation,
} = keyboardApi;
