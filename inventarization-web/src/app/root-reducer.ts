import { authSlice } from "@entities/auth";
import { themeSlice } from "@entities/theme";
import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "@shared/api/base-api.ts";

export const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
  [themeSlice.name]: themeSlice.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
});
