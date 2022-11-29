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
  }, [accessToken, dispatch]);

  const postsSorted = [...posts];

  postsSorted.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  return (
    <div className="space-y-4">
      {postsSorted
        .slice(0, 2)
        .map(({ _id, postDesc, user, createdAt, image }) => (
          <Post
            key={_id}
            name={user ? user.name : "creator's name"}
            postDesc={postDesc}
            email={user ? user.email : "creator's email"}
            createdAt={createdAt}
            image={image}
          />
        ))}

      <Addfriends />
      {postsSorted
        .slice(2, postsSorted.length)
        .map(({ _id, createdAt, postDesc, user, document, video, image }) => (
          <Post
            key={_id}
            name={user ? user.name : "creator's name"}
            postDesc={postDesc}
            email={user ? user.email : "creator's email"}
            createdAt={createdAt}
            image={image}
          />
        ))}

      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}

export default Posts;
