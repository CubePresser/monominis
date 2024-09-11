import { User, Post } from '../types';
const dummyUrl = 'https://dummyjson.com/';

type Response<T> = {
  data: T;
  total?: number;
  skip?: number;
  limit?: number;
}

export const getUsers = async (): Promise<Response<User[]>> => {
  const url = dummyUrl + 'users';

  return fetch(url)
    .then(res => res.json())
    .then(({ users, ...other}) => ({
      data: users,
      ...other,
    }))
}