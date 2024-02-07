import strapi from "@/lib/strapi";
import { IUser } from "../domain/entities/user";
import { createUserAdapter } from "../adapters/session.adapter";

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
