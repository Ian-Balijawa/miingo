import React, { useState } from "react";
import Album from "./Album";
import Photo from "./Photo";
import { HiCamera } from "react-icons/hi";

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

function Photos() {
  const [addPhoto, setAddPhoto] = useState(false);
  const [photo, setPhoto] = useState(false);
  const [album, setAlbum] = useState(true);
  const [tabIndex, setTabIndex] = useState(1);
  const [image, setImage] = useState();

  // console.log(tabIndex);

  const uploadImage = (file) => {
    console.log(file);
  };

  return (
    <div className=" flex flex-col   mt-3 bg-white px-2 py-3 rounded-lg">
      <div className="flex items-center justify-between p-2 bg-white mx-2 md:mx-4 rounded-md mb-6 border-b-2">
        <div className="flex items-center justify-center">
          <h1 className="text-lg font-semibold text-gray-600">Gallery</h1>
        </div>

        <form className="flex items-center justify-center">
          <label
            htmlFor="gallery"
            className="flex items-center justify-center space-x-2"
          >
            

            <div
              className={`flex  mx-auto ${
                addPhoto ? "bg-blue text-white" : " text-blue"
              } px-3 py-1 md:px-5 rounded-lg shadow-xl font-normal hover:shadow-xl active:scale-90
               transition duration-500 border border-blue`}
            >
              Add Photo/video
            </div>

            <input
              type="file"
              placeholder="upload image"
              id="gallery"
              accept="image/*"
              className="hidden"
              onChange={ (e) => uploadImage(e.target.files[0])}
            />
          </label>
        </form>
      </div>

      <div className="flex items-center space-x-2 justify-items-start pl-3 md:pl-10 cursor-pointer">
        <div
          onClick={(e) => {
            e.preventDefault();
            setPhoto(false);
            setAlbum(true);
            setTabIndex(1);
          }}
          className={`w-24 hover:bg-skyBlue hover:border-b-2 hover:border-blue p-2 ${
            album && "bg-skyBlue border-b-2 border-blue"
          }`}
        >
          Album
        </div>

        <div
          onClick={(e) => {
            e.preventDefault();
            setAlbum(false);
            setPhoto(true);
            setTabIndex(2);
          }}
          className={`w-40 hover:bg-skyBlue hover:border-b-2 hover:border-blue p-2 ${
            photo && "bg-skyBlue border-b-2 border-blue"
          }`}
        >
          Photos/Videos
        </div>
      </div>

      <div className="w-full">
        {tabIndex === 1 ? (
          <>
            <Album />
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 p-3">
              {images.map(({ id, image }) => (
                <Photo key={id} image={image} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Photos;
