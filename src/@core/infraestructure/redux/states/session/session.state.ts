import { localStorage } from "@/@core/domain/entities/localStorage";
import { ISession } from "@/@core/domain/entities/session";
import { IUser } from "@/@core/domain/entities/user";
import { getItem, removeItem, setItem } from "@/utils/localStorage";
import { createSlice } from "@reduxjs/toolkit";
import { deleteCookie } from "cookies-next";
import { RootState } from "../../store";
import { getUserThunk, sessionSignThunk } from "./session.thunks";
import { fulfilledThunk, pendingThunk, rejectedThunk } from "./session.utils";

const userInitialState: IUser = {
  id: 0,
  username: "",
  email: "",
  avatar: "",
};

const sessionInitialState: ISession = {
  user: userInitialState,
  isLoading: false,
  error: null,
};

const storedUser: IUser = getItem(localStorage.USER) as IUser;
export const sessionSlice = createSlice({
  name: "session",
  initialState: storedUser?.id
    ? ({
        ...sessionInitialState,
        user: storedUser,
      } as ISession)
    : sessionInitialState,
  reducers: {
    logout: (state) => {
      deleteCookie("strapi_jwt");
      removeItem("user");
      return (state = sessionInitialState);
    },
  },
  extraReducers: (builder) => {
    // SignIn Reducers

    builder.addCase(sessionSignThunk.pending, pendingThunk);
    builder.addCase(sessionSignThunk.fulfilled, fulfilledThunk);
    builder.addCase(sessionSignThunk.rejected, rejectedThunk);

    //Get User Reducer

    builder.addCase(getUserThunk.pending, pendingThunk);
    builder.addCase(getUserThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      setItem(localStorage.USER, state.user);
    });
    builder.addCase(getUserThunk.rejected, rejectedThunk);
  },
});

export const { logout } = sessionSlice.actions;
export const selectUserSession = (state: RootState) => state.session.user;

export default sessionSlice.reducer;
