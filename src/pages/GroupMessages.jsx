import { useLocation } from 'react-router-dom';
import Boards from '../components/Boards';
import GroupChart from '../components/GroupChats/GroupChart';
import React from 'react';
import SideFeed from '../components/SideFeed';

function GroupMessages() {

  const location = useLocation();
  const { src, name, members } = location.state;

  return (
    <div className="relative lg:h-screen bg-miingo-gray">
    
      <div className="px-5">
        <div className=" w-full h-20 md:h-28">
          <img
            src={src}
            className="h-full w-full object-cover"
            alt="coverimage"
          />
        </div>
      </div>

      <main className="flex space-x-2 pr-3">
        {/* Side_feed */}

        <SideFeed group={ true } />

        {/* Group_Messages */}

        <GroupChart name={name} src={src} members={members} />

        {/* Boards */}

        <Boards />

      </main>
      
    </div>
  );
}

export default GroupMessages;
