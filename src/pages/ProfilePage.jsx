import ProfileBanner from '../components/profile_details/ProfileBanner';
import ProfileBoards from '../components/profile_details/ProfileBoards';
import ProfileFeed from '../components/profile_details/ProfileFeed';
import ProfileSideFeed from '../components/profile_details/ProfileSideFeed';
import useLocalStorage from '../hooks/useLocalStorage';


export default function ProfilePage() {
 
  const [user] = useLocalStorage('user');

  return (
    <div className="h-screen bg-miingo-gray overflow-y-auto overflow-x-hidden scrollbar-hide">
     
      <ProfileBanner user = { user } />

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
