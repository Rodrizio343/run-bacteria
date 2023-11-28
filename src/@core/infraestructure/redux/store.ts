import { configureStore } from "@reduxjs/toolkit";
import { sessionSlice } from "./states/session/session.state";
import { ISession } from "@/@core/domain/entities/session";
import { useDispatch } from 'react-redux';


export interface AppStore {
  session: ISession;
}

const store = configureStore<AppStore>({
  reducer: {
    session: sessionSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
