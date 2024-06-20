import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector, useDispatch, shallowEqual } from "react-redux";
import counterReducer from "./modules/recommend";
import recommendReducer from "@/store/index";
import playerReducer from '@/pages/player/store/player'

const store:any = configureStore({
  reducer: {
    counter:counterReducer,  //命名空间
    // recommend:recommendReducer
    player:playerReducer,
  }
})


type GetStateFnType = typeof store.getState;
export type IRootState = ReturnType<GetStateFnType>;
type DispatchType = typeof store.dispatch; // 获取dispatch类型

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
export const useAppDispatch: () => DispatchType = useDispatch
export const shallowEqualApp = shallowEqual

export type AppDispatch = DispatchType; // 获取dispatch类型
export default store;