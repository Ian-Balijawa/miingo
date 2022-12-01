import React, { useState } from "react";
import AboutField from "./AboutField";
import { HiOutlineX } from "react-icons/hi";
import { HiPencil } from "react-icons/hi";
import { HiDocument } from "react-icons/hi";

function PartialProfileEdit() {
  const [edit, setEdit] = useState(false);

  const [inputFields] = useState([
    {
      id: 1,
      label: "Name",
      input_type: "text",
      select: false,
      placeholder: "",
      select_options: [],
    },
  ]);
  return (
    <div className="hidden lg:flex flex-col absolute top-12 left-80 z-30   mt-5 shadow-lg bg-white rounded-md  h-auto w-80 overflow-hidden">
      <div className=" bg-white flex items-center justify-between text-gray-700 mb-5 px-3 border-b">
        <div className="">
          <h2 className="  text-base text-gray-700 font-medium  py-4 font-sans">
             Partial Profile  Edit
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
        {inputFields.map(
          ({ id, label, input_type, select, placeholder, select_options }) => (
            <AboutField
              key={id}
              label={label}
              input_type={input_type}
              select={select}
              placeholder={placeholder}
              select_options={select_options}
              enable_edit={edit}
            />
          )
        )}
      </form>
    </div>
  );
}

export default PartialProfileEdit;
