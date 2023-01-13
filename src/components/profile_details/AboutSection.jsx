import React, { useState } from "react";
import { HiOutlineX } from "react-icons/hi";
import { HiPencil } from "react-icons/hi";
import { HiPaperAirplane } from "react-icons/hi";
import Input from "../Input";

function AboutSection({ title, collection }) {
   
    const [edit, setEdit] = useState(false);
    const [ fieldValue , setFieldValue ] = useState("");

    // console.log(fieldValue);

  return (
    <div className="flex flex-col shadow-lg bg-white rounded-md  h-auto  overflow-hidden p-3">
      
      <div className=" bg-white flex items-center justify-between text-gray-700 mb-5 px-3 border-b">
        
        <div className={`${ edit && "hidden"}`}>
          <h2 className="text-lg text-gray6 font-medium  py-4 font-sans">
             { title }
          </h2>
        </div>

         { edit && (
             <div className=" flex items-center  space-x-2 justify-center">
               <Input className="cursor-pointer text-gray" onChange={(e)=> setFieldValue(e.target.value)} placeholder={ `Type ${ title } here .....`} type="text" />
                <div className="flex items-center justify-center p-2 hover:bg-lightgraybg active:scale-90 transition ease-in-out duration-300 rounded-full cursor-pointer">
                   < HiPaperAirplane className="w-6 h-6 rotate-90" /> 
                </div>
           </div>
         )}

        <div className="flex items-center space-x-3">

          {!edit && (
            <div
              onClick={(e) => {
                e.preventDefault();
                setEdit(!edit);
              }}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-lightgraybg font-bold  p-2 cursor-pointer"
            >
              <HiPencil className="h-10 w-10" />
            </div>
          )}

          {edit && (
            <div
              onClick={(e) => {
                e.preventDefault();
                setEdit(!edit);
              }}
              className=" flex items-center justify-center w-8 h-8 rounded-full bg-lightgraybg font-bold  p-2 cursor-pointer"
            >
              <HiOutlineX className="h-6 w-6" />
            </div>
          )}
        </div>
      </div>

      <div className="flex  items-center justify-between space-x-2 px-3">
         
          <div className="flex items-center space-x-3 space-y-2 flex-wrap ">
             { collection.map(( text ) => (
                 <>
                  <div key = {`text${2+3}`} className=" flex items-center space-x-1 w-auto bg-skyBlue3 rounded-full px-2 py-1 cursor-pointer group">
                      <span className="text-green-800  text-xs"> { text } </span>

                      <HiOutlineX className=" hidden h-4 w-4 text-white group-hover:inline-flex" />
                  </div>

                 </>
             ))}

          </div>
      </div>

    </div>
  );
}

export default AboutSection;
