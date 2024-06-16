import { themeSlice } from "@app/providers/theme-provider";
import { authSlice } from "@entities/auth";
import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "@shared/api/base-api.ts";
import { sidebarSlice } from "@widgets/sidebar";

export const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
  [themeSlice.name]: themeSlice.reducer,
  [sidebarSlice.name]: sidebarSlice.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
});
