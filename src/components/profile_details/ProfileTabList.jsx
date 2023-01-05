import React from 'react';

const ProfileTabList = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className=" ">
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
  );
};

export default ProfileTabList;
