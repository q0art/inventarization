import { useAppSelector } from "@/shared/hooks/use-app-selector.ts";

export const useAuth = () =>
  useAppSelector((state) => {
    const id = state.auth.user?.id;
    const email = state.auth.user?.email;

    return id !== undefined && email !== undefined;
  });
