import React from "react";

function CollegeStatus({ image }) {
  return (
    <div className=" h-11  w-11  inline-flex rounded-full cursor-pointer -mr-4">
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

export default CollegeStatus;
