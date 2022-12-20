import React from 'react';
import { HiOutlineX } from "react-icons/hi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { HiOutlineNewspaper } from "react-icons/hi";
import { HiOutlineMusicNote } from "react-icons/hi";
import { HiViewGrid } from "react-icons/hi";
import { HiOutlineChat } from "react-icons/hi";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import MenuItem from '../MenuItem';

const menuItems = [
    { 
        id: 1,
        name: "Groups",
        icon: HiOutlineUserGroup,
        path :"/groups"
    },
    { 
        id: 2,
        name: "News Feeds",
        icon: HiOutlineNewspaper,
        path :"/coming"
    },
    { 
        id: 3,
        name: "Entertainment",
        icon: HiOutlineMusicNote,
        path :"/coming"
    },
    { 
        id: 4,
        name: "Gallery",
        icon: HiViewGrid,
        path :"/coming"
    },
    
    { 
        id: 5,
        name: "Events",
        icon: HiOutlineSpeakerphone,
        path :"/coming"
    },
    { 
        id: 6,
        name: "Chats",
        icon: HiOutlineChat,
        path :"/coming"
    },
];

function MenuModal({ setClose }) {
  return (
    <div className="h-screen w-screen fixed inset-0 z-50  flex justify-center items-center px-2 bg-black bg-opacity-50">
      <div className=" flex flex-col space-y-4 bg-white rounded shadow-lg w-96 md:w-[500px] md:h-[500px]">
        <div className="flex items-center justify-between border-b px-4 py-2">
          <h3 className="text-gray-600 font-semibold">Menu </h3>
          <HiOutlineX
            className="h-6 w-6 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
               setClose();
            }}
          />
        </div>

        {/* Modal body */}
        <div className="h-auto p-3 grid grid-cols-3 gap-2 ">
            { menuItems.map(({ id , name , icon, path }) => (
                  <MenuItem 
                    key = { id }
                    Icon = { icon }
                    name = { name }
                     path = { path }
                  />
            )) }
        </div>
        
      </div>
    </div>
  );
}

export default MenuModal;
