import { AppDispatch } from "@shared/types/redux";
import { useDispatch } from "react-redux";

export const useAppDispatch = useDispatch<AppDispatch>;
