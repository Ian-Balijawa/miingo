import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Addfriends from './Addfriends';
import Post from './Post';
import axios from '../services/axios-config';
import { postsAdded } from '../app/slices/postsSlice';
import useLocalStorage from '../hooks/useLocalStorage';

function Posts() {
  const [error, setError] = useState(null);
  const [accessToken] = useLocalStorage('accessToken');
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.postsList);

  useEffect(() => {
    axios
      .get('/post', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then((res) => {
        dispatch(postsAdded(res.data));
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  }, []);

  const postsSorted = [...posts];

  postsSorted.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  return (
    <div className="space-y-4">
      {postsSorted.slice(0, 1).map((post) => (
        <Post
          key={post._id}
          name={post.user ? post.user.name : "creator's name"}
          postDesc={post.postDesc}
          email={post.user ? post.user.email : "creator's email"}
          createdAt={post.createdAt}
          image={`https://api1.miingoapp.com/${post.image}`}
        />
      ))}

      <Addfriends />
      {postsSorted.slice(1, postsSorted.length).map((post) => (
        <Post
          key={post._id}
          name={post.user ? post.user.name : "creator's name"}
          postDesc={post.postDesc}
          email={post.user ? post.user.email : "creator's email"}
          createdAt={post.createdAt}
          image={`https://api1.miingoapp.com/${post.image}`}
          likes={post.likes.length}
          comments={post.comments}
          _id={post._id}
        />
      ))}

      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}

export default Posts;
