import {
  getUserData,
  login,
  register,
} from "@/@core/infraestructure/session.service";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  StrapiAuthenticationData,
  StrapiRegistrationData,
} from "strapi-sdk-js";

export const sessionSignThunk = createAsyncThunk(
  "session/signin",
  async (
    data: StrapiAuthenticationData | StrapiRegistrationData,
    { rejectWithValue }
  ) => {
    if ("username" in data) {
      try {
        const response = await register(
          data.username,
          data.email,
          data.password
        );
        return response;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
    const response = await login(data.identifier, data.password);
    return response;
  }
);

export const getUserThunk = createAsyncThunk("session/getUser", async () => {
  const response = await getUserData();
  return response;
});
