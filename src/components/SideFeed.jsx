
import React from "react";
import NewsFeeds from "./NewsFeeds";
import Widgets from "./Widgets";


function SideFeed({ group }) {
  return (
    <div className="relative hidden lg:block w-[340px] mt-2">
      <div className="space-y-4  px-2 sticky top-20">

         <Widgets group={group}/>
         <NewsFeeds />
      
      </div>
    </div>
  );
}

export default SideFeed;
