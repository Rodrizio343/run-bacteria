import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { sessionSlice } from "./states/session/session.state";
import { ISession } from "@/@core/domain/entities/session";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export interface IAppStore {
  session: ISession;
}

const rootReducer = combineReducers({
  session: sessionSlice.reducer,
});

const store = configureStore<IAppStore>({
  reducer: rootReducer,
});

//TEST PURPOSES ONLY
// const store = (preloadedState?: Partial<RootState>) => {
//   return configureStore<IAppStore>({
//     reducer: rootReducer,
//     preloadedState,
//   });
// };

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;

//TEST PURPOSES ONLY
// export type AppStore = ReturnType<typeof store>;

export type AppDispatch = AppStore["dispatch"];

//Hooks
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
