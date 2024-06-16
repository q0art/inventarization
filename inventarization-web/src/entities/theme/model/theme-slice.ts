import { Theme, ThemeState } from "@entities/theme/model/types.ts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ThemeState = {
  theme: window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
