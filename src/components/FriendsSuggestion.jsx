import React from "react";
import { FiRotateCw } from "react-icons/fi";
import { HiSun } from "react-icons/hi";
import Suggestion from "./Suggestion";
import { HiChevronRight } from "react-icons/hi";
import { HiChevronLeft } from "react-icons/hi";

function FriendsSuggestion() {
  const suggestions = [
    {
      id: 1,
      name: "Josephine water",
      status: "Active Now",
      image:
        "https://res.cloudinary.com/itgenius/image/upload/v1668007553/pexels-jonathan-borba-12031357_rzxxvm.jpg",
    },
    {
      id: 2,
      name: "Josephine water",
      status: "Active Now",
      image:
        "https://res.cloudinary.com/itgenius/image/upload/v1668007542/pexels-mahdi-chaghari-12463279_cwiw1n.jpg",
    },
    {
    	id: 3,
        name: "Josephine water",
        status: "Active Now",
    	image:
    		"https://res.cloudinary.com/itgenius/image/upload/v1668007538/pexels-martin-boh%C3%A1%C4%8D-10288457_uwpcbd.jpg",
    },
    {
    	id: 4,
        name: "Josephine water",
        status: "Active Now",
    	image:
    		"https://res.cloudinary.com/itgenius/image/upload/v1668007538/pexels-martin-boh%C3%A1%C4%8D-10288457_uwpcbd.jpg",
    },
    {
    	id: 5,
        name: "Josephine water",
        status: "Active Now",
    	image:
    		"https://res.cloudinary.com/itgenius/image/upload/v1668011048/pexels-james-gana-13747843_vz07rw.jpg",
    },
    {
    	id: 6,
        name: "Josephine water",
        status: "Active Now",
    	image:
    		"https://res.cloudinary.com/itgenius/image/upload/v1668011048/pexels-james-gana-13747843_vz07rw.jpg",
    },
    {
    	id: 7,
        name: "Josephine water",
        status: "Active Now",
    	image:
    		"https://res.cloudinary.com/itgenius/image/upload/v1668011062/pexels-martin-boh%C3%A1%C4%8D-10288457_hmd0gl.jpg",
    },
    {
    	id: 8,
        name: "Josephine water",
        status: "Active Now",
    	image:
    		"https://res.cloudinary.com/itgenius/image/upload/v1664953256/images_1_cb1erh.jpg",
    },
    {
    	id: 9,
        name: "Josephine water",
        status: "Active Now",
    	image:
    		"https://res.cloudinary.com/itgenius/image/upload/v1664904897/fog-forest-19186761_yefcgv.jpg",
    },
    {
    	id: 10,
        name: "Josephine water",
        status: "Active Now",
    	image:
    		"https://res.cloudinary.com/itgenius/image/upload/v1664902648/1_mwpuwHSsNIlIirvWdjgIbw_adeo16.jpg",
    },
    {
    	id: 11,
        name: "Josephine water",
        status: "Active Now",
    	image:
    		"https://res.cloudinary.com/itgenius/image/upload/v1668007553/pexels-jonathan-borba-12031357_rzxxvm.jpg",
    },
    {
    	id: 13,
        name: "Josephine water",
        status: "Active Now",
    	image:
    		"https://res.cloudinary.com/itgenius/image/upload/v1668007538/pexels-martin-boh%C3%A1%C4%8D-10288457_uwpcbd.jpg",
    },
  ];
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  return (
    <div className="flex flex-col space-y-2 bg-white rounded-lg shadow-lg h-64 w-full font-serif ">
      <div className=" w-72 flex items-center justify-between mx-4 mt-2 p-2">
        <div className="text-gray-600">
          <h3 className="font-semibold">Friend Suggestion</h3>
        </div>

        <div className="flex items-center justify-around space-x-3">
          <div className="bg-miingo-cyan text-gray-600 rounded-full p-1 cursor-pointer">
            <FiRotateCw className="h-4 w-4" />
          </div>
          <div className="bg-miingo-cyan text-gray-600 rounded-full p-1 cursor-pointer">
            <HiSun className="h-4 w-4" />
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-around space-x-2  mx-auto w-80 h-56 p-2 ">
        <div onClick={slideLeft} className="bg-miingo-cyan text-gray-600 rounded-full p-1 cursor-pointer">
          <HiChevronLeft className="h-4 w-4" />
        </div>
         
        {/* flex flex-nowrap items-center  space-x-3 justify-center whitespace-nowrap scroll scroll-smooth overflow-x-auto scrollbar-hide */}
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {suggestions.map(({ id, name, status, image }) => (
            <Suggestion key={id} name={name} status={status} image={image} />
          ))}
        </div>

        <div onClick={slideRight} className="bg-miingo-cyan text-gray-600 rounded-full p-1 cursor-pointer">
          <HiChevronRight className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}

export default FriendsSuggestion;
