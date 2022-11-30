import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from '../services/axios-config';
import { signout } from '../app/slices/authSlice';
import { HiOutlineLogout } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Profile from '../components/Profile';
import useLocalStorage from "../hooks/useLocalStorage";


export default function ProfilePage() {

  const [user] = useLocalStorage("user");
  const [logout, setLogout] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userName] = useState(user.name.split(" "));

  const showDropdown = () => {
    setLogout(!logout);
  };

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      await axios.patch('/auth/logout');
      dispatch(signout());
    } catch (error) {
      console.error('ERROR: ', error);
    }
    dispatch(signout());
    navigate('/');
  };

  return (
    <div className="h-screen bg-miingo-gray overflow-hidden">
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

            <Link  to={`/profile/${user._id}`} className="text-sm hover:bg-gray-200 cursor-pointer border-b mb-2 text no-underline ">
              {" "}
              Profile{" "}
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
         
         {/* profile body */}
      <main className="">
        <Profile user={user} />
      </main>

    </div>
  );
}
