import React, { useState } from "react";
import { HiCamera } from "react-icons/hi";
import PartialProfileEdit from "./PartialProfileEdit";
import ProfileCaption from "./ProfileCaption";
import { UserProvider } from "../../context/userContext";
import { state } from "../../state";
import useLocalStorage from "../../hooks/useLocalStorage";
import { HiOutlinePencil } from "react-icons/hi2";
import ProfileTabs from "./ProfileTabs";

function ProfileBanner() {
  const [user] = useLocalStorage("user");
  const [follow, setFollow] = useState(true);
  const [partialEdit, setPartialEdit] = useState(false);

  const handleEdit = (e) => {
    e.preventDefault();

    setPartialEdit(!partialEdit);
  };

  return (
    <div className="relative  mx-4 flex flex-col bg-white ">
      <UserProvider>
        <ProfileCaption handleEdit={handleEdit} user={user} />
      </UserProvider>

      {partialEdit && <PartialProfileEdit />}

      <div className=" relative w-full h-56 md:h-96 ">
        <img
          src="/bg2.jpg"
          loading="lazy"
          className="w-full h-full object-cover "
          alt="profile_banner"
        />

        {/* editting the background image */}
        <div className="absolute bottom-2 right-2 flex items-center space-x-2 justify-center bg-gray  cursor-pointer p-2 rounded-lg">
          <HiOutlinePencil className="w-4 h-4 text-white" />
          <p className="text-white ">Edit cover</p>
        </div>

        {/*follow user on Mobile  */}
        <div className="absolute bottom-2 right-32 flex items-center justify-around space-x-2 md:hidden ">
          <div
            onClick={(e) => {
              e.preventDefault();
              setFollow(!follow);
            }}
            className={`flex items-center space-x-1 ${
              follow && "bg-gray rounded-lg"
            }
            flex-grow justify-center p-2 text-white cursor-pointer`}
          >
            <p className="text-xs sm:text-base">
              {follow ? " UnFollow " : "Follow"}
            </p>
          </div>
        </div>
      </div>

      <div className="lg:hidden border-b">
        <div className="relative flex items-center justify-between space-x-2 p-4">
          <div className="absolute -top-6 md:-top-10 w-16 h-16 md:w-20 md:h-20  rounded-full border-4 border-white ">
            <div className="relative w-full h-full">
              <img
                src={`https://ui-avatars.com/api/name=${user?.name}&background=random`}
                className="w-full h-full rounded-full object-cover "
                alt="group-profile"
              />

              <div className="absolute top-0 -right-2 flex items-center justify-center bg-gray cursor-pointer p-1 rounded-full">
                <HiCamera className=" w-4 h-4 text-white " />
              </div>
            </div>
          </div>

          <div className="pl-14 md:pl-20 flex items-center flex-grow justify-between space-x-4">
            <div className="w-48">
              <h1 className="text-gray-700 font-semibold"> {user?.name}</h1>
              <p className="text-gray-600 text-xs "> {user?.email}</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full">
        <ProfileTabs />
      </div>
    </div>
  );
}

export default ProfileBanner;
