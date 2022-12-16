import React from "react";
import { HomeIcon } from "@heroicons/react/outline";
import { HiOutlineUserGroup } from "react-icons/hi";
import {  FiMessageCircle , FiBell  }  from "react-icons/fi";
import { HiOutlineCog } from "react-icons/hi";
import { Link, useNavigate, useNavigation } from "react-router-dom";


function BottomNav() {
  const navigate = useNavigate()

  const handleClick = () =>{
    navigate('/coming')
  }

  return (
    <div className=" md:hidden sticky bottom-0 z-40 bg-white flex justify-around p-2 shadow-2xl border-t border-blue">
      {/* left */}
      <Link to="/feed" className="flex  items-center hover:bg-slate-200 p-3 rounded-lg cursor-pointer ">
        <HomeIcon className="h-6 w-6" />
      </Link>

      <Link to="/groups" className="flex  items-center hover:bg-slate-200 p-3 rounded-lg cursor-pointer ">
        <HiOutlineUserGroup className="h-6 w-6" />
      </Link >

      <div className=" flex items-center relative hover:bg-slate-200 p-3 rounded-lg cursor-pointer">
        <span className="absolute top-1 right-3  h-4 w-4 bg-red text-center rounded-full text-white text-xs font-bold">
          {" "}
          8
        </span>

        <FiMessageCircle onClick={handleClick} className="h-6 w-6" />
        
      </div>

      <div className=" flex items-center relative hover:bg-slate-200 p-3 rounded-lg cursor-pointer">
        <span className="absolute top-1 right-3  h-4 w-4 bg-red text-center rounded-full text-white text-xs font-bold">
          {" "}
          8
        </span>
        <FiBell onClick={handleClick} className="h-6 w-6" />
      </div>

      <div className=" flex  items-center mr-2 relative hover:bg-slate-200 p-3 rounded-lg cursor-pointer">
        <span className="absolute top-1 right-3  h-4 w-4 bg-red text-center rounded-full text-white text-xs font-bold">
          {" "}
          5
        </span>
         <HiOutlineCog onClick={handleClick}  className="h-6 w-6" />
      </div>
    </div>
  );
}

export default BottomNav;
