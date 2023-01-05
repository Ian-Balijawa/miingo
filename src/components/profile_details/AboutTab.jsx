import React from 'react'
import ProfileFeed from './ProfileFeed'
import AboutDetails from './AboutDetails'
import Hobiies from './Hobiies'
import ProfileBoards from './ProfileBoards';

export default function AboutTab() {
  return (
    <div className="h-screen bg-miingo-gray overflow-y-auto overflow-x-hidden scrollbar-hide">
    
      <main className=" flex space-x-2 px-2 pb-5">
        {/* Profile Side Feed /> */}
        <AboutDetails />
        <Hobiies/>
        <ProfileBoards/>
        </main>

    </div>
  )
}
