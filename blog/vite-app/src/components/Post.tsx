import React, { useState } from 'react';
import { User, Post as PostT } from '../types';

type PostProps = {
  author?: User;
  post: PostT;
};

const Post: React.FC<PostProps> = ({
  author, post
}) => {
  return (
    <article className="Post">
      <header>
        {author && <img src={author?.image} alt="Author image"/>}
        <hgroup>
          <h1>{post.title}</h1>
          <h2>{author?.username}</h2>
        </hgroup>
        <p>{post.body}</p>
      </header>
      <p></p>
      <footer>
        {/* Comments, Share, Views */}
        <button className="comment">Comments</button>
        <button className="share">Share</button>
        <p className="views">{post.views} views</p>
        {/* Likes and Dislikes + action */}
        <button className="like">👍</button><label>{post.reactions.likes}</label>
        <button className="dislike">👎</button><label>{post.reactions.dislikes}</label>
      </footer>
    </article>
  )
};

export default Post;