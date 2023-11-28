import { login, register } from "@/@core/infraestructure/session.service";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  StrapiAuthenticationData,
  StrapiRegistrationData,
} from "strapi-sdk-js";

export const loginThunk = createAsyncThunk(
  "session/login",
  async (data: StrapiAuthenticationData) => {
    const { identifier, password } = data;
    const response = await login(identifier, password);
    return response;
  }
);

export const registerThunk = createAsyncThunk(
  "session/register",
  async (data: StrapiRegistrationData, { rejectWithValue }) => {
    const { username, email, password } = data;
    try {
      const response = await register(username, email, password);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
