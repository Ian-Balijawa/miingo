import React from 'react';
import About from './About';
import CollegeMeet from './CollegeMeet';
import LikedPages from './LikedPages';


function ProfileSideFeed() {
  return (
    <div className="relative hidden lg:block w-[340px] mt-2">
    <div className="space-y-4  sticky top-0 ">
       
        <About />

       <LikedPages/> 
       
       <CollegeMeet />

    </div>
  </div>
  )
}

export default ProfileSideFeed;
