import { useAppSelector } from "@/shared/hooks/use-app-selector";

export const useTheme = () => useAppSelector((state) => state.theme.theme);
