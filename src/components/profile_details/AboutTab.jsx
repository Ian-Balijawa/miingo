import React from 'react'
import ProfileFeed from './ProfileFeed'
import AboutDetails from './AboutDetails'
import Hobiies from './Hobiies'
import ProfileBoards from './ProfileBoards';

export default function AboutTab() {
  return (
    <div className="h-screen bg-miingo-gray overflow-y-auto overflow-x-hidden scrollbar-hide">
    
      <main className="relative flex space-x-2 pr-3 pb-10">
        {/* Profile Side Feed /> */}
        <AboutDetails />
        <Hobiies/>
        <ProfileBoards/>
        </main>

    </div>
  )
}
