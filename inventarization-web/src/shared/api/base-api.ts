import { createApi } from "@reduxjs/toolkit/query/react";
import { baseApiTags } from "@shared/api/base-api-tags";
import { baseQueryWithReauth } from "@shared/api/base-api-with-reauth";

export const baseApi = createApi({
  tagTypes: baseApiTags,
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
