import { useAppSelector } from "@shared/hooks/use-app-selector";

export const useUser = () => useAppSelector((state) => state.auth.user);
