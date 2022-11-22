import React from "react";


function GroupInfo({ id, image, members, name, active }) {
  return (
    <div
      className={`flex items-center justify-between space-x-3  
    mb-2 relative hover:bg-gray-200 cursor-pointer
     p-2 pr-10 rounded-xl
    `}
    >
      <div className=" flex items-center space-x-3">
        <div className=" w-14 h-14 border-2 border-white rounded-full">
          <img
            src={image}
            className="w-full h-full rounded-full"
            alt="Group"
          />
          
        </div>

        <div className="">
          <p className="">{name}</p>
          <p className="text-xs font-medium text-gray-500">{members} Members</p>
        </div>
      </div>

      <div className=" flex items-center justify-center bg-green-400 text-white rounded-full w-7 h-7 ">
        <p className=" text-sm">{active}</p>
      </div>
    </div>
  );
}

export default GroupInfo;
