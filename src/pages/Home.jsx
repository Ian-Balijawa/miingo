import Boards from '../components/Boards';
import BottomNav from '../components/BottomNav';
import Feed from '../components/Feed';
import Header from '../components/Header';
import React from 'react';
import Statuses from '../components/Statuses';
import Widgets from '../components/Widgets';

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
