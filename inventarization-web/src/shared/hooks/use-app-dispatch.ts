import { useDispatch } from "react-redux";

import { AppDispatch } from "@/shared/types/app-dispatch";

export const useAppDispatch = useDispatch<AppDispatch>;
