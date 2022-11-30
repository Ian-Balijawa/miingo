import NewsFeeds from './NewsFeeds';
import React from 'react';
import Widgets from './Widgets';

function SideFeed({ group }) {
  return (
    <div className="hidden lg:block h-screen pb-72 px-3 bg-miingo-gray mt-2 overflow-y-auto scrollbar-hide ">
      <div className="flex flex-col space-y-4 p-2 ">
        <Widgets group={group} />
        <NewsFeeds />
      </div>
    </div>
  );
}

export default SideFeed;
