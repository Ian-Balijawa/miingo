import React from "react";
import { HiLockClosed } from "react-icons/hi2";
import { HiLockOpen } from "react-icons/hi2";
import { Stack, Button, Spinner, Select } from "@chakra-ui/react";
import Input from "../Input";

function AboutField({
  label,
  input_type,
  select,
  placeholder,
  select_options,
  enable_edit,
  onChange
}) {
  return (
    <div className={`flex items-center space-x-3 pb-2  p-2 ${label === "Joined"? "": "border-b"}`}>
      <div className="flex items-center justify-center">
        {enable_edit ? (
          <HiLockOpen className="w-6 h-6" />
        ) : (
          <HiLockClosed className="w-6 h-6" />
        )}
      </div>

      <div className="flex flex-col">
       
       
          <label className="block text-gray-700 text-sm font-bold mb-1">
          {label}
        </label>
       

        { enable_edit && !select && label !== "Joined" && (<Input className="cursor-pointer text-gray-400" onChange={onChange} placeholder={placeholder} type={ input_type } />)}

        {enable_edit && select && (
          <Select
            className="cursor-pointer"
            placeholder= { placeholder }
          >
            {select_options.map((option) => (
              <option
                key = { option }
                value= { option }
                className="block cursor-pointer text-gray-700 text-sm font-bold mb-1"
              >
               { option }
              </option>
            ))}
          </Select>
        )}
      </div>
    </div>
  );
}

export default AboutField;
