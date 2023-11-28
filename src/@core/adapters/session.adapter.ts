import { IUser } from '../domain/entities/user';

export const createSessionAdapter = (data: any): IUser => {
  const { jwt, user } = data
  return {
    id: user.id,
    username: user.username,
    email: user.email,
    avatar: '',
    jwt
  }
}