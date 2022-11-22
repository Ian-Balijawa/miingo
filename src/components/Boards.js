import React from "react";
import BirthdayCard from "./BirthdayCard";
import Entertainment from "./Entertainment";
import Events from "./Events";
import FriendsSuggestion from "./FriendsSuggestion";
import Gallery from "./Gallery";
import Groups from "./Groups";
import LeadersBoard from "./LeadersBoard";

function Boards() {
  return (
    <div className="hidden sm:inline-block h-screen w-[340px] pb-72 bg-miingo-gray mt-2 overflow-y-auto scrollbar-hide">
      <div className="flex flex-col space-y-4 p-2">
        <LeadersBoard />
        
        <Groups />

        <Entertainment />

        <Gallery />
        <BirthdayCard />
        <Events />

        <FriendsSuggestion />
      </div>
    </div>
  );
}

export default Boards;
