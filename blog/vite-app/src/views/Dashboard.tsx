import React, { useEffect, useCallback, useContext, useState } from 'react';
import { PostContext } from '../context/PostContext';
import api from '../data/api';
import Post from '../components/Post';
import { Post as TPost } from '../types';
import CommentsModal from '../components/CommentsModal';

const Dashboard: React.FC = () => {
  const [postState, setPostState] = useContext(PostContext);
  const [openComments, setOpenComments] = useState(false);
  const [activePost, setActivePost] = useState<TPost | null>(null);

  const fetchPosts = useCallback(async () => {
    const {
      data: posts,
      skip,
      limit
    } = await api.getPosts({ skip: postState.skip });
    setPostState({
      posts: [...postState.posts, ...posts],
      skip: skip + limit,
    })
  }, [postState, setPostState]);

  useEffect(() => {
    fetchPosts();
  }, [])

  const handleOpenComments = (post: TPost) => {
    setOpenComments(true);
    setActivePost(post);
  }

  const handleCloseComments = () => {
    setOpenComments(false);
    setActivePost(null);
  }

  return (
    <section className="Dashboard">
      <CommentsModal currPost={activePost} open={openComments} onClose={handleCloseComments}/>
      <ul className="post-list" style={{ listStyle: 'none' }}>
        {
          postState.posts.map(post => (
            <li key={post.id}>
              <Post post={post} onComment={handleOpenComments}/>
            </li>
          ))
        }
      </ul>
      <button className="secondary" onClick={(event) => {
        fetchPosts();
        event.preventDefault();
      }}>MORE!</button>
    </section>
  )
};

export default Dashboard;