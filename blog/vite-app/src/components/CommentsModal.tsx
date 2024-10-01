import React, { useState, useEffect, useCallback } from 'react';
import { Comment, Post } from '../types';
import api from '../data/api';
import Modal, { ModalProps } from './Modal';
import { CommentList } from './Comments';

type CommentsModalProps = {
  currPost: Post | null;
} & ModalProps;

const CommentsModal: React.FC<CommentsModalProps> = ({
  currPost,
  ...modalProps
}) => {
  const [comments, setComments] = useState<Comment[]>([]);

  const fetchComments = useCallback(async () => {
    if (!currPost) {
      return;
    }

    const results = await api.getPostComments(currPost.id);

    setComments(results.data);
  }, [currPost]);

  useEffect(() => {
    // If anything about the current post changes, this will trigger a fetch again
    // yikes?
    if (currPost) {
      fetchComments();
    } else {
      setComments([]);
    }
  }, [currPost, fetchComments]);

  return (
    <Modal {...modalProps}>
      {
        currPost ? (
          <article className="CommentsModal">
            <section>
              <h2>{currPost.title}</h2>
              <p>{currPost.body}</p>
            </section>
            <CommentList comments={comments}/>
          </article>
        ) : null
      }
    </Modal>
  )
};

export default CommentsModal;