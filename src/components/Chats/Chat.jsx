import React from "react";

export default function Chat() {
  return (
    <>
      {/* Header */}
      <div className=" relative h-screen  pb-56  flex-grow  mt-2 overflow-y-auto scrollbar-hide">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            <div className="max-w-5xl  rounded">
              <div>
                <div className="w-full">
                  <div className=" flex  items-center p-3 mb-10 shadow-md ">
                    <img
                      className="object-cover w-10 h-10 rounded-full"
                      src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg"
                      alt="username"
                    />
                    <div>
                      <h1 className=" ml-2 font-bold text-gray-600">
                        Claudia <br />{" "}
                      </h1>
                      <small className=" ml-2 text-gray-900">
                        Online <br />{" "}
                      </small>
                    </div>
                    <span className="absolute w-3 h-3 bg-green-600 rounded-full left-10 ml-20 top-3"></span>
                  </div>
                  <div className="relative w-full p-6 overflow-y-auto h-[40rem] border">
                    <ul className="space-y-2">
                      <li className="flex justify-start">
                        <div className="relative max-w-xl px-4 py-2 bg-gray-500 text-white rounded-full shadow">
                          <span className="block">Hi</span>
                        </div>
                      </li>
                      <li className="flex justify-end">
                        <div className="relative max-w-xl px-4 py-2 text-white bg-regal-orange rounded-full shadow">
                          <span className="block">Hiiii</span>
                        </div>
                      </li>
                      <li className="flex justify-end">
                        <div className="relative max-w-xl px-4 py-2 text-white  bg-regal-orange rounded-full shadow">
                          <span className="block">how are you?</span>
                        </div>
                      </li>
                      <li className="flex justify-start">
                        <div className="relative max-w-xl px-4 py-2  bg-gray-500 text-white rounded-full shadow">
                          <span className="block">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit.{" "}
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="flex items-center justify-between w-full p-3 border-t border-gray-300">
                    <button className="focus:outline-none outline-none border-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                        />
                      </svg>
                    </button>

                    <input
                      type="text"
                      placeholder="Type a message"
                      className="border-0 px-3 border-none  py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded-full text-sm shadow outline-none focus:outline-none  w-full pl-10"
                      required
                    />
                    <button className="focus:outline-none outline-none border-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-gray-500 focus:outline-none outline-none border-none"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                        />
                      </svg>
                    </button>
                    <button className="focus:outline-none outline-none border-none">
                      <svg
                        className="w-5 h-5 text-gray-500 origin-center transform rotate-90"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
