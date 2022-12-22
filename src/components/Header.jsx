
import { HomeIcon, SearchIcon } from '@heroicons/react/outline';
import { Link, useNavigate } from 'react-router-dom';
import { HiMenuAlt3 } from 'react-icons/hi';
import { useSnapshot } from 'valtio';
import useLocalStorage from '../hooks/useLocalStorage';
import { useState } from 'react';
import { state } from '../state';

function Header({ onPress, showMenuModal }) {
  const { me: user } = useSnapshot(state);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/coming');
  };

  
  
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className=" bg-white  sticky top-0 z-50 flex justify-between p-1 lg:pr-10 lg:px-5 shadow-md space-x-2 md:space-x-4">
      {/* left */}
      <Link to="/feed" className=" flex items-center space-x-2 w-56">
        <div className="flex items-center justify-center rounded-full bg-regal-orange w-14 md:w-16  h-14 md:h-16">
          <p className="text-white text-base text-center">Miingo</p>
        </div>

        <div className="flex items-center justify-center">
          <p className="text-orange-600 text-base">MiingoApp</p>
        </div>
      </Link>

      {/* center */}

      <div className="flex flex-grow items-center space-x-2 md:space-x-4  md:w-[500px] lg:w-[700px] ">
        <div className="flex items-center rounded-full bg-white p-2 border-2 md:flex-grow">

          <input
            type="text"
            placeholder="Start typing to search..."
            className={` ${

              showSearch ? "w-32 md:flex-grow " : "hidden md:flex md:flex-grow"
            } mx-2 items-center bg-transparent outline-none placeholder-gray-500  text-gray-700`}
          />

            <SearchIcon
              onClick={() => setShowSearch(!showSearch)}
              className="h-6 text-gray-600"
            />

          {/* { showSearch ? (
            <HiX
              onClick={() => setShowSearch(!showSearch)}
              className="h-6 text-gray-600"
            />
          ) : (
            <SearchIcon
              onClick={() => setShowSearch(!showSearch)}
              className="h-6 text-gray-600"
            />
          )} */}
          

        </div>

        <Link to="/feed">
          <HomeIcon className="h-6 w-6 hidden md:inline-flex" />
        </Link>
       
      </div>

      {/*  Right */}
      <div className="flex justify-around items-center sm:space-x-2 md:space-x-6 w-56 md:w-80">
        <div className="hidden md:inline-flex items-center relative  cursor-pointer">
          <span className="absolute top-0 right-0  h-4 w-4 bg-red text-center rounded-full text-white text-xs font-bold">
            {" "}
            8
          </span>
          <svg
            onClick={handleNavigate}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
          </svg>
        </div>

        <div className=" hidden md:inline-flex items-center mr-2 relative">
          <svg
          onClick={handleNavigate}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>

        <div className=" flex items-center space-x-2">
          <div
            onClick={onPress}

            className={` ${
              showSearch && "hidden md:inline-flex"
            }  relative w-12 h-12 md:w-14 md:h-14 cursor-pointer`}

          >
            <img
              src={`https://ui-avatars.com/api/name=${user?.name}&background=random`}
              alt=""
              className=" w-full h-full rounded-full object-cover"
            />
            <span className=" absolute top-0 right-0 w-3 h-3 rounded-full bg-green-400 border-2 border-white"></span>
          </div>

          <div className="hidden lg:inline-flex lg:flex-col">
            <p className="text-gray-700 "> {user?.name.split(" ")[0]} </p>

            <h3 className="text-xs text-gray-600">Active Now</h3>
          </div>

          <div
            onClick={showMenuModal}

            className={`${showSearch && "hidden"} cursor-pointer lg:hidden`}

          >
            <HiMenuAlt3 className=" h-8 w-8 " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
