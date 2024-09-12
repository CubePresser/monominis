import React, { useState } from 'react';
import { Post } from '../types';

// DummyJSON does not allow to fetch posts & user at the same time from server - need to be fetched separately

export type PostState = {
  posts: Post[];
  skip: number;
}

const initialPostState = {
  posts: [],
  skip: 0,
};

export const PostContext = React.createContext<[PostState, React.Dispatch<React.SetStateAction<PostState>>]>([initialPostState, () => console.error('PostContext was not supplied with a provider.')]);
export const PostProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [postState, setPostState] = useState<PostState>(initialPostState);

  return (
    <PostContext.Provider value={[postState, setPostState]}>
      { children }
    </PostContext.Provider>
  )
}