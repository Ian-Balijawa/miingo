import React from "react";
import Charts from "./Charts";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";

export default function GroupChart({ src, name, members }) {
  return (
    <>
      <div className="relative flex flex-col flex-grow bg-miingo-gray">
        <div className="sticky top-24 flex flex-col space-y-2 px-2">

          <div className=" flex  items-center p-3 mb-2 shadow-md ">
            <img
              className="object-cover w-10 h-10 rounded-full"
              src={ src }
              alt="username"
            />
            <div>

              <h1 className=" ml-2 font-bold text-gray-600">
                { name } <br />{" "}
              </h1>

              <p className="flex items-center space-x-2">
                <small className=" ml-2 text-gray-900">
                  { members } { members > 1 ? "members" : "member"} <br />{" "}
                </small>
              </p>

            </div>
          </div>

          {/* Group Chart messages */}

          <Charts src = { src } />
         
          <div className="hidden md:inline-flex items-center sticky bottom-0 justify-between w-full p-3 border-t border-lightgraybg rounded-t-lg">
            {/* left */}
            <div className="flex-grow">
              <input
                type="text"
                placeholder="Type a message"
                className="border-0 px-3 border-none  py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white  rounded-full text-sm shadow outline-none focus:outline-none  w-full pl-10"
                required
              />
            </div>

            {/* right */}
            <div className=" p-2 flex items-center justify-center space-x-3">
              <button
                className={`focus:outline-none outline-none border-none cursor-pointer 
            active:scale-90  rounded-full hover:bg-lightgraybg p-2 transition ease-in-out
             duration-300
          `}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                  />
                </svg>
              </button>

              <button
                className={`focus:outline-none outline-none border-none cursor-pointer 
            active:scale-90  rounded-full hover:bg-lightgraybg p-2 transition ease-in-out
             duration-300
          `}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-700 focus:outline-none outline-none border-none"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                  />
                </svg>
              </button>

              <button
                className={`focus:outline-none outline-none border-none cursor-pointer 
               active:scale-90  rounded-full hover:bg-lightgraybg p-2 transition ease-in-out
               duration-300
          `}
              >
                <svg
                  className="w-5 h-5 text-gray-700 origin-center transform rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </div>

          <div className='absolute bottom-20 right-2 md:hidden  flex items-center justify-center p-3 bg-lightgraybg rounded-full w-12 h-12 shadow-xl active:scale-90 transition ease-in-out duration-300'>
             <HiOutlineChatBubbleBottomCenterText className=' w-10 h-10  text-black' />
        </div>

        </div>
      </div>
    </>
  );
}
