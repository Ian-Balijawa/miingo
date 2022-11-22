import React from 'react';

function EntertainmentInfo({ id, image, title, description }) {
  return (
    <div
    className={`flex items-center  space-x-3  
  mb-2 relative hover:bg-gray-100 cursor-pointer
   p-2 pr-10 rounded-xl
  `}
  >
    
      <div className=" w-28 h-20 border-2  rounded-md">
        <img
          src={image}
          className="w-full h-full rounded-md"
          loading='lazy'
          alt="Group"
        />
      </div>

    <div className="">
        <p className="">{title}</p>
        <p className="text-xs font-medium text-gray-500 max-w-sm">{ description }</p>
    </div>

  </div>
  )
}

export default EntertainmentInfo;
