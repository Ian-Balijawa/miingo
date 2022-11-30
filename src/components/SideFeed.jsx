
import React from "react";
import NewsFeeds from "./NewsFeeds";
import About from "./profile_details/About";
import CollegeMeet from "./profile_details/CollegeMeet";
import LikedPages from "./profile_details/LikedPages";
import Widgets from "./Widgets";


function SideFeed({ group }) {
  return (
    <div className="hidden lg:block h-screen pb-72 px-3 bg-miingo-gray mt-2 overflow-y-auto scrollbar-hide ">
      <div className="flex flex-col space-y-4 p-2 ">

         <Widgets group={group}/>
         <NewsFeeds />
         <LikedPages/> 
         <About />
         <CollegeMeet />

      </div>
    </div>
  );
}

export default SideFeed;
