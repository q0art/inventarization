import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AccessToken } from "./../api/types";
import { accessTokenDecode } from "@/shared/lib/access-token-decode";
import { AuthState } from "./types";

const initialState: AuthState = {
  user: null,
  accessToken: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<AccessToken>) => {
      const { accessToken } = action.payload;

      const user = accessTokenDecode(accessToken);

      state.user = user;
      state.accessToken = accessToken;
    },
    removeAuth: (state) => {
      state.user = null;
      state.accessToken = null;
    },
  },
});

export const { setAuth, removeAuth } = authSlice.actions;
