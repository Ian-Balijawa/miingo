import BirthdayCard from './BirthdayCard';
import Entertainment from './Entertainment';
import Events from './Events';
import FriendsSuggestion from './FriendsSuggestion';
import Gallery from './Gallery';
import Groups from './Groups';
import LeadersBoard from './LeadersBoard';
import React from 'react';

function Boards() {
  return (
    <div className="relative hidden lg:block  w-[340px] mt-2  ">

      <div className=" space-y-4 sticky top-20 ">
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
