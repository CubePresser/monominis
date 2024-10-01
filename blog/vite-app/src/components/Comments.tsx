import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { Comment as TComment } from '../types';

type CommentProps = {} & TComment;

export const Comment: React.FC<CommentProps> = (comment) => {
  return (
    <article className="Comment">
      <header>
        <label>{comment.user.username}</label>
      </header>
      <p>{comment.body}</p>
      <footer>
        <button className="icon"><FontAwesomeIcon icon={faThumbsUp}/></button>
        <label>{comment.likes}</label>
      </footer>
    </article>
  )
}

type CommentListProps = {
  comments: TComment[];
};

export const CommentList: React.FC<CommentListProps> = ({
  comments,
}) => {
  return (
    <ul className="CommentList">
      {
        comments.map((comment) => (
          <li key={comment.id}>
            <Comment {...comment} />
          </li>
        ))
      }
    </ul>
  )
};