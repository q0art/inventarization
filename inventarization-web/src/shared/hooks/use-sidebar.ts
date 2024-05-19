import { useAppSelector } from "@/shared/hooks/use-app-selector.ts";

export const useSidebar = () => useAppSelector((state) => state.sidebar.isOpen);
