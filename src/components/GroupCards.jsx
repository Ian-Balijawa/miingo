import { SearchIcon } from "@heroicons/react/outline";
import React from "react";
import GroupCard from "./GroupCard";

const groups = [
  {
    id: 1,
    src: "https://res.cloudinary.com/itgenius/image/upload/v1668416630/social-media-profile-photos_ogvnju.jpg",
    name: "Alica Macale",
    email: "support@gmail.com",
    image: "/bg2.jpg",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/itgenius/image/upload/v1668416630/social-media-profile-photos_ogvnju.jpg",
    name: "Hendrix Stamp",
    email: "miingo@gmail.com",
    image: "/bg2.jpg",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/itgenius/image/upload/v1668416630/social-media-profile-photos_ogvnju.jpg",
    name: "Stephen Grinder",
    email: "miingo@gmail.com",
    image: "/bg2.jpg",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/itgenius/image/upload/v1668416630/social-media-profile-photos_ogvnju.jpg",
    name: "Makerere Ogs and Obs",
    email: "miingo@gmail.com",
    image: "/bg2.jpg",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/itgenius/image/upload/v1668416630/social-media-profile-photos_ogvnju.jpg",
    name: "Muwonge",
    email: "miingo@gmail.com",
    image: "/bg2.jpg",
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/itgenius/image/upload/v1668416630/social-media-profile-photos_ogvnju.jpg",
    name: "Muwonge",
    email: "miingo@gmail.com",
    image: "/bg2.jpg",
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/itgenius/image/upload/v1668416630/social-media-profile-photos_ogvnju.jpg",
    name: "Muwonge",
    email: "miingo@gmail.com",
    image: "/bg2.jpg",
  },
  {
    id: 8,
    src: "https://res.cloudinary.com/itgenius/image/upload/v1668416630/social-media-profile-photos_ogvnju.jpg",
    name: "Muwonge",
    email: "miingo@gmail.com",
    image: "/bg2.jpg",
  },
  {
    id: 9,
    src: "https://res.cloudinary.com/itgenius/image/upload/v1668416630/social-media-profile-photos_ogvnju.jpg",
    name: "Muwonge",
    email: "miingo@gmail.com",
    image: "/bg2.jpg",
  },
  {
    id: 9,
    src: "https://res.cloudinary.com/itgenius/image/upload/v1668416630/social-media-profile-photos_ogvnju.jpg",
    name: "Muwonge",
    email: "miingo@gmail.com",
    image: "/bg2.jpg",
  },
];

function GroupCards() {
  return (
    <div className="pb-2 pt-6 flex-grow  mt-2  bg-miingo-gray shadow-xl ">
     
    <div className="flex items-center justify-between p-2 bg-white mx-2 md:mx-4 rounded-md mb-6">
        
    <div className="flex items-center justify-center">
          <h1 className="text-lg font-semibold text-gray-600">Group</h1>
        </div>

        <div className="flex items-center rounded-lg bg-gray-200 p-2 border-2 w-56 md:w-96 ">
          <input
            type="text"
            placeholder="search here..."
            className="flex mx-2 items-center bg-transparent outline-none placeholder-gray-500  text-gray-700 w-40 md:flex-grow"
          />

          <SearchIcon className="h-6 text-gray-600 cursor-pointer" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4  overflow-y-auto scrollbar-hide mx-2 md:mx-4">
        { groups?.map(({ id, src, name, email, image }) => (
          <GroupCard
            key={id}
            src={src}
            name={name}
            email={email}
            image={image}
          />
        ))}
      </div>
    </div>
  );
}

export default GroupCards;
