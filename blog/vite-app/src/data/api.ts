import { User, Post, Comment } from '../types';
const dummyUrl = 'https://dummyjson.com/';

type PageResponse<T> = {
  data: T;
  total: number;
  skip: number;
  limit: number;
}

type RequestParams = {
  limit?: number;
  skip?: number;
  select?: string[];
}

const limSkp = (limit: number, skip: number): string => (`limit=${limit}&skip=${skip}`);
const applySelect = (select: string[]): string => select?.length ? `select=${select.join(',')}` : '';

export default {
  getUsers: async ({ limit = 30, skip = 0 }: RequestParams = {}): Promise<PageResponse<User[]>> => {
    const url = dummyUrl + 'users?' + limSkp(limit, skip);
  
    return fetch(url)
      .then(res => res.json())
      .then(({ users, ...other}) => ({
        data: users,
        ...other,
      }));
  },

  getSingleUser: async (id: number, select: string[] = []): Promise<User> => {
    const url = dummyUrl + `users/${id}?` + applySelect(select);

    return fetch(url).then(res => res.json());
  },

  getPosts: async ({ limit = 10, skip = 0, select = [] }: RequestParams = {}): Promise<PageResponse<Post[]>> => {
    const url = dummyUrl + 'posts?' + [
      limSkp(limit, skip),
      applySelect(select)
    ].join('&');
  
    return fetch(url)
      .then(res => res.json())
      .then(({ posts, ...other}) => ({
        data: posts,
        ...other,
      }));
  },

  getPostComments: async (postId: number, {limit = 10, skip = 0 }: RequestParams = {}): Promise<PageResponse<Comment[]>> => {
    const url = dummyUrl + `comments/post/${postId}?`
      + limSkp(limit, skip);
    
      return fetch(url)
        .then(res => res.json())
        .then(({comments, ...other}) => ({
          data: comments,
          ...other,
        }));
  }
}

// export const getUsers = async ({ limit = 30, skip = 0 }: RequestParams): Promise<Response<User[]>> => {
//   const url = dummyUrl + 'users?' + limSkp(limit, skip);

//   return fetch(url)
//     .then(res => res.json())
//     .then(({ users, ...other}) => ({
//       data: users,
//       ...other,
//     }));
// }

// export const getPosts = async ({ limit = 30, skip = 0, select = [] }: RequestParams): Promise<Response<Post[]>> => {
//   const url = dummyUrl + 'posts?' + [
//     limSkp(limit, skip),
//     applySelect(select)
//   ].join('&');

//   return fetch(url)
//     .then(res => res.json())
//     .then(({ posts, ...other}) => ({
//       data: posts,
//       ...other,
//     }));
// }