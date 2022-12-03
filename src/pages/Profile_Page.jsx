import { FiMail, FiMoreHorizontal } from 'react-icons/fi';

import useLocalStorage from '../hooks/useLocalStorage';

const NewProfilePage = () => {
  const [user] = useLocalStorage('user');

  return (
    <>
      {/* // container */}
      <div className="flex flex-col relative ">
        <div className="bg-[url('https://res.cloudinary.com/itgenius/image/upload/v1669735929/u-bg_mwcezz.jpg')] sm:h-[40vh]  lg:h-[60vh] lg:w-[95vw] justify-center items-center lg:mx-9 sm:mx-5 rounded-lg ">
          <div className="justify-center items-center relative rounded-full">
            <img
              className="h-[120px] w-[120px] rounded-full absolute ml-[30px] z-50 bg-white p-2 sm:top-[250px]  lg:top-[408px]    "
              src="https://res.cloudinary.com/itgenius/image/upload/v1668011068/pexels-mahdi-chaghari-12463279_yt9vgo.jpg"
              alt=""
            />

            <p className="flex  flex-col font-serif font-black absolute sm:top-[296px] lg:top-[450px] ml-[150px]">
              {user?.name?.toUpperCase()}
              <span className="text-gray-600 text-sm font-serif">
                {user?.email}
              </span>
            </p>

            <div className=" absolute flex justify-center items-center sm:top-[299px] lg:top-[450px] right-0 space-x-4 ">
              <button className="bg-regal-orange p-auto text-white font-serif  px-3 py-2  rounded-md ">
                ADD FRIEND
              </button>
              <FiMail className=" h-8 w-8 font-bold text-xl bg-slate-200 p-2 rounded-md" />
              <FiMoreHorizontal className=" h-8 w-8 font-bold text-xl bg-slate-200 p-2 rounded-md" />
            </div>
          </div>
        </div>

        <div className="flex justify-between absolute items-center rounded-md sm:top-[390px] lg:top-[580px] px-4 bg-slate-200 lg:py-8 sm:py-5 shadow-2xl lg:ml-[40px] w-[95vh] ">
          <p className="inline-block p-4 text-regal-orange rounded-t-lg border-b-2 border-regal-orange active dark:text-regal-orange dark:border-regal-orange">
            About
          </p>
          <p className="text-gray-400">Membership</p>
          <p className="text-gray-400">Discussion</p>
          <p className="text-gray-400">Groups</p>
          <p className="text-gray-400">Video</p>
          <p className="text-gray-400">Media</p>
        </div>
      </div>
    </>
  );
};

export default NewProfilePage;
