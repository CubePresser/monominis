import React from 'react';
import { User, Post as PostT } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-regular-svg-icons'
import { faShareNodes, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

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
        <button className="icon like"><FontAwesomeIcon icon={faThumbsUp} /></button><label>{post.reactions.likes}</label>
        <button className="icon dislike"><FontAwesomeIcon icon={faThumbsDown} /></button><label>{post.reactions.dislikes}</label>
        <button className="icon comment"><FontAwesomeIcon icon={faComments} /></button>
        <button className="icon share"><FontAwesomeIcon icon={faShareNodes} /></button>
        <p className="views">{post.views} views</p>
      </footer>
    </article>
  )
};

export default Post;