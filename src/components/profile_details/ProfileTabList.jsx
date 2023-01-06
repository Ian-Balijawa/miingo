import React, { useState } from 'react';
import { ThumbUpIcon } from '@heroicons/react/outline';

const ProfileTabList = ({ tabs, activeTab, setActiveTab }) => {
  const [likes] = useState(2);
  const [follow, setFollow] = useState(true);
  return (
    <div className=" flex justify-between ">
      <div>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={` hidden md:inline-flex  mx-auto px-2 mr-1 py-1 bg-miingo-cyan text-gray-700
                         md:px-4 rounded-lg  font-normal hover:shadow-xl active:scale-90 
                      transition duration-500 border `}
          >

            {tab.label}
          </button>
        ))}
      </div>
      <div className="hidden md:inline-flex items-center  mr-10">
        <div className="rounded-none flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 hover:rounded-lg cursor-pointer">
          <ThumbUpIcon className="h-6" />
          <p className="text-xs sm:text-base">{`${likes || 0}`}</p>
          <p className="text-sm hidden md:inline-flex ">
            {likes === 1 ? ' Like' : 'Likes'}
          </p>
        </div>

        <div
          onClick={(e) => {
            e.preventDefault();
            setFollow(!follow);
          }}
          className={`flex items-center space-x-1 ${follow && 'bg-gray-100 rounded-lg'
            }
            flex-grow justify-center p-2  cursor-pointer`}
        >
          <p className="text-xs sm:text-base">
            {follow ? ' UnFollow ' : 'Follow'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileTabList;
