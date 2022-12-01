import React, { useState } from "react";

function ProfileButton({ name }) {

   const [ active , setActive ] = useState(false);
   
  return (
    <div className="flex items-center justify-center ">
      <button
        className={` hidden md:inline-flex  mx-auto px-3 py-1 bg-miingo-cyan text-gray-700
                   md:px-5 rounded-lg  font-normal hover:shadow-xl active:scale-90 
                transition duration-500 border `}
      >
        { name }
      </button>

      <p  
      onClick={ (e) => {
         e.preventDefault();
         setActive(!active);
      }}
      className= {`sm:hidden cursor-pointer mt-4 ${ active && "active:bg-gray-100 active:border-b-2 active:border-black"}`}> 
        { name }
      </p>

    </div>
  );
}

export default ProfileButton;
