import GroupCards from '../components/GroupCards';
import React from 'react';
import SideFeed from '../components/SideFeed';

function GroupFeeds() {
  return (
    <div className="h-screen bg-miingo-gray font-serif overflow-y-auto overflow-x-hidden scrollbar-hide">
      <main className="flex space-x-2 pr-3 pb-2">
        {/* Side */}

        <SideFeed />

        {/* Groups */}

        <GroupCards />
      </main>
    </div>
  );
}

export default GroupFeeds;
