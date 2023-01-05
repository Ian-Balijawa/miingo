import ProfileBanner from './ProfileBanner';
import ProfileBoards from './ProfileBoards';
import ProfileFeed from './ProfileFeed';
import ProfileSideFeed from './ProfileSideFeed';

export default function TimeLine() {
 
  return (
    <div className="h-screen bg-miingo-gray overflow-y-auto overflow-x-hidden scrollbar-hide">
    
      <main className=" flex space-x-2 px-2 pb-10">
        {/* Profile Side Feed /> */}
        <ProfileSideFeed />

        {/* Profile  Feed */}

        <ProfileFeed />

        {/*  Profile Boards */}

        <ProfileBoards />
      </main>

    </div>
  );
}
