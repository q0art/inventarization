import { store } from "@/app/app-store.ts";

export type AppState = ReturnType<typeof store.getState>;
