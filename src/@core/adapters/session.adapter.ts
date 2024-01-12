import { IUser } from "../domain/entities/user";

export const createUserAdapter = (user: any): IUser => {
  return {
    id: user.id,
    username: user.username,
    email: user.email,
    avatar: "",
  };
};
