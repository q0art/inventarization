import { createApi } from "@reduxjs/toolkit/query/react";
import { baseApiTags } from "@/shared/api/base-api-tags.ts";
import { baseQueryWithReauth } from "@/shared/api/base-api-with-reauth.ts";

export const baseApi = createApi({
  tagTypes: [...baseApiTags],
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
