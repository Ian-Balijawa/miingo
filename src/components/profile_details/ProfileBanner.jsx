import React, { useState } from 'react';

import { HiCamera } from 'react-icons/hi';
import PartialProfileEdit from './PartialProfileEdit';
import ProfileButton from './ProfileButton';
import ProfileCaption from './ProfileCaption';
import { ThumbUpIcon } from '@heroicons/react/outline';
import { state } from '../../state';
import useLocalStorage from '../../hooks/useLocalStorage';

function ProfileBanner() {
  const [likes] = useState(2);
  const [user] = useLocalStorage('user');
  const [follow, setFollow] = useState(true);

  const [partialEdit, setPartialEdit] = useState(false);

  const [links] = useState([
    {
      id: 1,
      name: 'Timeline'
    },
    {
      id: 2,
      name: 'About '
    },
    {
      id: 3,
      name: 'Friends'
    },
    {
      id: 4,
      name: 'Photos'
    },
    {
      id: 5,
      name: 'Videos'
    }
  ]);

  const handleEdit = (e) => {
    e.preventDefault();

    setPartialEdit(!partialEdit);
  };

  return (
    <div className="relative  mx-4 flex flex-col bg-white ">
      <ProfileCaption handleEdit={handleEdit} />

      {partialEdit && <PartialProfileEdit />}

      <div className=" relative w-full h-56 md:h-96 ">
        <img
          src="/bg2.jpg"
          loading="lazy"
          className="w-full h-full object-cover "
          alt="profile_banner"
        />
        {/* like and follow user on Mobile  */}
        <div className="absolute bottom-2 right-2 flex items-center justify-around space-x-2 md:hidden ">
          <div className="flex items-center justify-center bg-gray-400 cursor-pointer p-2 rounded-full">
            <HiCamera className=" w-4 h-4 text-white " />
          </div>

          <div className="flex items-center space-x-1 bg-gray-400  text-white flex-grow justify-center p-2 rounded-lg cursor-pointer">
            <ThumbUpIcon className="h-6" />
            <p className="text-xs sm:text-base">{`${likes || 0}`}</p>
            <p className="text-sm hidden md:inline-flex ">
              {likes === 1 ? ' Like' : 'Likes'}
            </p>
          </div>

          <div
            onClick={(e) => {
              e.preventDefault();
              setFollow(!follow);
            }}
            className={`flex items-center space-x-1 ${
              follow && 'bg-gray-400 rounded-lg'
            }
            flex-grow justify-center p-2 text-white cursor-pointer`}
          >
            <p className="text-xs sm:text-base">
              {follow ? ' UnFollow ' : 'Follow'}
            </p>
          </div>
        </div>
      </div>

      <div className="lg:hidden border-b">
        <div className="relative flex items-center justify-between space-x-2 p-4 ">
          <div className="absolute -top-6 md:-top-10 w-14 h-14 md:w-20 md:h-20  rounded-full border-4 border-white ">
            <img
              src="https://res.cloudinary.com/itgenius/image/upload/v1668007542/pexels-mahdi-chaghari-12463279_cwiw1n.jpg"
              className="w-full h-full rounded-full object-cover "
              alt="group-profile"
            />
          </div>

          <div className="pl-11 md:pl-20 flex items-center flex-grow justify-between space-x-4">
            <div className="w-48">
              <h1 className="text-gray-700 font-semibold"> {user?.name}</h1>
              <p className="text-gray-600 text-xs "> {user?.email}</p>
            </div>

            <div className="flex items-center  space-x-3">
              <div className="flex items-center justify-center cursor-pointer bg-blue-500 hover:bg-blue-400 active:scale-95 transition ease-in-out duration-300 rounded-full py-2 px-3">
                <p className="text-white text-sm">EDIT</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center md:justify-between py-2 px-3">
        <div className="flex items-center  space-x-3 justify-around">
          {links.map(({ id, name }) => (
            <ProfileButton key={id} name={name} />
          ))}
        </div>

        <div className="hidden md:inline-flex items-center justify-around space-x-2 ">
          <div className="rounded-none flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 hover:rounded-lg cursor-pointer">
            <ThumbUpIcon className="h-6" />
            <p className="text-xs sm:text-base">{`${likes || 0}`}</p>
            <p className="text-sm hidden md:inline-flex ">
              {likes === 1 ? ' Like' : 'Likes'}
            </p>
          </div>

          <div
            onClick={(e) => {
              e.preventDefault();
              setFollow(!follow);
            }}
            className={`flex items-center space-x-1 ${
              follow && 'bg-gray-100 rounded-lg'
            }
            flex-grow justify-center p-2  cursor-pointer`}
          >
            <p className="text-xs sm:text-base">
              {follow ? ' UnFollow ' : 'Follow'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileBanner;
