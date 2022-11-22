import React, { useRef, useState } from "react";

function InputBox() {
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);

  const [imageToPost, setImageToPost] = useState(null);

  const removeImage = () => {
    setImageToPost(null);
  };

  return (
    <div className="bg-white p-2 shadow-md text-gray-500 font-medium mt-6 ">
      <div className="flex space-x-4  p-4 items-center ">
        <div className=" w-10 h-10 hidden md:flex">
          <img
            className="w-full h-full rounded-full object-cover "
            src="/images/ml.jpg"
            alt="profile"
          />
        </div>
        <form className="flex w-full">
          {/* <input
            type="text"
            ref={inputRef}
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none "
            placeholder={`What's on your mind Muwonge Lawrence`}
          /> */}

          <textarea
            id="comment"
            name="comment"
            rows="8"
            cols="50"
            ref = {inputRef}
            className="font-sans text-gray-600 resize-none flex-grow  h-20 w-full  px-5 py-3 focus:outline-none rounded-lg border"
            placeholder="Share what you are thinking here......."
            maxLength="200"
            // onChange={handleChange("comment")}
          ></textarea>
        </form>

        {imageToPost && (
          <div
            onClick={removeImage}
            className={`flex flex-col filter hover:brightness-110 
                     transition duration-150 transform hover:scale-105 cursor-pointer`}
          >
            <img
              src={imageToPost}
              className=" object-contain"
              alt=""
            />

            <p className="text-xs text-red-500 text-center"> Remove</p>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between p-3 border-t">
        <div className=" flex items-center justify-center space-x-2">
          <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 hover:rounded-lg cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
              />
            </svg>

            <p className="text-xs sm:text-sm xl:text-base">Video</p>
          </div>

          <div
            onClick={() => filePickerRef.current.click()}
            className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 hover:rounded-lg cursor-pointer "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>

            <p className="text-xs sm:text-sm xl:text-base">Photo</p>

            <input ref={filePickerRef} type="file" hidden />
          </div>

          <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 hover:rounded-lg cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
              />
            </svg>

            <p className="text-xs sm:text-sm xl:text-base">File</p>
          </div>
        </div>

        <div className=" flex items-center justify-center ">
          <h4> Post </h4>
          <span className="flex items-center justify-center ml-2 cursor-pointer active:scale-90 transition ease-in-out duration-300">
            <button className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
              </svg>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
