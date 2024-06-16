import { baseApi } from "@shared/api/base-api";

import { AccessToken, SignInDto, SignUpDto } from "../model/types";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation<AccessToken, SignInDto>({
      query: (body) => ({
        method: "POST",
        url: "auth/sign-in",
        body,
      }),
    }),
    signUp: builder.mutation<AccessToken, SignUpDto>({
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

export const { useSignInMutation, useSignUpMutation, useSignOutMutation } =
  authApi;
