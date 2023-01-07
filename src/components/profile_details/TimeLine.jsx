import ProfileBanner from './ProfileBanner';
import ProfileBoards from './ProfileBoards';
import ProfileFeed from './ProfileFeed';
import ProfileSideFeed from './ProfileSideFeed';

export default function TimeLine() {
 
  return (
    <div className="h-screen bg-miingo-gray w-full overflow-y-auto overflow-x-hidden scrollbar-hide">
    
      <main className=" flex  md:px-3  pb-10 w-full">
        {/* Profile Side Feed /> */}
        <ProfileSideFeed />

        {/* Profile  Feed */}

        <ProfileFeed />

         {/* Profile Boards */}

        <ProfileBoards />
      </main>

    </div>
  );
}
