import React from "react";

function Photo({ image }) {
  return (
    <div className=" w-full md:w-56 h-56 border p-2 rounded-sm">
      <img
        src={image}
        className="w-full h-full object-cover rounded-sm hover:scale-105 transition ease-out duration-300 cursor-pointer"
        alt="user-uploaded-image"
      />
    </div>
  );
}

export default Photo;
