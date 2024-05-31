import { TypedUseSelectorHook, useSelector } from "react-redux";

import { AppState } from "@/shared/types/redux";

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
