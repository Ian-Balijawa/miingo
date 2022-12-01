import React from 'react';
import Gallery from '../Gallery';
import BirthdayCard from '../BirthdayCard';
import Events from '../Events';
import FriendsSuggestion from '../FriendsSuggestion';


function ProfileBoards() {
  return (
    <div className="relative hidden lg:block  w-[340px] mt-2  ">

    <div className=" space-y-4 sticky top-20 ">
       
      <Events /> 

      <Gallery />

      <BirthdayCard />

      <FriendsSuggestion profile = { true }/>

    </div>
  </div>
   
  );
}

export default ProfileBoards;
