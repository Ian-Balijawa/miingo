import React, { useEffect, useState } from 'react';

import Addfriends from './Addfriends';
import Post from './Post';
import axios from '../services/axios-config';
import { state } from '../state';
import { useSnapshot } from 'valtio';

function Posts() {
  const snap = useSnapshot(state);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get('/post', {
        headers: {
          Authorization: `Bearer ${snap.accessToken}`
        }
      })
      .then((res) => {
        console.log('RES: ', res);
        console.log('DATA: ', res.data);
        state.posts = res.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
      })
      .catch((err) => {
        console.log('ERR: ', err);
        setError(err.response.data.message);
      });
  }, [snap.accessToken]);

  return (
    <div className="w-full md:w-[640px] space-y-4">
      {snap.posts.slice(0, 1).map((post) => (
        <Post
          key={post._id}
          name={post.user ? post.user.name : "creator's name"}
          postDesc={post.postDesc}
          email={post.user ? post.user.email : "creator's email"}
          createdAt={post.createdAt}
          user={post.user}
          image={
            post.image
              ? `https://api1.miingoapp.com/${post.image}?not-from-cache-please`
              : null
          }
        />
      ))}

      <Addfriends />
      {snap.posts.slice(1, snap.posts.length).map((post) => (
        <Post
          key={post._id}
          name={post.user ? post.user.name : "creator's name"}
          postDesc={post.postDesc}
          email={post.user ? post.user.email : "creator's email"}
          createdAt={post.createdAt}
          image={
            post.image
              ? `https://api1.miingoapp.com/${post.image}?not-from-cache-please`
              : null
          }
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
