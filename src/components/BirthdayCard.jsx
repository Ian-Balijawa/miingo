import { FiRotateCw } from 'react-icons/fi';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { HiOutlineCake } from 'react-icons/hi';
import { HiSun } from 'react-icons/hi';
import React from 'react';
import { state } from '../state';
import { useSnapshot } from 'valtio';

const BirthdayCard = () => {
  const { me: user } = useSnapshot(state);
  return (
    <div className="flex flex-col space-y-4 bg-gradient-to-r from-miingo-pinksh to-miingo-pink  bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border rounded-lg shadow-lg p-4 font-serif relative overflow-hidden">
      <div className="flex justify-evenly">
        <div className="text-white">
          <h2 className="font-bold">Birthday !!!</h2>
          <p className="text-xs text-white">Today Its your Friends Birthday</p>
        </div>
        <div className="flex text-white font-bold space-x-4 ">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-miingo-light-pink font-bold  p-2">
            <FiRotateCw className="h-4 w-4" />
          </div>

          <div className=" flex items-center justify-center w-8 h-8 rounded-full bg-miingo-light-pink font-bold  p-2">
            <HiSun className="h-4 w-4" />
          </div>
        </div>
      </div>
      <div className="flex justify-around  items-center  text-white">
        <div className="flex justify-center items-center">
          <div className="rounded-full bg-miingo-light-pink font-bold  p-4 text-center">
            <HiOutlineCake />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center space-x-4">
          <div className="h-16 md:h-20 w-16 md:w-20 rounded-full  bg-miingo-light-pink ">
            <img
              src={`https://ui-avatars.com/api/name=${user?.name}&background=random`}
              layout="fill"
              className="w-full h-full inline-block rounded-full"
              alt="profile pic"
            />
          </div>
        </div>

        <div className="flex justify-center items-center mt-2">
          <div className="rounded-full bg-miingo-light-pink font-bold  p-4 text-center">
            <HiOutlineCake />
          </div>
        </div>
      </div>
      {/* lower part */}
      <div className=" flex flex-col items-center justify-center">
        <div className="text-white text-center mt-5">
          <h2 className="font-bold text-sm">{user?.name}</h2>
          <h4 className="text-xs">Kampala ,Uganda</h4>
        </div>
        <div className="text-white text-center mt-2">
          <h2 className=" text-sm">
            Happy Birthday dear {user?.name?.split(' ')[0]} <br /> leave to blow
            more candles
          </h2>
        </div>
      </div>
      <div className="flex justify-center items-center mt-4 bg-miingo-light-pink p-2 rounded-md ">
        <input
          className=" bg-miingo-light-pink outline-none text-white placeholder-white "
          placeholder="Wish Birthday To Your Friend"
        />

        <HiOutlineArrowNarrowRight className="h-6 w-6 text-white hover:scale-110" />
      </div>
    </div>
  );
};

export default BirthdayCard;
