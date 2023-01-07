import React from 'react';
import AboutDetails from './AboutDetails';
import AboutFeed from './AboutFeed';


export default function AboutTab() {
  return (
    <div className="h-screen bg-miingo-gray overflow-y-auto overflow-x-hidden scrollbar-hide">
    
      <main className="flex flex-col md:flex-row space-x-2 items-center pb-10 w-full">
       
        <AboutDetails />
        
         <AboutFeed  />
        
        </main>

    </div>
  );
}
