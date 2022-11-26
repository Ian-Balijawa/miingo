import Boards from '../components/Boards';
import BottomNav from '../components/BottomNav';
import Feed from '../components/Feed';
import Header from '../components/Header';
import React from 'react';
import SideFeed from '../components/SideFeed';
import Statuses from '../components/Statuses';
import axios from '../services/axios-config';
import useLocalStorage from '../hooks/useLocalStorage';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Home() {
  const [logout, setLogout] = useState(false);
  const navigate = useNavigate();
  const showDropdown = () => {
    setLogout(!logout);
  };
  const [user, _] = useLocalStorage('user');

  const signOut = async (e) => {
    e.preventDefault();
    try {
      await axios.patch('/auth/logout', {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      });
      navigate('/login');
      localStorage.removeItem('token');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <div className=" relative h-screen bg-miingo-gray overflow-hidden font-serif">
        {/* Header */}
        <Header onPress={showDropdown} />

        {logout && (
          <div className="absolute top-16 right-14 z-50 bg-white shadow-xl rounded-lg h-auto w-28 p-2">
            <p className="text-sm hover:bg-gray-200 cursor-pointer border-b mb-2 ">
              {' '}
              Profile{' '}
            </p>
            <p
              onClick={signOut}
              className="text-sm hover:bg-gray-200 cursor-pointer"
            >
              Logout
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

          <Boards />
        </main>

        <BottomNav />
      </div>
    </div>
  );
}

export default Home;
