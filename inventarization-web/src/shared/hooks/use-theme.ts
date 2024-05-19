import { useAppSelector } from "@/shared/hooks/use-app-selector.ts";

export const useTheme = () => useAppSelector((state) => state.theme.theme);
