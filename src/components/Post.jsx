import {
  ChatAltIcon,
  ShareIcon,
  ThumbDownIcon,
  ThumbUpIcon,
} from "@heroicons/react/outline";
import React from "react";

function Post({ name, message, email, timestamp, postImage }) {
  return (
    <div className="flex flex-col bg-white shadow-xl my-3">
      <div className="p-5 bg-white mt-5  shadow-sm">
        <div className="flex items-center justify-between space-x-2">
          <div className="flex  items-center space-x-2">
            <img className="rounded-full" src="/ml.jpg" alt="" />
            <div>
              <p className="font-semibold  text-gray-500">{name}</p>
              <p className="text-xs text-gray-400">{timestamp}</p>
            </div>
          </div>

          {/* About me */}
          <div className="flex items-center">
            <button
              className={`flex  mx-auto text-white bg-regal-orange hover:bg-orange-400 px-3 py-1 md:px-5 rounded-full shadow-xl font-normal
                         hover:shadow-xl active:scale-90 transition duration-300 outline-none `}
            >
              About me
            </button>
          </div>
        </div>

        <p className="pt-4 text-gray-600"> {message} </p>
      </div>

      {postImage && (
        <div className="relative  mx-2 md:mx-8 h-56 md:h-96">
          <img src={postImage} className="w-full h-full object-cover" alt="" />
        </div>
      )}

      {/* footer of post */}
      <div
        className={`flex  justify-around  items-center 
              bg-white shadow-md text-gray-600 px-2  py-3 mt-2`}
      >
        <div className="rounded-none flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 hover:rounded-lg cursor-pointer">
          <ThumbUpIcon className="h-6" />
          <p className="text-xs sm:text-base hidden md:inline-flex"> 12k Likes </p>
        </div>

        <div className="rounded-none flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 hover:rounded-lg cursor-pointer">
          <ThumbDownIcon className="h-6" />
          <p className="text-xs sm:text-base hidden md:inline-flex">20 Dislikes</p>
        </div>

        <div className="rounded-none flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 hover:rounded-lg cursor-pointer">
          <ChatAltIcon className="h-6" />
          <p className="text-xs sm:text-base">comment</p>
        </div>

        <div className="rounded-none flex items-center space-x-2 hover:bg-gray-100 p-2 hover:rounded-lg cursor-pointer">
          <ShareIcon className="h-4" />
          <p className="text-xs sm:text-base">share</p>
        </div>

        <div className="  hover:bg-gray-100 p-2 hover:rounded-full cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Post;
