import BeatLoader from 'react-spinners/BeatLoader';
import { Button } from '@chakra-ui/react';
import { Comment } from './Comment';
import axios from '../services/axios-config';
import { state, actions } from '../state';
import { useEffect } from 'react';
import { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { useSnapshot } from 'valtio';

export const CommentInputBox = ({ postId }) => {
  const [user] = useLocalStorage('user');
  const [accessToken] = useLocalStorage('accessToken');
  const snapshot = useSnapshot(state);
  const [isCommentLoading, setIsCommentLoading] = useState(false);
  const [comment, setComment] = useState('');

  useEffect(() => {
    axios
      .get(`/post/comment/${postId}`)
      .then((res) => {
        actions.addComments(res.data);
        console.log('COMMENTS : ', res.data);
      })
      .catch((err) => {
        console.log('ERROR LOADING COMMENTS: ', err);
      });
  }, [postId]);

  const handleComment = (e) => {
    e.preventDefault();
    axios
      .post(
        `/post/comment/${postId}/user/${user?._id}`,
        { comment },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
      )
      .then((res) => {
        actions.addComment(res.data);
        console.log('COMMENT: ', res.data);
        setComment('');
      })
      .catch((error) => {
        console.log('ERROR FETCHING COMMENTS: ', error);
      });
  };
  const handleCommentLoading = (e) => {
    setIsCommentLoading(true);
    setTimeout(() => {
      setIsCommentLoading(false);
    }, 1000);
  };

  const comments = snapshot.comments;
  return (
    <div className="flex flex-col bg-white my-3 post-description">
      <div className="p-5 bg-white">
        <div className="flex items-center justify-between space-x-2">
          <div className="flex items-center space-x-2">
            <div className=" w-6 h-6 md:w-8 md:h-8">
              <img
                className=" w-full h-full object-cover rounded-full"
                src="/images/ml.jpg"
                alt=""
              />
            </div>

            <div>
              <p className="font-semibold  text-gray-500">
                {user ? user?.name : 'some user'}
              </p>
              <p className="text-xs text-gray-400">1 hour ago</p>
            </div>
          </div>
        </div>

        <div className="flex items-center mt-3 space-x-2">
          <input
            type="text"
            className="w-full bg-gray-100 rounded-md p-2 outline-none"
            placeholder="Write a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            className="flex items-center justify-center w-12 h-8 rounded-md bg-regal-orange text-white"
            onClick={handleComment}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex flex-col space-y-2 p-2">
        {comments?.map((comment, index) => (
          <Comment key={`${comment._id} ${index}`} comment={comment?.comment} />
        ))}

        <Button
          isLoading={isCommentLoading}
          colorScheme="gray"
          onClick={handleCommentLoading}
          spinner={<BeatLoader size={8} color="black" />}
        >
          Load more comments
        </Button>
      </div>
    </div>
  );
};
