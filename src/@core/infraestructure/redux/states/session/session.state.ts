import { IUser } from "@/@core/domain/entities/user";
import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, registerThunk } from "./session.thunks";
import { ISession } from "@/@core/domain/entities/session";
import { getItem, removeItem, setItem } from "@/utils/localStorage";
import { localStorage } from "@/@core/domain/entities/localStorage";

const userInitialState: IUser = {
  id: 0,
  username: "",
  email: "",
  avatar: "",
  jwt: "",
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
      removeItem(localStorage.USER);
      return (state = sessionInitialState);
    },
  },
  extraReducers: (builder) => {
    // Register Reducers

    builder.addCase(registerThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(registerThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      setItem(localStorage.USER, state.user);
    });
    builder.addCase(registerThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    // Login Reducers

    builder.addCase(loginThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      setItem(localStorage.USER, state.user);
    });
    builder.addCase(loginThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { logout } = sessionSlice.actions;

export default sessionSlice.reducer;
