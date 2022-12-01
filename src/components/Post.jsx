import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import {
  ChatAltIcon,
  ChevronDownIcon,
  ShareIcon
} from '@heroicons/react/outline';

import BeatLoader from 'react-spinners/BeatLoader';
import { CommentInputBox } from './CommentInputField';
import { FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import TimeAgo from 'timeago-react';
import axios from '../services/axios-config';
import { state } from '../state';
import { useSnapshot } from 'valtio';
import { useState } from 'react';

function Post({ postDesc, user, createdAt, image, _id }) {
  const [isCommentsVisible, setIsCommentsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [likes, setLikes] = useState([]);
  const snapshot = useSnapshot(state);
  const loggedInUser = snapshot.user;
  const accessToken = snapshot.accessToken;

  const handleLike = () => {
    axios
      .patch(`/post/${_id}/like/${loggedInUser._id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then((res) => {
        setLikes(res.data.likes);
      })
      .catch((err) => {});
  };

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
                {user ? user.name : 'some user'}
              </p>
              <TimeAgo datetime={createdAt} locale="en_US" />
            </div>
          </div>

          {/* About me */}
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
          <img src={image} className="w-full h-full object-cover" alt="" />
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
            <FaThumbsUp color={likes.length > 0 ? 'red' : 'black'} />
            <p className="text-xs sm:text-base hidden md:inline-flex">
              {`${likes.length || 0} Likes`}
            </p>
          </div>

          <div
            className="rounded-none flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 hover:rounded-lg cursor-pointer"
            onClick={() => setIsCommentsVisible(!isCommentsVisible)}
          >
            <ChatAltIcon className="h-6" />
            <p className="text-xs sm:text-base">comment</p>
          </div>
        </div>

        <div className=" flex items-center justify-center">
          <div className="rounded-none flex items-center space-x-2 hover:bg-gray-100 p-2 hover:rounded-lg cursor-pointer">
            <ShareIcon className="h-4" />
            <p className="text-xs sm:text-base">share</p>
          </div>

          <PostMenu
            postId={_id}
            onClick={() => {
              setIsOpen((isOpen) => !isOpen);
            }}
          />
        </div>
      </div>

      {isCommentsVisible && <CommentInputBox postId={_id} />}
    </div>
  );
}

export default Post;

const PostMenu = ({ postId }) => {
  const snapshot = useSnapshot(state);
  const [isDeleting, setIsDeleting] = useState(false);
  const accessToken = snapshot.accessToken;

  const handlePostDelete = () => {
    axios
      .delete(`/post/${postId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then((res) => {
        setIsDeleting(true);
        setIsDeleting(false);
        snapshot.deletePost(postId);
      })
      .catch((err) => {
        setIsDeleting(false);
      });
  };

  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            isActive={isOpen}
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
            {isOpen ? 'Close' : <Ellipsis />}
          </MenuButton>
          <MenuList>
            <MenuItem onClick={handlePostDelete}>
              {isDeleting ? <BeatLoader size="8" color="black" /> : 'Delete'}
            </MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
};

const Ellipsis = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
      />
    </svg>
  );
};
