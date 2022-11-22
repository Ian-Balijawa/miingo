import React, { useState } from "react";

function Gallery() {

  const [expand, setExpand] = useState(false);

  const images = [
		{
			id: 1,
			image:
				"https://res.cloudinary.com/itgenius/image/upload/v1668007553/pexels-jonathan-borba-12031357_rzxxvm.jpg",
		},
		{
			id: 2,
			image:
				"https://res.cloudinary.com/itgenius/image/upload/v1668007542/pexels-mahdi-chaghari-12463279_cwiw1n.jpg",
		},
		{
			id: 3,
			image:
				"https://res.cloudinary.com/itgenius/image/upload/v1668007538/pexels-martin-boh%C3%A1%C4%8D-10288457_uwpcbd.jpg",
		},
		{
			id: 4,
			image:
				"https://res.cloudinary.com/itgenius/image/upload/v1668007538/pexels-martin-boh%C3%A1%C4%8D-10288457_uwpcbd.jpg",
		},
		{
			id: 5,
			image:
				"https://res.cloudinary.com/itgenius/image/upload/v1668011048/pexels-james-gana-13747843_vz07rw.jpg",
		},
		{
			id: 6,
			image:
				"https://res.cloudinary.com/itgenius/image/upload/v1668011048/pexels-james-gana-13747843_vz07rw.jpg",
		},
		{
			id: 7,
			image:
				"https://res.cloudinary.com/itgenius/image/upload/v1668011062/pexels-martin-boh%C3%A1%C4%8D-10288457_hmd0gl.jpg",
		},
		{
			id: 8,
			image:
				"https://res.cloudinary.com/itgenius/image/upload/v1664953256/images_1_cb1erh.jpg",
		},
		{
			id: 9,
			image:
				"https://res.cloudinary.com/itgenius/image/upload/v1664904897/fog-forest-19186761_yefcgv.jpg",
		},
		{
			id: 10,
			image:
				"https://res.cloudinary.com/itgenius/image/upload/v1664902648/1_mwpuwHSsNIlIirvWdjgIbw_adeo16.jpg",
		},
		{
			id: 11,
			image:
				"https://res.cloudinary.com/itgenius/image/upload/v1668007553/pexels-jonathan-borba-12031357_rzxxvm.jpg",
		},
		{
			id: 13,
			image:
				"https://res.cloudinary.com/itgenius/image/upload/v1668007538/pexels-martin-boh%C3%A1%C4%8D-10288457_uwpcbd.jpg",
		},
	];

  return (
    <div className= {`flex flex-col bg-white rounded-lg shadow-xl p-4 relative overflow-hidden ${ expand ? "h-[500px] " : "h-[500px]"}`}>

      <div className="flex flex-col mb-6">
        <h4 className="text-gray-700 font-medium m-2  flex-start"> Gallery </h4>
         <p className=" flex items-center justify-center space-x-3 ">
            <span className="link text-gray-600 text-sm ">All</span>
            <span className="link text-gray-600 text-sm "> Photos </span>
            <span className="link text-gray-600 text-sm "> Videos </span>
         </p>
      </div>

      <div className={`grid grid-cols-3 gap-2 gap-x-3  h-56 mt-2 px-5 ${ expand && " row-end-3"}`}>
        {images?.map(({ id, image }) => (
          <div  key = { id } className=" h-16 md:h-20 w-16 md:w-20 rounded-lg   cursor-pointer hover:scale-105 ease-in-out duration-300">
            <img
              src={image}
              className="w-full h-full inline-block rounded-lg"
              alt="status"
            />
			
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center p-2  absolute bottom-3 right-0 left-0">
        <p 
         onClick = { (e) => {
            e.preventDefault();
            setExpand(!expand);
         }}
        className="link text-blue-700">{ expand ? "see all" : "see less"}</p>
      </div>

    </div>
  );
}

export default Gallery;
