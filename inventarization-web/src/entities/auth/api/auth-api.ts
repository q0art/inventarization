import { baseApi } from "@/shared/api/base-api";

import { AccessToken, SignInBody, SignUpBody } from "./types";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation<AccessToken, SignInBody>({
      query: (body) => ({
        method: "POST",
        url: "auth/sign-in",
        body,
      }),
    }),
    signUp: builder.mutation<AccessToken, SignUpBody>({
      query: (body) => ({
        method: "POST",
        url: "/auth/sign-up",
        body,
      }),
    }),
    signOut: builder.mutation<void, void>({
      query: () => ({
        method: "POST",
        url: "/auth/sign-out",
      }),
    }),
  }),
});
