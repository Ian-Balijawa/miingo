import { actions, state } from '../state';

import BeatLoader from 'react-spinners/BeatLoader';
import { Button } from '@chakra-ui/react';
import { Comment } from './Comment';
import axios from '../services/axios-config';
import { useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { useSnapshot } from 'valtio';
import { useState } from 'react';

export const CommentInputBox = ({ postId }) => {
  const [user] = useLocalStorage('user');
  const snap = useSnapshot(state);
  const [isCommentLoading, setIsCommentLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`/post/comment/${postId}`)
      .then((res) => {
        actions.addComments(res.data);
      })
      .catch((err) => {});
  }, [postId]);

  const handleCommentLoading = (e) => {
    setIsCommentLoading(true);
    setTimeout(() => {
      setIsCommentLoading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col bg-white my-3 post-description">
      <div className="p-5 bg-white">
        <div className="flex items-center justify-between space-x-2">
          <div className="flex items-center space-x-2">
            <div className=" w-6 h-6 md:w-8 md:h-8">
              <img
                className=" w-full h-full object-cover rounded-full"
                src={`https://ui-avatars.com/api/name=${user?.name}&background=random`}
                alt=""
              />
            </div>

            <div>
              <p className="font-semibold  text-gray-500">{user.name}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-2 p-2">
        <Comment postId={postId} />
        {snap.comments.length > 2 && (
          <Button
            isLoading={isCommentLoading}
            colorScheme="gray"
            onClick={handleCommentLoading}
            spinner={<BeatLoader size={8} color="black" />}
          >
            Load more comments
          </Button>
        )}
      </div>
    </div>
  );
};
