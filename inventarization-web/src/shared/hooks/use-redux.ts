import { AppDispatch, AppState } from "@shared/types/redux";
import {
  TypedUseSelectorHook,
  useDispatch as useUntypedDispatch,
  useSelector as useUntypedSelector,
} from "react-redux";

export const useSelector: TypedUseSelectorHook<AppState> = useUntypedSelector;
export const useDispatch = useUntypedDispatch<AppDispatch>;

export const useAuth = () =>
  useSelector((state) => {
    const id = state.auth.user?.id;
    const email = state.auth.user?.email;

    return id !== undefined && email !== undefined;
  });

export const useUser = () => useSelector((state) => state.auth.user);

export const useTheme = () => useSelector((state) => state.theme.theme);

export const useSidebar = () => useSelector((state) => state.sidebar.isOpen);
