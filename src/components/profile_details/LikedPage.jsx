import React, { useState } from "react";
import { HiOutlineStar } from "react-icons/hi";
import { HiOutlineUser } from "react-icons/hi";

function LikedPage({ Icon, pagetitle, subtitle, likes, color }) {

    const [ starred, SetStarred] = useState(false);

  return (
    <div className="bg-white sticky top-0 z-50 flex space-x-4 items-center justify-between text-gray-800 mb-5 p-2 border-b cursor-pointer">
      <div
        className={`${color} w-14 h-14 rounded-full p-2 flex items-center justify-center `}
      >
        <Icon className=" h-8 w-8 text-white" />
      </div>

      <div className="">
        <div className="">
          <h2 className="text-base text-gray-500 font-semibold font-sans">
            {pagetitle}
          </h2>
        </div>

        <div className="flex items-center space-x-2 text-sm text-gray-400 font-medium">
          <h3 className="">{subtitle}</h3>
          <span className=" flex ">
            <HiOutlineUser className="w-4 h-4" />
            {likes}
          </span>
        </div>
      </div>

      <div 
        onClick={ (e) => {
            e.preventDefault();
            SetStarred(!starred);
        }}
      className={`flex items-center justify-center w-8 h-8 rounded-full ${ starred && "bg-lightgraybg"} font-bold  p-2 cursor-pointer`}>
        <HiOutlineStar className="h-4 w-4" />
      </div>

    </div>
  );
}

export default LikedPage;
