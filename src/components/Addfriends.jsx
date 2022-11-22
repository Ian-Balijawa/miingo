import React from "react";
import AddFriend from "./AddFriend";

function Addfriends() {
  const friends = [
    {
      id: 1,
      name: "Kelin Jasen",
      followers: 6458,
      following: 546,
      image:
        "https://res.cloudinary.com/itgenius/image/upload/v1668007553/pexels-jonathan-borba-12031357_rzxxvm.jpg",
    },
    {
      id: 2,
      name: "Kelin Jasen",
      followers: 6458,
      following: 546,
      image:
        "https://res.cloudinary.com/itgenius/image/upload/v1668007542/pexels-mahdi-chaghari-12463279_cwiw1n.jpg",
    },
    {
      id: 3,
      name: "Kelin Jasen",
      followers: 6458,
      following: 546,
      image:
        "https://res.cloudinary.com/itgenius/image/upload/v1668007538/pexels-martin-boh%C3%A1%C4%8D-10288457_uwpcbd.jpg",
    },
    {
      id: 4,
      name: "Kelin Jasen",
      followers: 6458,
      following: 546,
      image:
        "https://res.cloudinary.com/itgenius/image/upload/v1668007538/pexels-martin-boh%C3%A1%C4%8D-10288457_uwpcbd.jpg",
    },
    {
      id: 5,
      name: "Kelin Jasen",
      followers: 6458,
      following: 546,
      image:
        "https://res.cloudinary.com/itgenius/image/upload/v1668011048/pexels-james-gana-13747843_vz07rw.jpg",
    },
    {
      id: 6,
      name: "Kelin Jasen",
      followers: 6458,
      following: 546,
      image:
        "https://res.cloudinary.com/itgenius/image/upload/v1668011048/pexels-james-gana-13747843_vz07rw.jpg",
    },
    {
      id: 7,
      name: "Kelin Jasen",
      followers: 6458,
      following: 546,
      image:
        "https://res.cloudinary.com/itgenius/image/upload/v1668011062/pexels-martin-boh%C3%A1%C4%8D-10288457_hmd0gl.jpg",
    },
    {
      id: 8,
      name: "Kelin Jasen",
      followers: 6458,
      following: 546,
      image:
        "https://res.cloudinary.com/itgenius/image/upload/v1664953256/images_1_cb1erh.jpg",
    },
    {
      id: 9,
      name: "Kelin Jasen",
      followers: 6458,
      following: 546,
      image:
        "https://res.cloudinary.com/itgenius/image/upload/v1664904897/fog-forest-19186761_yefcgv.jpg",
    },
    {
      id: 10,
      name: "Kelin Jasen",
      followers: 6458,
      following: 546,
      image:
        "https://res.cloudinary.com/itgenius/image/upload/v1664902648/1_mwpuwHSsNIlIirvWdjgIbw_adeo16.jpg",
    },
    {
      id: 11,
      name: "Kelin Jasen",
      followers: 6458,
      following: 546,
      image:
        "https://res.cloudinary.com/itgenius/image/upload/v1668007553/pexels-jonathan-borba-12031357_rzxxvm.jpg",
    },
    {
      id: 12,
      name: "Kelin Jasen",
      followers: 6458,
      following: 546,
      image:
        "https://res.cloudinary.com/itgenius/image/upload/v1668007538/pexels-martin-boh%C3%A1%C4%8D-10288457_uwpcbd.jpg",
    },
    {
      id: 13,
      name: "Kelin Jasen",
      followers: 6458,
      following: 546,
      image:
        "https://res.cloudinary.com/itgenius/image/upload/v1664902648/1_mwpuwHSsNIlIirvWdjgIbw_adeo16.jpg",
    },
    {
      id: 14,
      name: "Kelin Jasen",
      followers: 6458,
      following: 546,
      image:
        "https://res.cloudinary.com/itgenius/image/upload/v1668007553/pexels-jonathan-borba-12031357_rzxxvm.jpg",
    },
    {
      id: 15,
      name: "Kelin Jasen",
      followers: 6458,
      following: 546,
      image:
        "https://res.cloudinary.com/itgenius/image/upload/v1668007538/pexels-martin-boh%C3%A1%C4%8D-10288457_uwpcbd.jpg",
    },
  ];

  return (
    <div className=" w-80 md:w-[640px] mx-auto flext items-center justify-center ">
      <div id="slider3" className="w-full h-full  overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide p-2">
        {friends.map(({ id, name, followers, following, image }) => (
          <AddFriend
            key={id}
            name={name}
            followers={followers}
            following={following}
            image={image}
          />
        ))}
      </div>
    </div>
  );
}

export default Addfriends;
