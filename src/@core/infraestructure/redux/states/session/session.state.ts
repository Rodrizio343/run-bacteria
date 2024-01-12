import { IUser } from "@/@core/domain/entities/user";
import { createSlice } from "@reduxjs/toolkit";
import { getUserThunk, sessionSignThunk } from "./session.thunks";
import { ISession } from "@/@core/domain/entities/session";
import { setCookie, deleteCookie } from "cookies-next";
import { getItem, removeItem, setItem } from "@/utils/localStorage";
import { localStorage } from "@/@core/domain/entities/localStorage";
import { fullfilledThunk, pendingThunk, rejectedThunk } from "./session.utils";

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

export const sessionSlice = createSlice({
  name: "Session",
  initialState: getItem(localStorage.USER)
    ? {
        ...sessionInitialState,
        user: getItem(localStorage.USER),
      }
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
    builder.addCase(sessionSignThunk.fulfilled, fullfilledThunk);
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

export default sessionSlice.reducer;
