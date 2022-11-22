import React from "react";
import Boards from "./Boards";
import BottomNav from "./BottomNav";
import Feed from "./Feed";
import Header from "./Header";
import Statuses from "./Statuses";
import Widgets from "./Widgets";

function Home() {
  return (
    <div className="">
      <div className="h-screen bg-miingo-gray overflow-hidden font-serif">
        {/* Header */}
        <Header />

        <Statuses />

        <main className=" flex space-x-2 pr-3">
          {/* chat */}

          <Widgets />

          {/* Feed */}

          <Feed />

          {/* Boards */}

          <Boards />
        </main>

        <BottomNav />

      </div>
    </div>
  );
}

export default Home;
