import React from "react";
import Posts from "../Posts";

function ProfileFeed() {
  return (
    <div className="relative  mt-2 w-full md:w-[880px] lg:w-[640px] pb-2">
      <div className="space-y-7 px-2 sticky top-0">
        <Posts />
      </div>
    </div>
  );
}

export default ProfileFeed;
