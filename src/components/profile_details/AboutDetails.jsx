import React, { useState, useEffect } from "react";
import {
  HiOutlineHeart,
  HiOutlineExternalLink,
  HiOutlineMap,
  HiOfficeBuilding,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";
import { HiOutlineUser } from "react-icons/hi";
import instance from "../../services/axios-config";
import useLocalStorage from "../../hooks/useLocalStorage";
import { FaPlusSquare, FaBirthdayCake } from "react-icons/fa";

function AboutDetails() {
  const [user] = useLocalStorage("user");
  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    fetchUser();
  }, []);
  const fetchUser = async () => {
    try {
      const { data } = await instance.get(`/user/profile/${user._id}`);
      console.log(data);
      setUserDetails(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="relative w-full lg:block md:w-[500px] my-2">
      <div className=" px-2 sticky top-15 ">
        <div className="flex flex-col  mt-5 shadow-lg bg-white rounded-md  h-auto overflow-hidden">
          <div className=" bg-white flex items-center justify-between text-gray-700 mb-5 px-3 border-b">
            <div className="">
              <h2 className="  text-lg text-gray-700 font-medium  py-4 font-sans">
                About <small>Into About Myself</small>
              </h2>
            </div>
          </div>
          {userDetails && (
            <div className="grid grid-cols-1 gap-y-2 px-4">
              <div className="flex items-center space-x-3 border-b pb-2">
                <div className="flex items-center justify-center p-2 bg-green-100 rounded-md cursor-pointer">
                  <HiOutlineUser className="h-6 w-6 " />
                </div>
                
                <div>
                  <h2 className="text-md font-medium font-sans">Intro</h2>
                  <small className="text-md text-gray-500 font-medium">
                    {userDetails.about?.intro}
                  </small>
                </div>
              </div>
              <div className="flex items-center space-x-3 border-b pb-2">
               
                <div className="flex items-center justify-center p-2 bg-green-100 rounded-md cursor-pointer">
                  <HiOutlinePhone className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-md font-medium">Phone </h2>
                  <small className="text-md text-gray-500 font-medium">
                    {userDetails.about?.phone || "N/A"}
                  </small>
                </div>
              </div>
              <div className="flex items-center space-x-3 border-b pb-2">
                

                <div className="flex items-center justify-center p-2 bg-green-100 rounded-md cursor-pointer">
                  <FaBirthdayCake className="h-6 w-6" />
                </div>
                
                <div>
                  <h2 className="text-md font-medium">Date Of Birth</h2>
                  <small className="text-md text-gray-500 font-medium">
                    {userDetails.user?.dob}
                  </small>
                </div>
              </div>

              <div className="flex items-center space-x-3 border-b pb-2">
                
                <div className="flex items-center justify-center p-2 bg-green-100 rounded-md cursor-pointer">
                  <HiOutlineUser className="h-6 w-6 " />
                </div>

                <div>
                  <h2 className="text-md font-medium">Gender</h2>
                  <small className="text-md text-gray-500 font-medium">
                    {userDetails.user?.gender || "N/A"}
                  </small>
                </div>
              </div>
              <div className="flex items-center border-b space-x-3 pb-2">
               
                <div className="flex items-center justify-center p-2 bg-green-100 rounded-md cursor-pointer">
                  <HiOutlineMap className="h-6 w-6" />
                </div>

                <div>
                  <h2 className="text-md font-medium">Country</h2>
                  <small className="text-md text-gray-500 font-medium">
                    {userDetails.about?.country || "N/A"}
                  </small>
                </div>
              </div>
              <div className="flex items-center space-x-3 border-b pb-2">
                
                <div className="flex items-center justify-center p-2 bg-green-100 rounded-md cursor-pointer">
                  <HiOutlineHeart className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-md font-medium">Relationship</h2>
                  <small className="text-md text-gray-500 font-medium">
                    N/A
                  </small>
                </div>
              </div>
              <div className="flex items-center border-b space-x-3 pb-2">
                
                <div className="flex items-center justify-center p-2 bg-green-100 rounded-md cursor-pointer">
                  <HiOfficeBuilding className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-md font-medium">lives In</h2>
                  <small className="text-md text-gray-500 font-medium">
                    {userDetails.about?.city || "N/A"}
                  </small>
                </div>
              </div>
              <div className="flex items-center border-b space-x-3 pb-2">
                
                <div className="flex items-center justify-center p-2 bg-green-100 rounded-md cursor-pointer">
                  <HiOutlineMail className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-md font-medium">Secondary Email</h2>
                  <small className="text-md text-gray-500 font-medium">
                    {userDetails.about?.email || "N/A"}
                  </small>
                </div>
              </div>
              <div className="flex items-center border-b space-x-3 pb-2">
                
                <div className="flex items-center justify-center p-2 bg-green-100 rounded-md cursor-pointer">
                   <HiOutlineExternalLink className="h-6 w-6" />
                </div>

                <div>
                  <h2 className="text-md font-medium">Website</h2>
                  <small className="text-md text-gray-500 font-medium">
                    {userDetails.about?.website || "N/A"}
                  </small>
                </div>
              </div>
              <div className="flex items-center border-b space-x-3 pb-2">
                

                <div className="flex items-center justify-center p-2 bg-green-100 rounded-md cursor-pointer">
                  
                   <FaPlusSquare className="h-6 w-6" />
                </div>

                <div>
                  <h2 className="text-md font-medium">Joined</h2>
                  <small className="text-md text-gray-500 font-medium">
                    {userDetails.about?.joined || "N/A"}
                  </small>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AboutDetails;
