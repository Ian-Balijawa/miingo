import { Link, useNavigate } from 'react-router-dom';

import BottomNav from '../components/BottomNav';
import GroupCards from '../components/GroupCards';
import Header from '../components/Header';
import { HiOutlineLogout } from 'react-icons/hi';
import React from 'react';
import SideFeed from '../components/SideFeed';
import axios from '../services/axios-config';
import useLocalStorage from '../hooks/useLocalStorage';
import { useState } from 'react';

function GroupFeeds() {
  const [logout, setLogout] = useState(false);
  const [user] = useLocalStorage('user');
  const [userName] = useState(user.name.split(' '));
  const [accessToken] = useLocalStorage('accessToken');

  const navigate = useNavigate();

  const showDropdown = () => {
    setLogout(!logout);
  };

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.patch('/auth/logout', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
    } catch (error) {
      if (error) {
        console.log(error);
      }
    }

    localStorage.removeItem('token');

    navigate('/');
  };

  return (
    <div className="">
      <div className="h-screen bg-miingo-gray overflow-hidden font-serif">
        {/* Header */}

        <Header onPress={showDropdown} />

        {logout && (
          <div className="absolute top-16 right-14 z-50 bg-white shadow-xl rounded-lg h-auto w-28 p-2">
            <div className="py-1">
              <div className="w-4 h-4 right-3 md:left-3 absolute mt-1 bg-white -top-3  rotate-45"></div>
            </div>

            <p className="text-sm hover:bg-gray-200 cursor-pointer border-b mb-2 sm:hidden">
              {userName[0]}
            </p>

            <Link
              to={`/profile/${user._id}`}
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
          </div>
        )}

        <main className="flex space-x-2 pr-3">
          {/* Side */}

          <SideFeed />

          {/* Groups */}

          <GroupCards />
        </main>

        <BottomNav />
        
      </div>
    </div>
  );
}

export default GroupFeeds;
