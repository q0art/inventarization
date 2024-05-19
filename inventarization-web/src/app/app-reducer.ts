import { combineReducers } from "@reduxjs/toolkit";

import { authSlice } from "@/entities/auth";
import { baseApi } from "@/shared/api/base-api.ts";

export const appReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
});
