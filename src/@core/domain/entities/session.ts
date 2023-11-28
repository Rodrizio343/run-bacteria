import { IBaseState } from "./baseState";
import { IUser } from "./user";

export interface ISession extends IBaseState {
  user: IUser;
}
