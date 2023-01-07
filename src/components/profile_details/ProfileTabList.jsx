import React, { useState } from "react";

const ProfileTabList = ({ tabs, activeTab, setActiveTab }) => {
 
  const [active, setActive] = useState(false);
  const [follow, setFollow] = useState(true);

  return (
    <div className=" flex justify-between  p-2 ">
      <div className=" flex items-center space-x-2">
        {tabs.map((tab) => (
          <>
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={` hidden md:inline-flex  mx-auto px-2 mr-1 py-1 bg-miingo-cyan text-gray-700
                         md:px-4 rounded-lg  font-normal hover:shadow-xl active:scale-90 
                      transition duration-500 border `}
            >
              {tab.label}
            </button>

            <p
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(tab.id);
                setActive(!active);
              }}
              className={`sm:hidden cursor-pointer mt-4 ${
                active &&
                "active:bg-gray-100 active:border-b-2 active:border-black"
              }`}
            >
              {tab.label}
            </p>
          </>
        ))}
      </div>

        {/* follow and unfollow user */}
      <div className="hidden md:inline-flex items-center justify-around space-x-2 ">
          <div
            onClick={(e) => {
              e.preventDefault();
              setFollow(!follow);
            }}
            className={`flex items-center space-x-1 ${
              follow && "bg-lightgraybg rounded-lg"
            }
            flex-grow justify-center p-2  cursor-pointer hover:bg-lightgraybg rounded-lg`}
          >
            <p className="text-xs sm:text-base">
              {follow ? " UnFollow " : "Follow"}
            </p>
          </div>
        </div>


    </div>
  );
};

export default ProfileTabList;
