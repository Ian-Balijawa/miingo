import React from "react";

function LeaderStatus({ id, image , size }) {
  return (
    <div className= {`h-${size} w-${size} rounded-full border-2 border-blue-500 cursor-pointer hover:scale-105 ease-in-out duration-300`}>
      <img
        src={image}
        className="w-full h-full  rounded-full object-cover"
        loading="lazy"
        alt="status"
      />

    </div>
  );
}

export default LeaderStatus;
