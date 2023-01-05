import ProfileBanner from '../components/profile_details/ProfileBanner';
import ProfileBoards from '../components/profile_details/ProfileBoards';
import ProfileFeed from '../components/profile_details/ProfileFeed';
import ProfileSideFeed from '../components/profile_details/ProfileSideFeed';
import useLocalStorage from '../hooks/useLocalStorage';
import ProfileTabs from '../components/profile_details/ProfileTabs';

export default function ProfilePage() {
 
  const [user] = useLocalStorage('user');

  return (
    <div className="h-screen bg-miingo-gray overflow-y-auto overflow-x-hidden scrollbar-hide">
      <ProfileBanner user = { user } />
    </div>
  );
}
