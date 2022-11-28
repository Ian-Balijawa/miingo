import React, { useEffect } from 'react';
import { fetchAllPosts, selectAllPosts } from '../app/slices/postSlice';
import { useDispatch, useSelector } from 'react-redux';

import InputBox from './InputBox';
import Posts from './Posts';
import api from '../services/axios-config';

function Feed() {
  const posts = useSelector(selectAllPosts);
  const dispatch = useDispatch();
  useEffect(() => {
    api.get('/post').then((res) => {
      dispatch(fetchAllPosts(res.data));
    });
  }, [dispatch, posts]);

  console.log('POSTS: ', posts);
  
  return (
    <div className="h-screen  pb-56  flex-grow  mt-2 overflow-y-auto scrollbar-hide ">
      <div className=" space-y-7 px-2 ">
        <InputBox />
        <Posts />
      </div>
    </div>
  );
}

export default Feed;
