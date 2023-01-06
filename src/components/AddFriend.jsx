import React, { useContext, useState } from "react";
import { actions, state } from "../state";

import { HiHeart } from "react-icons/hi";
import axios from "../services/axios-config";
import useLocalStorage from "../hooks/useLocalStorage";
import { useSnapshot } from "valtio";
import { userContext } from "../context/userContext";

function AddFriend({ _id, name, followers, followings, image }) {
  const [accessToken] = useLocalStorage("accessToken");
  const { user: me } = useContext(userContext);
  const [loggedInUser] = useLocalStorage("user");
  const [isFollowing, setIsFollowing] = useState(() => {
    return me.followings.includes(_id);
  });

  const [error, setError] = useState(null);

  const handleFollow = () => {
    axios
      .patch(
        `/user/${loggedInUser._id}/follow/${_id}`,
        { name },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => {
        actions.follow(res.data.user);
        console.log(res.data);
      })
      .catch((err) => {
        setError(err.response.data.message);
        console.log("ERROR FOLLOWING: ", error);
        console.log("ERROR FOLLOWING: ", err);
      });

      setIsFollowing(!isFollowing);
  };

  // console.log([_id, name, followers, followings, image]);

  return (
    <div className="w-56 h-56  bg-white rounded-lg shadow-lg inline-block mr-2">
      <div className=" ">
        <div className="flex flex-col space-y-3 items-center justify-center py-3">
          <div className="relative flex items-center justify-center w-20">
            <div className="w-14 h-14 rounded-full">
              <img
                src={image}
                loading="lazy"
                className="w-full h-full rounded-full object-cover"
                alt="friend"
              />
            </div>

            <span className="absolute top-0 right-2 text-white bg-blue rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
            </span>
          </div>

          <div className="">
            <p className="flex items-center justify-center space-x-2">
              <h3 className="text-gray-600"> {name} </h3>
              <span>
                {" "}
                <HiHeart className="h-4 w-4 text-red" />
              </span>
            </p>
          </div>

          <div className=" flex items-center justify-center space-x-2 text-gray-600">
            <div className="border-r border-blue px-2">
              <p className="flex flex-col items-center justify-center space-y-2">
                <h3 className="text-gray-600"> {followings?.length} </h3>
                <h4>Following</h4>
              </p>
            </div>
            <div className="">
              <p className="flex flex-col items-center justify-center space-y-2">
                <h3 className="text-gray-600"> {followers?.length} </h3>
                <h4>Followers</h4>
              </p>
            </div>
          </div>

          <div className=" flex items-center justify-center">
            <button
              onClick={(e) => {
                e.preventDefault();
                handleFollow();
              }}
              className={`flex  mx-auto ${
                isFollowing ? "bg-blue text-white" : " text-blue"
              } px-3 py-1 md:px-5 rounded-lg shadow-xl font-normal hover:shadow-xl active:scale-90
                 transition duration-300 border border-blue`}
            >
              {isFollowing ? "UnFollow" : "Follow"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddFriend;
