import React from "react";
import { HiOutlineVideoCamera } from "react-icons/hi2";

function GroupCard({ id, src, name, email, image }) {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-xl h-auto w-full overflow-hidden font-serif">
      <div className=" w-full h-28">
        <img src={ image } className="w-full h-full object-cover" alt="bg-pic" />
      </div>

      <div className="relative flex items-center justify-between space-x-2 p-4 ">
        <div className="absolute -top-6 md:-top-10 w-14 h-14 md:w-20 md:h-20  rounded-full border-4 border-white ">
          <img
            src={src}
            className="w-full h-full rounded-full object-cover "
            alt="group-profile"
          />
        </div>

        <div className="pl-12 md:pl-16 lg:pl-20 flex items-center justify-between space-x-2 lg:space-x-4">
          <div className="w-28 lg:w-44">
            <h1 className="text-gray-700 font-semibold"> { name }</h1>
            <p className="text-gray-600 text-xs "> { email }</p>
          </div>

          <div className="flex items-center  space-x-3 flex-grow">
            <div className="flex items-center justify-center cursor-pointer bg-blue hover:bg-blue-400 active:scale-95 transition ease-in-out duration-300 rounded-full w-10 h-10">
              <HiOutlineVideoCamera className="w-6 h-6 text-white" />
            </div>

            <div className="flex items-center justify-center cursor-pointer bg-blue hover:bg-blue-400 active:scale-95 transition ease-in-out duration-300 rounded-full py-2 px-3">
              <p className="text-white text-sm">FOLLOW</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default GroupCard;