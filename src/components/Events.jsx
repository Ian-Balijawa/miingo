import React from "react";
import { FiRotateCw } from "react-icons/fi";
import { HiSun } from "react-icons/hi";

function Events() {
  return (
    <div className=" relative flex flex-col bg-white rounded-lg shadow-lg h-[450px] w-full overflow-hidden font-serif">
      <div className="absolute top-3 w-72 flex items-center justify-between mx-4 p-2">
        <div className="text-white">
          <h3 className="font-semibold">Events</h3>
        </div>


        <div className="flex items-center justify-around space-x-3">
          <div className="bg-miingo-cyan text-gray-600 rounded-full p-1 cursor-pointer">
            <FiRotateCw className="h-4 w-4" />
          </div>
          <div className="bg-miingo-cyan text-gray-600 rounded-full p-1 cursor-pointer">
            <HiSun className="h-4 w-4" />
          </div>
        </div>
      </div>

      <div className=" w-full h-56">
        <img
          src="/bg2.jpg"
          className="w-full h-full object-cover"
          alt="events-pic"
        />      
      </div>

      <div className="flex flex-col p-4 w-full">
        <div className="flex items-center justify-between ">
          <div className="">
            <h1 className="text-gray-700 font-semibold">Christmas 2021</h1>
            <p className="text-gray-600 text-xs ">26 January 2021</p>
          </div>

          <div className=" flex items-center justify-center bg-miingo-cyan p-3 rounded-lg cursor-pointer active:scale-90 transition ease-in-out duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3"
              />
            </svg>
          </div>
        </div>
        {/* description content */}
        <div className="w-full mt-4">
          <p className="w-full text-gray-500 overflow-hidden">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
          <h4 className="text-gray-700">15256 People Going</h4>
        </div>
      </div>

      {/* going button */}

      <div className=" absolute bottom-2 text-center bg-miingo-cyan text-blue-500 ml-2 p-2 cursor-pointer rounded-lg text-sm active:scale-90 transition ease-in-out duration-300">
        Going/Not Going
      </div>
    </div>
  );
}

export default Events;
