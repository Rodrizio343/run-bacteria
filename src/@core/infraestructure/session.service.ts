import strapi from "@/lib/strapi";
import {
  StrapiAuthenticationResponse,
  StrapiResetPasswordData,
} from "strapi-sdk-js";
import { createUserAdapter } from "../adapters/session.adapter";
import { IUser } from "../domain/entities/user";

export const register = async (
  username: string,
  email: string,
  password: string
): Promise<{ user: IUser; jwt: string }> => {
  try {
    const { user, jwt } = await strapi.register({ username, email, password });
    const adpatedUser = await createUserAdapter(user);
    return { user: adpatedUser, jwt };
  } catch (error) {
    throw error;
  }
};

export const login = async (
  identifier: string,
  password: string
): Promise<{ user: IUser; jwt: string }> => {
  try {
    const { user, jwt } = await strapi.login({ identifier, password });
    const adpatedUser = await createUserAdapter(user);
    return { user: adpatedUser, jwt };
  } catch (error) {
    throw error;
  }
};

export const getUserData = async (): Promise<IUser> => {
  try {
    const data = await strapi.fetchUser();
    const user = await createUserAdapter(data);
    return user;
  } catch (error) {
    throw error;
  }
};

export const updateUserData = async (formData): Promise<IUser> => {
  try {
    const user = await strapi.request("put", "/users-permissions/user/me", {
      headers: { "Content-Type": "multipart/form-data" },
      data: formData,
    });
    const adpatedUser = await createUserAdapter(user);
    return adpatedUser;
  } catch (error) {
    throw error;
  }
};

export const forgottenPasswordRequest = async (email): Promise<void> => {
  try {
    const response = await strapi.forgotPassword({ email });
    return response;
  } catch (error) {
    throw error;
  }
};

export const resetPasswordRequest = async (
  password,
  passwordConfirmation,
  code
): Promise<StrapiAuthenticationResponse> => {
  try {
    const response = await strapi.resetPassword({
      password,
      passwordConfirmation,
      code,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
