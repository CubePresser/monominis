import React, { useEffect, useCallback, useContext } from 'react';
import { PostContext } from '../context/PostContext';
import api from '../data/api';
import Post from '../components/Post';

const Dashboard: React.FC = () => {
  const [postState, setPostState] = useContext(PostContext);

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

  return (
    <section className="Dashboard">
      <ul className="post-list" style={{ listStyle: 'none' }}>
        {
          postState.posts.map(post => (
            <li key={post.id}>
              <Post post={post}/>
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