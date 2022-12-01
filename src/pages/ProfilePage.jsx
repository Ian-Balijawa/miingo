import Header from '../components/Header';
import { HiOutlineLogout } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import ProfileBanner from '../components/profile_details/ProfileBanner';
import ProfileBoards from '../components/profile_details/ProfileBoards';
import ProfileFeed from '../components/profile_details/ProfileFeed';
import ProfileSideFeed from '../components/profile_details/ProfileSideFeed';
import axios from '../services/axios-config';
import { state } from '../state';
import { useNavigate } from 'react-router-dom';
import { useSnapshot } from 'valtio';
import { useState } from 'react';

export default function ProfilePage() {
  const snapshot = useSnapshot(state);
  const [logout, setLogout] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const user = snapshot.user;
  const userName = user?.name?.split(' ')[0];

  const showDropdown = () => {
    setLogout(!logout);
  };

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      await axios.patch('/auth/logout', {
        headers: {
          Authorization: `Bearer ${snapshot.accessToken}`
        }
      });
      navigate('/');
    } catch (error) {
      setError(error.response.data.message);
    }
    navigate('/');
  };

  return (
    <div className="h-screen bg-miingo-gray overflow-y-auto overflow-x-hidden">
      <Header onPress={showDropdown} />

      {logout && (
        <div className="absolute top-16 right-14 z-50 bg-white shadow-xl rounded-lg h-auto w-28 p-2">
          <div className="py-1">
            <div className="w-4 h-4 right-3 md:left-3 absolute mt-1 bg-white -top-3  rotate-45"></div>
          </div>

          <p className="text-sm hover:bg-gray-200 cursor-pointer border-b mb-2 sm:hidden">
            {userName}
          </p>

          <Link
            to={`/profile/${user?._id}`}
            className="text-sm hover:bg-gray-200 cursor-pointer border-b mb-2 text no-underline "
          >
            {' '}
            Profile{' '}
          </Link>
          <p
            onClick={handleLogout}
            className="text-sm hover:bg-gray-200 cursor-pointer flex items-center space-x-3"
          >
            <span className="">
              <HiOutlineLogout className="w-5 h-5 hover:scale-105 transition ease-out duration-300 " />
            </span>
            <span>Logout</span>
          </p>
          {error && <p className="text-red-500 text-xs">{error}</p>}
        </div>
      )}

      <ProfileBanner user={user} />

      <main className=" flex space-x-2 pr-3 pb-10">
        {/* Profile Side Feed /> */}
        <ProfileSideFeed />

        {/* Profile  Feed */}

        <ProfileFeed />

        {/*  Profile Boards */}

        <ProfileBoards />
      </main>

      {/* <main className="">
        <Profile user={user} />
      </main> */}
    </div>
  );
}
