import { useDispatch } from "react-redux";

import { AppDispatch } from "@/shared/types/redux";

export const useAppDispatch = useDispatch<AppDispatch>;
