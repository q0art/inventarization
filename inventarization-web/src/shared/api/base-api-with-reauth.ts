import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";

import { AccessToken } from "@/entities/auth";
import { removeAuth, setAuth } from "@/entities/auth/model/auth-slice.ts";
import { AppState } from "@/shared/types/app-state.ts";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_URL,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const { accessToken } = (getState() as AppState).auth;

    if (accessToken) headers.set("Authorization", `Bearer ${accessToken}`);

    return headers;
  },
});

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result.error?.status === 401) {
    const { data } = await baseQuery("/auth/update-tokens", api, extraOptions);

    if (data) {
      api.dispatch(setAuth(data as AccessToken));
    } else api.dispatch(removeAuth());
  }

  return result;
};
