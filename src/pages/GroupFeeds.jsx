import React from "react";
import BottomNav from "../components/BottomNav";
import GroupCards from "../components/GroupCards";
import Header from "../components/Header";
import SideFeed from "../components/SideFeed";


function GroupFeeds() {
  return (
    <div className="">
      <div className="h-screen bg-miingo-gray overflow-hidden font-serif">
        {/* Header */}
        <Header />

        <main className=" flex space-x-2 pr-3">
          {/* Side */}

          <SideFeed />

          {/* Groups */}

          <GroupCards />
        </main>

        <BottomNav />
      </div>
    </div>
  );
}

export default GroupFeeds;
