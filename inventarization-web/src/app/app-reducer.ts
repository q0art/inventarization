import { combineReducers } from "@reduxjs/toolkit";

import { authSlice } from "@/entities/auth";
import { themeSlice } from "@/entities/theme";
import { baseApi } from "@/shared/api/base-api.ts";

export const appReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
  [themeSlice.name]: themeSlice.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
});
