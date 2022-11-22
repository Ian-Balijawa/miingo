import React from "react";

function Suggestion({ name, status, image }) {
  return (
    <div className="relative w-28 h-40 inline-block rounded-lg cursor-pointer mr-2 overflow-hidden">
      <div className=" w-full h-full">
         <img src={image} className="w-full h-full" alt="suggestion" /> 
      </div>

      <div className="absolute left-0 top-0  h-full w-full bg-black bg-opacity-50 hover:bg-opacity-70">
        <div className=" relative w-full h-full">
          <div className=" absolute bottom-2 flex flex-col items-center justify-center">
            <h3 className="text-white  text-center text-sm p-1">{name}</h3>
            <h6 className="text-white">{status}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Suggestion;
