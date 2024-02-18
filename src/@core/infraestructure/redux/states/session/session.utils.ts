import { setItem } from "@/utils/localStorage";
import { localStorage } from "@/@core/domain/entities/localStorage";
import { setCookie } from "cookies-next";

export const fulfilledThunk = (state, action) => {
  state.isLoading = false;
  setCookie("strapi_jwt", action.payload.jwt);
  setItem(localStorage.USER, state.user);
  state.user = action.payload.user;
};

export const rejectedThunk = (state, action) => {
  state.isLoading = false;
  state.error = action.error.message;
};

export const pendingThunk = (state) => {
  state.isLoading = true;
};
