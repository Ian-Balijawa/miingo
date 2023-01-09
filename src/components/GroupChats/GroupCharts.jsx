import React from "react";

function GroupCharts({ message, reply , src }) {
  return (
    <div className="h-auto">
      {/* First msg */}

      {reply && (
        <div className="flex items-start justify-start my-4 ">
          <div className="flex flex-col space-y-2 text-xs max-w-xs md:max-w-md mx-2 order-2 items-start ">
            <p className="px-4 py-2  w-auto rounded-lg  rounded-bl-none bg-white shadow-lg text-gray-600 ">
              {reply}
            </p>
          </div>

          <img
            src={src}
            className="w-7 h-7 rounded-full order-1"
            loading="lazy"
            alt="profile"
          />
        </div>
      )}

      {/* second msg */}

      <div className="flex items-end justify-end my-4 ">
        <div className="flex flex-col space-y-2 text-xs  max-w-sm md:max-w-md mx-2 order-2 items-end  rounded-md ">
          <p className="px-4 py-2  w-auto rounded-xl  rounded-tl-none rounded-br-none bg-green-100 shadow-lg text-gray-600">
            { message }
          </p>
        </div>

        <img
          src= { src }
          className="w-7 h-7 rounded-full order-2"
          loading="lazy"
          alt="profile"
        />

      </div>
      
    </div>
  );
}

export default GroupCharts;
