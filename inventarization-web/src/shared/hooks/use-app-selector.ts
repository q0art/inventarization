import { TypedUseSelectorHook, useSelector } from "react-redux";

import { AppState } from "@/shared/types/app-state";

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
