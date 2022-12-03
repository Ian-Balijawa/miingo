import 'react-comments-section/dist/index.css';

import { actions, state } from '../state';

import { CommentSection } from 'react-comments-section';
import React from 'react';
import axios from '../services/axios-config';
import useLocalStorage from '../hooks/useLocalStorage';
import { useSnapshot } from 'valtio';

export const Comment = ({ postId }) => {
  const [user] = useLocalStorage('user');
  const snapshot = useSnapshot(state);
  const comments = snapshot.comments;
  const [accessToken] = useLocalStorage('accessToken');

  const handleComment = (data) => {
    axios
      .post(
        `/post/comment/${postId}/user/${user._id}`,
        { comment: data.text, parent: null },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
      )
      .then((res) => {
        actions.addComment(res.data);
        console.log('COMMENT: ', res.data);
      })
      .catch((error) => {
        console.log('ERROR FETCHING COMMENTS: ', error);
      });
  };

  const handleReplyToComment = (data) => {
    axios
      .post(
        `/post/comment/${postId}/user/${user._id}`,
        { comment: data.text, parent: data._id },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
      )
      .then((res) => {
        actions.addComment(res.data);
        console.log('COMMENT: ', res.data);
      })
      .catch((error) => {
        console.log('ERROR FETCHING COMMENTS: ', error);
      });
  };

  const data = [];
  for (let i = 0; i < comments.length; i++) {
    let comment = {
      userId: comments[i]?.user?._id,
      comId: comments[i]?._id,
      fullName: comments[i]?.user?.name,
      text: comments[i]?.comment,
      avatarUrl: `https://ui-avatars.com/api/name=${comments[i]?.user?.name}&background=random`,
      replies: []
    };

    data.push(comment);
  }

  console.log('data', data);
  return (
    <CommentSection
      currentUser={{
        currentUserId: user._id,
        currentUserImg: `https://ui-avatars.com/api/name=${user.name}&background=random`,
        currentUserProfile: `/profile/${user._id}`,
        currentUserFullName: user.name
      }}
      logIn={{
        loginLink: '/login',
        signupLink: '/register'
      }}
      commentData={data}
      onSubmitAction={(data) => handleComment(data)}
      currentData={(data) => {
        console.log('current data', data);
      }}
      onReplyAction={(data) => handleReplyToComment(data)}
    />
  );
};
