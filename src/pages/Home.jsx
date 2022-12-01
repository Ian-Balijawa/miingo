import { Link, useNavigate } from 'react-router-dom';

import Boards from '../components/Boards';
import BottomNav from '../components/BottomNav';
import Feed from '../components/Feed';
import Header from '../components/Header';
import { HiOutlineLogout } from 'react-icons/hi';
import React from 'react';
import SideFeed from '../components/SideFeed';
import Statuses from '../components/Statuses';
import axios from '../services/axios-config';
import { state } from '../state';
import { useSnapshot } from 'valtio';

const { useState } = React;

function Home() {
  const [logout, setLogout] = useState(false);
  const navigate = useNavigate();
  const snap = useSnapshot(state);
  const name = snap.user?.name;

  const userName = name?.split(' ')[0];

  const showDropdown = () => {
    setLogout(!logout);
  };

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      await axios.patch('/auth/logout');
      snap.removeUser();
      snap.removeAccessToken();
    } catch (error) {
      console.error('ERROR: ', error);
    }
    snap.removeUser();
    snap.removeAccessToken();
    navigate('/');
  };

  return (
    <div className="">
      <div className=" relative h-screen bg-miingo-gray overflow-hidden font-serif">
        {/* Header */}
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
              to={`/profile/${snap.user._id}`}
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

        <Statuses />

        <main className=" flex space-x-2 pr-3">
          {/* chat */}

          {/* <Widgets /> */}
          <SideFeed />

          {/* Feed */}

          <Feed />

          {/* Boards */}

          <Boards className="flex flex-grow" />
        </main>

        <BottomNav />
      </div>
    </div>
  );
}

export default Home;
