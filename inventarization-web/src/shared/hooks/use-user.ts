import { useAppSelector } from "@/shared/hooks/use-app-selector.ts";

export const useUser = () => useAppSelector((state) => state.auth.user);
