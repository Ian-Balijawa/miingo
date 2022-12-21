import { ChatAltIcon, ShareIcon } from '@heroicons/react/outline';
import { HiDotsVertical, HiX } from 'react-icons/hi';

import { CommentInputBox } from './CommentInputField';
import { FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import TimeAgo from 'timeago-react';
import { actions } from '../state';
import axios from '../services/axios-config';
import useLocalStorage from '../hooks/useLocalStorage';
import { useState } from 'react';

function Post({
  postDesc,
  user,
  createdAt,
  image,
  _id,
  video,
  likes,
  commentsCount
}) {
  const [isCommentsVisible, setIsCommentsVisible] = useState(false);
  const [loggedInUser] = useLocalStorage('user');
  const [isPostDeleted, setIsPostDeleted] = useState(false);
  const [accessToken] = useLocalStorage('accessToken');

  const handleLike = () => {
    axios
      .patch(`/post/like/${_id}/user/${loggedInUser._id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then((res) => {
        actions.likePost(res.data.likes, _id);
      })
      .catch((err) => {});
  };

  const handleDelete = (e) => {
    axios
      .delete(`/post/${_id}/user/${user._id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then((res) => {
        actions.deletePost(_id);
      })
      .catch((err) => {});
  };

  return (
    <div className="flex flex-col bg-white my-3 post-description shadow-xl">
      <div className="p-5 bg-white">
        <div className="flex items-center justify-between space-x-2">
          <div className="flex items-center space-x-2">
            <div className=" w-6 h-6 md:w-8 md:h-8">
              <img
                className=" w-full h-full object-cover rounded-full"
                src={`https://ui-avatars.com/api/name=${
                  user && user?.name
                }&background=random`}
                alt=""
              />
            </div>

            <div>
              <p className="font-semibold  text-gray-500">
                {user ? user.name : 'Anonymous'}
              </p>
              <TimeAgo datetime={createdAt} locale="en_US" />
            </div>
          </div>

          <Link
            to={`/profile/${user ? user?._id : loggedInUser?._id}`}
            className="flex items-center"
          >
            <button
              className={`flex  mx-auto text-white bg-regal-orange hover:bg-orange-400 px-3 py-1 md:px-5 rounded-full shadow-xl font-normalhover:shadow-xl active:scale-90 transition duration-300 outline-none `}
            >
              About me
            </button>
          </Link>
        </div>

        <p className="pt-4 text-gray-600"> {postDesc} </p>
      </div>

      {image && (
        <div className="relative  mx-2 md:mx-8 h-56 md:h-96">
          <img
            src={image}
            className="w-full h-full object-contain bg-black"
            alt=""
          />
        </div>
      )}
      {video && (
        <div className="relative  mx-2 md:mx-8 h-56 md:h-96">
          <video src={video} className="w-full h-full object-cover" controls />
        </div>
      )}

      <div
        className={`flex  justify-between  items-center
              bg-white text-gray-600 px-2  py-3 mt-2`}
      >
        <div className=" flex items-center justify-center">
          <div
            className="rounded-none flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 hover:rounded-lg cursor-pointer"
            onClick={handleLike}
          >
            <FaThumbsUp color={likes > 0 ? 'red' : 'black'} />
            <p className="text-xs sm:text-base text-center">
              {`${likes} ${likes === 1 ? 'Like' : 'likes'}`}
            </p>
          </div>

          <div
            className="rounded-none flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 hover:rounded-lg cursor-pointer"
            onClick={() => setIsCommentsVisible(!isCommentsVisible)}
          >
            <p className="text-xs sm:text-base hidden md:inline-flex">
              {`${commentsCount} ${
                commentsCount === 1 ? 'Comment' : 'Comments'
              }`}
            </p>
            <ChatAltIcon className="h-6" />
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="rounded-none flex items-center space-x-2 hover:bg-gray-100 p-2 hover:rounded-lg cursor-pointer">
            <ShareIcon className="h-4" />
            <p className="text-xs sm:text-base">share</p>
          </div>

          <div
            className="rounded-none flex items-center space-x-2 hover:bg-gray-100 p-2 hover:rounded-full cursor-pointer"
            onClick={() => setIsPostDeleted(!isPostDeleted)}
          >
            {!isPostDeleted ? (
              <HiDotsVertical className="h-4" />
            ) : (
              <HiX className="h-4" />
            )}
          </div>

          {isPostDeleted && (
            <div className="absolute border -bottom-10 z-30 flex items-center space-x-2 bg-white hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
              <button
                onClick={handleDelete}
                className="text-xs sm:text-base"
                disabled={loggedInUser._id !== user._id}
              >
                Delete Post
              </button>
            </div>
          )}
        </div>
      </div>

      {isCommentsVisible && <CommentInputBox postId={_id} />}
    </div>
  );
}

export default Post;
