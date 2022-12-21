import React, { useState } from "react";
import { HiOutlineX } from "react-icons/hi";
import { HiPencil } from "react-icons/hi";
import { HiDocument } from "react-icons/hi";
import AboutField from "./AboutField";
import instance from "../../services/axios-config";
import useLocalStorage from "../../hooks/useLocalStorage";

function About() {

  const [edit, setEdit] = useState(false);
  const [intro,setIntro] = useState("")
  const [dob,setDob] = useState("")
  const [phone,setPhone] = useState("")
  const [gender,setGender] = useState("")
  const [country,setCountry] = useState("")
  const [relationship,setRelationship] = useState("")
 const  [city,setCity] = useState("")
 const [email,setEmail] = useState("")
 const [website,setWebsite] = useState("")
 const [joined,setJoined] = useState("")
 const [user] = useLocalStorage("user");
  const [inputFields] = useState([
    {
      id: 1,
      label: "Intro",
      input_type: "text",
      select: false,
      placeholder: "",
      select_options: [],
      onChange:(e)=>setIntro(e.target.value)
    },
    {
      id: 2,
      label: "Date-Of-Birth",
      input_type: "date",
      select: false,
      placeholder: "",
      select_options: [],
      onChange:(e)=>setDob(e.target.value)

    },
    {
      id: 3,
      label: "Phone Number",
      input_type: "text",
      select: false,
      placeholder: "",
      select_options: [],
      onChange:(e)=>setPhone(e.target.value)
    },
    {
      id: 4,
      label: "Gender",
      input_type: "text",
      select: true,
      placeholder: "Select Gender",
      select_options: ["Male", "Female"],
      onChange:(e)=>setGender(e.target.value)

    },
    {
      id: 5,
      label: "Country",
      input_type: "text",
      select: false,
      placeholder: "",
      select_options: [],
      onChange:(e)=>setCountry(e.target.value)
    },
    {
      id: 6,
      label: "Relationship",
      input_type: "text",
      select: true,
      placeholder: "Relationship",
      select_options: ["Single", "Married", "Divorced"],
      onChange:(e)=>setRelationship(e.target.value)
    },
    {
        id: 7,
        label: "lives in",
        input_type: "text",
        select: false,
        placeholder: "City",
        select_options: [],
        onChange:(e)=>setCity(e.target.value)
    },
    {
      id: 8,
      label: "Secondary Email Address",
      input_type: "email",
      select: false,
      placeholder: "",
      select_options: [],
      onChange:(e)=>setEmail(e.target.value)
    },
    {
      id: 9,
      label: "Website",
      input_type: "text",
      select: false,
      placeholder: "",
      select_options: [],
      onChange:(e)=>setWebsite(e.target.value)
    },
    ,
    {
      id: 10,
      label: "Joined",
      input_type: "text",
      select: false,
      placeholder: "Joined",
      select_options: [],
      onChange:(e)=>setJoined(e.target.value)
    },
  ]);
  const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
      const {
        data
      } = await instance.patch(`/user/profile/${user._id}`, {
        intro,
        dob,
        phone,
        gender,
        country,
        city,
        email,
        website,
        joined
      },
      );
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="hidden lg:flex flex-col  mt-5 shadow-lg bg-white rounded-md  h-auto overflow-hidden">
      <div className=" bg-white flex items-center justify-between text-gray-700 mb-5 px-3 border-b">

        <div className="">
          <h2 className="  text-lg text-gray-700 font-medium  py-4 font-sans">
            About
          </h2>
        </div>

        <div className="flex items-center space-x-3">
          {edit && (
            <div onClick={handleSubmit} className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 font-bold  p-2 cursor-pointer">
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
        {inputFields.map(({ id,  label ,input_type , select, placeholder, select_options,onChange}) => (
           
           <AboutField 
             key = { id }
             label = { label }
             input_type = { input_type }
             select = { select }
             placeholder = { placeholder }
             select_options = { select_options }
             enable_edit = { edit }
             onChange={onChange}
           />
           
        ))}
      </form>

    </div>
  );
}

export default About;
