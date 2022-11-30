import React, { useState } from "react";
import { HiOutlineX } from "react-icons/hi";
import { HiPencil } from "react-icons/hi";
import { HiDocument } from "react-icons/hi";
import AboutField from "./AboutField";

function About() {

  const [edit, setEdit] = useState(false);

  const [inputFields] = useState([
    {
      id: 1,
      label: "Intro",
      input_type: "text",
      select: false,
      placeholder: "",
      select_options: [],
    },
    {
      id: 2,
      label: "Date-Of-Birth",
      input_type: "date",
      select: false,
      placeholder: "",
      select_options: [],
    },
    {
      id: 3,
      label: "Phone Number",
      input_type: "text",
      select: false,
      placeholder: "",
      select_options: [],
    },
    {
      id: 4,
      label: "Gender",
      input_type: "text",
      select: true,
      placeholder: "Select Gender",
      select_options: ["Male", "Female"],
    },
    {
      id: 5,
      label: "Country",
      input_type: "text",
      select: false,
      placeholder: "",
      select_options: [],
    },
    {
      id: 6,
      label: "Relationship",
      input_type: "text",
      select: true,
      placeholder: "Relationship",
      select_options: ["Single", "Married", "Divorced"],
    },
    {
        id: 7,
        label: "lives in",
        input_type: "text",
        select: false,
        placeholder: "City",
        select_options: [],
    },
    {
      id: 8,
      label: "Secondary Email Address",
      input_type: "email",
      select: false,
      placeholder: "",
      select_options: [],
    },
    {
      id: 9,
      label: "Website",
      input_type: "text",
      select: false,
      placeholder: "",
      select_options: [],
    },
    ,
    {
      id: 10,
      label: "Joined",
      input_type: "text",
      select: false,
      placeholder: "Joined",
      select_options: [],
    },
  ]);

  return (
    <div className=" relative hidden lg:flex flex-col  mt-5 shadow-lg bg-white rounded-md  h-screen overflow-y-auto scrollbar-hide">
      <div className=" bg-white sticky top-0 z-50 flex items-center justify-between text-gray-700 mb-5 px-3 border-b">
        <div className="">
          <h2 className="  text-lg text-gray-700 font-medium  py-4 font-sans">
            About
          </h2>
        </div>

        <div className="flex items-center space-x-3">
          {edit && (
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 font-bold  p-2 cursor-pointer">
              <HiDocument className="h-6 w-6" />
            </div>
          )}

          {!edit && (
            <div
              onClick={(e) => {
                e.preventDefault();
                setEdit(!edit);
              }}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 font-bold  p-2 cursor-pointer"
            >
              <HiPencil className="h-6 w-6" />
            </div>
          )}

          {edit && (
            <div
              onClick={(e) => {
                e.preventDefault();
                setEdit(!edit);
              }}
              className=" flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 font-bold  p-2 cursor-pointer"
            >
              <HiOutlineX className="h-6 w-6" />
            </div>
          )}
        </div>
      </div>

      <form className="grid grid-cols-1 gap-y-2 px-4">
        {inputFields.map(({ id,  label ,input_type , select, placeholder, select_options }) => (
           
           <AboutField 
             key = { id }
             label = { label }
             input_type = { input_type }
             select = { select }
             placeholder = { placeholder }
             select_options = { select_options }
             enable_edit = { edit }
           />
           
        ))}
      </form>

    </div>
  );
}

export default About;
