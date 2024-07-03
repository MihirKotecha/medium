import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "./appstore";
import { useSelector } from "react-redux";

export const useAppDispatcher = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()