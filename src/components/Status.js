import React from "react";


function Status({ id, image }) {
  return (
    <div className=" h-16 md:h-20 w-16 md:w-20 inline-block rounded-full  border-2 border-blue-300 cursor-pointer hover:scale-105 ease-in-out duration-300 mr-2">
      <div className="w-full h-full">
        <img
          src={image}
          className="w-full h-full  rounded-full object-cover"
          alt="status "
        />
        
      </div>
    </div>
  );
}

export default Status;
