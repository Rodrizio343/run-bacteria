import { setItem } from "@/utils/localStorage";
import { setCookie } from "cookies-next";

export const fullfilledThunk = (state, action) => {
  state.isLoading = false;
  state.user = action.payload.user;
  setCookie("strapi_jwt", action.payload.jwt);
  setItem(localStorage.USER, state.user);
};

export const rejectedThunk = (state, action) => {
  state.isLoading = false;
  state.error = action.error.message;
};

export const pendingThunk = (state) => {
  state.isLoading = true;
};
