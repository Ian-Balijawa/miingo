import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import {
  ChatAltIcon,
  ChevronDownIcon,
  ShareIcon
} from '@heroicons/react/outline';
import { Link, useParams } from 'react-router-dom';

import BeatLoader from 'react-spinners/BeatLoader';
import { FaThumbsUp } from 'react-icons/fa';
import TimeAgo from 'timeago-react';
import axios from '../services/axios-config';
import { state } from '../state';
import { useSnapshot } from 'valtio';
import { useState } from 'react';

function Post({ postDesc, user, createdAt, image, _id }) {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
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
        console.log('LIKED POST: ', _id);
        setLikes(res.data.likes);
        console.log('liked: ', res.data.likes);
      })
      .catch((err) => {
        console.log('ERROR: ', err);
      });
  };

  const handleComment = () => {
    axios
      .post(
        `/comment/${_id}`,
        { comment },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
      )
      .then((res) => {
        setComments(res.data.comments);
        setComment('');
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

      {/* footer of post */}
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
            onClick={() => {
              setIsCommentsVisible((isCommentsVisible) => !isCommentsVisible);
            }}
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

      {isCommentsVisible && <CommentInputBox />}
    </div>
  );
}

const CommentInputBox = () => {
  const snapshot = useSnapshot(state);
  const loggedInUser = snapshot.user;
  const accessToken = snapshot.accessToken;
  const [comment, setComment] = useState('');
  const { _id } = useParams();
  const [isCommentLoading, setIsCommentLoading] = useState(false);
  const [comments, setComments] = useState([
    {
      _id: '1',
      comment: 'this is a comment',
      user: {
        _id: '1',
        name: loggedInUser.name
      }
    },
    {
      _id: '2',
      comment: 'this is a comment',
      user: {
        _id: '2',
        name: loggedInUser.name
      }
    },
    {
      _id: '3',
      comment: 'this is a comment',
      user: {
        _id: '3',
        name: loggedInUser.name
      }
    },
    {
      _id: '4',
      comment: 'this is a comment',
      user: {
        _id: '4',
        name: loggedInUser.name
      }
    }
  ]);

  const handleComment = () => {
    axios
      .post(
        `/post/comment/${_id}`,
        { comment },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
      )
      .then((res) => {
        setComments(res.data.comments);
        setComment('');
      })
      .catch((err) => {});
  };
  const handleCommentLoading = (e) => {
    setIsCommentLoading(true);
    setTimeout(() => {
      setIsCommentLoading(false);
    }, 1000);
  };

  const sortedComments = [...comments].sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });
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
                {loggedInUser ? loggedInUser.name : 'some user'}
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
            onClick={() => {
              handleComment();
              setComments([...comments, { comment, user: loggedInUser }]);
            }}
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
        {comments.map((comment) => (
          <Comment comment={comment} />
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

const Comment = ({ comment }) => {
  return (
    <div className="flex items-center space-x-2 p-2 bg-white mt-2">
      <div className=" w-6 h-6 md:w-8 md:h-8">
        <img
          className=" w-full h-full object-cover rounded-full"
          src="/images/ml.jpg"
          alt=""
        />
      </div>

      <div>
        <p className="font-semibold  text-gray-500">{comment.user.name}</p>
        <p className="text-xs text-gray-400">{comment.comment}</p>
      </div>
    </div>
  );
};

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
        console.log('DELETED POST: ', res.data);
        setIsDeleting(false);
        snapshot.deletePost(postId);
      })
      .catch((err) => {
        console.log(err);
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
