import strapi from "@/lib/strapi";
import { IUser } from "../domain/entities/user";
import { createSessionAdapter } from "../adapters/session.adapter";

export const register = async (
  username: string,
  email: string,
  password: string
): Promise<IUser> => {
  try {
    const data = await strapi.register({ username, email, password });
    const user = await createSessionAdapter(data);
    return user;
  } catch (error) {
    throw error;
  }
};

export const login = async (
  identifier: string,
  password: string
): Promise<IUser> => {
  try {
    const data = await strapi.login({ identifier, password });
    const user = await createSessionAdapter(data);
    return user;
  } catch (error) {
    throw error;
  }
};
