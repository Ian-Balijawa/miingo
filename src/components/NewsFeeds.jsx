import React from "react";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { HiGlobeAlt } from "react-icons/hi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { HiOutlineUser } from "react-icons/hi";
import { HiOutlineStar } from "react-icons/hi";
import NewsFeed from "./NewsFeed";

const newsfeeds = [
  {
        id: 1,
    icon: HiOutlineDesktopComputer,
        color:"bg-blue-500",
        title:"NewsFeed",
        path: "",
  },
    {
        id: 2,
    icon: HiGlobeAlt,
        color:"bg-orange-500",
        title:"Explore Stories",
        path: "",
  },
    {
        id: 3,
    icon: HiOutlineUserGroup,
        color:"bg-orange-500",
        title:"Popular groups",
        path: "/groups",
  },
    {

        id: 4,
    icon: HiOutlineUser,
        color:"bg-blue-500",
        title:"Author Profile",
        path: "",
  },
    {
        id: 5,
    icon: HiOutlineStar,
        color:"bg-blue-500",
        title:"Badges",
        path: "",
  },
  
];

function NewsFeeds() {
  return (
    <div className=" relative flex flex-col shadow-2xl bg-white rounded-md pb-2 h-auto overflow-y-auto scrollbar-hide ">
      <div className=" bg-white  sticky top-0 z-50 flex space-x-4 items-center text-gray-700 mb-2">
        <h2 className="  text-lg text-gray-700 font-medium pl-10 py-4 font-sans">
          News Feeds
        </h2>
      </div>

      <div className="px-1">
        {newsfeeds.map(({ id , icon , color , title, path }) => (
           <NewsFeed
              key = { id }
              Icon = { icon }
              color = { color }
              title = { title }
              path = { path }
            />
        ))}
      </div>
    </div>
  );
}

export default NewsFeeds;