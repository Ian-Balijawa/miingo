import React from 'react';
import { state } from '../state';
import { useSnapshot } from 'valtio';

export const Comment = ({ postId }) => {
  const snapshot = useSnapshot(state);
  const comments = snapshot.comments;
  const commentsForPost = comments?.filter(
    (comment) => comment?.post === postId
  );

  return (
    <div className="flex items-center space-x-2 p-2 bg-white mt-2">
      {commentsForPost?.map((comment) => (
        <React.Fragment>
          <div className=" w-6 h-6 md:w-8 md:h-8">
            <img
              className="w-full h-full object-cover rounded-full"
              src="/images/ml.jpg"
              alt={comment?.user?.name}
            />
          </div>

          <div>
            <p className="font-semibold  text-gray-500">
              {comment?.user?.name}
            </p>
            <p className="text-xs text-gray-400">{comment?.comment}</p>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};
