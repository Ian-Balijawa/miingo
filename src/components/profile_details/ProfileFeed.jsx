import React from "react";
import Posts from "../Posts";

function ProfileFeed() {
  return (
    <div className="relative mt-2 w-full">
      <div className="space-y-7 px-2 sticky top-0">
        <Posts />
      </div>
    </div>
  );
}

export default ProfileFeed;
