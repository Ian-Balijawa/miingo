import React, { useState } from "react";
import { FiRotateCw } from "react-icons/fi";
import { HiSun } from "react-icons/hi";
import { HiOutlineTruck } from "react-icons/hi";
import LikedPage from "./LikedPage";

function LikedPages() {
  const [likedpages] = useState([
    {
      id: 1,
      icon: HiOutlineTruck,
      pagetitle: "Chrimson Agency",
      subtitle: "Clothing Store",
      likes: "15k",
      color: "bg-blue"
    },
    {
      id: 2,
      icon: HiOutlineTruck,
      pagetitle: "Digital Pixel",
      subtitle: "Software",
      likes: "158k",
      color: "bg-pink"
    },
    {
      id: 3,
      icon: HiOutlineTruck,
      pagetitle: "The Angle Bar",
      subtitle: "Disco Bar",
      likes: "8k",
      color: "bg-orange-600"
    },
    {
      id: 4,
      icon: HiOutlineTruck,
      pagetitle: "Fivestar Food",
      subtitle: "Restaurant ",
      likes: "186k",
      color: "bg-blue"
    },
    {
      id: 5,
      icon: HiOutlineTruck,
      pagetitle: "Royal Watch",
      subtitle: "Watch Shop",
      likes: "65k",
      color: "bg-orange-600"
    },
    {
        id: 6,
        icon: HiOutlineTruck,
        pagetitle: "Wattoto",
        subtitle: "Grinder",
        likes: "23k",
        color: "bg-pink"
      },
  ]);

  return (
    <div className=" relative hidden lg:flex flex-col pb-2 mt-5 shadow-lg bg-white rounded-md  h-screen overflow-y-auto scrollbar-hide ">
      <div className=" bg-white  sticky top-0 z-50 flex space-x-4 items-center text-gray-700 mb-5 px-3 border-b">
        <div className="">
          <h2 className="  text-lg text-gray-700 font-medium  py-4 font-sans">
            Liked Pages
          </h2>
        </div>

        <div className="">
          <h2 className="  text-sm text-gray-500 font-medium py-4 font-sans">
            18 Pages
          </h2>
        </div>

        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 font-bold  p-2 cursor-pointer">
          <FiRotateCw className="h-4 w-4" />
        </div>

        <div className=" flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 font-bold  p-2 cursor-pointer">
          <HiSun className="h-4 w-4" />
        </div>
      </div>

      <div className=" px-1">
        {likedpages.map(({ id, icon, pagetitle, subtitle, likes , color }) => (
          <LikedPage
            key={id}
            Icon={icon}
            pagetitle={pagetitle}
            subtitle={subtitle}
            likes={likes}
            color = { color }
          />
        ))}
      </div>
    </div>
  );
}

export default LikedPages;
