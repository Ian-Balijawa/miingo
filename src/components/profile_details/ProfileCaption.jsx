import { useContext, useState } from "react";
import axios from "../../services/axios-config";
import { HiCamera } from "react-icons/hi";
import useLocalStorage from "../../hooks/useLocalStorage";

function ProfileCaption({ handleEdit, user }) {
  const [editProfile, setEditProfile] = useState(true);
  const [accessToken] = useLocalStorage("accessToken");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (pickedFile) => {
    // setLoading(true);

    console.log(pickedFile);

    // const file = e.target.files[0];
    // setImage(e.target.result);
    // console.log(image);

    // const reader = new FileReader();

    // reader.onload = function (e) {
    // 	setImage(e.target.result);
    // };

    // reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profileImage", image);

    axios
      .patch(`/user/${user._id}`, formData)
      .then((response) => {
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const cameraIcon = document.querySelector("#camera");
  cameraIcon?.addEventListener("click", () => {
    document.getElementById("profile_image").click();
  });

  return (
    <div className="hidden lg:block   absolute  top-12 left-6 md:left-3 z-30 w-72 h-72 bg-white rounded-lg shadow-lg ">
      <div className=" ">
        <div className="flex flex-col space-y-3 items-center justify-center py-3">
          <div className="relative flex items-center justify-center w-20">
            <div className="w-14 h-14 md:w-20 md:h-20 rounded-full">
              <img
                id="preview"
                src={`https://ui-avatars.com/api/name=${user?.name}&background=random`}
                loading="lazy"
                className="w-full h-full rounded-full object-cover"
                alt="profile_caption"
              />
            </div>

            <form className="absolute bottom-0 right-0 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer p-2 rounded-full">
              <label htmlFor="profile_image">
                <HiCamera id="camera" className=" w-4 h-4 text-white " />
                <input
                  type="file"
                  id="profile_image"
                  accept="image/*"
                  onChange={(e) => {
                    handleChange(e.target.files[0]);
                  }}
                  className="hidden"
                />
              </label>
            </form>
          </div>

          <div className="">
            <p className="flex flex-col items-center  justify-center space-y-2">
              <h3 className="text-gray-500"> {user?.name} </h3>
              <h4 className="text-gray-500"> {user?.email} </h4>
            </p>
          </div>

          <div className=" flex items-center justify-between space-x-2 text-gray-600">
            <div className=" px-2">
              <p className="flex flex-col items-center justify-center space-y-2">
                <h3 className="text-gray-600"> {user?.followings?.length} </h3>
                <h4>Following</h4>
              </p>
            </div>

            <div className="border-r border-blue h-7 " />

            <div className="">
              <p className="flex flex-col items-center justify-center space-y-2">
                <h3 className="text-gray-600"> {user?.followers?.length} </h3>
                <h4>Followers</h4>
              </p>
            </div>
          </div>

          <div className=" flex items-center justify-center">
            <button
              onClick={handleEdit}
              className={`flex  mx-auto ${
                !editProfile ? "bg-blue text-white" : "text-blue"
              } px-3 py-1
                        md:px-5 rounded-lg  font-normal hover:shadow-xl active:scale-90
                        transition duration-300 border border-blue`}
            >
              EDIT PROFILE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCaption;
