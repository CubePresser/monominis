import React from 'react';
import { User, Post as PostT } from '../types';

type PostProps = {
  author: User;
  post: PostT;
};

const Post: React.FC<PostProps> = () => {
  return (
    <div>Post</div>
  )
};

export default Post;