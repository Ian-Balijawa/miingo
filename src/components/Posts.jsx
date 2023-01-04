import React, { useEffect, useState } from 'react';
import { actions, state } from '../state';
import FriendSuggestion from './FriendSuggestion';
import Post from './Post';
import axios from '../services/axios-config';
import { useSnapshot } from 'valtio';
import config from '../utils/envConfig';

function Posts() {
  
  const [error, setError] = useState(null);
  const { accessToken, me: loggedInUser, posts } = useSnapshot(state);
  console.log('LOGGEDIN USER: ', accessToken);
  
  useEffect(() => {
    axios
      .get(`/post/user/${loggedInUser.id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then((res) => {
        actions.addPosts(res.data);
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  }, [accessToken, loggedInUser.id]);

  return (
    <div className="w-full space-y-4">
      {posts.slice(0, 1).map((post) => (
        <Post
          key={post._id}
          name={post.user ? post.user.name : "creator's name"}
          postDesc={post.postDesc}
          email={post.user ? post.user.email : "creator's email"}
          createdAt={post.createdAt}
          user={post.user}
          image={
            post.image
              ? `${config.API_URL}/post/stream-video?streamFile=${post.image}`
              : null
          }
          video={
            post.video
              ? `${config.API_URL}/post/stream-video?streamFile=${post.video}`
              : null
          }
          _id={post._id}
          likes={post.likes.length}
          commentsCount={post.commentsCount}
        />
      ))}


         {/* following and unfollowing users*/}
      <FriendSuggestion />

      {posts.slice(1).map((post) => (
        <Post
          key={post._id}
          name={post.user ? post.user.name : "creator's name"}
          postDesc={post.postDesc}
          email={post.user ? post.user.email : "creator's email"}
          createdAt={post.createdAt}
          user={post.user}
          image={
            post.image
              ? `${config.API_URL}/post/stream-video?streamFile=${post.image}`
              : null
          }
          video={
            post.video
              ? `${config.API_URL}/post/stream-video?streamFile=${post.video}`
              : null
          }
          likes={post.likes.length}
          commentsCount={post.commentsCount}
          _id={post._id}
        />
      ))}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}

export default Posts;
