import React from 'react'
import { Link } from 'react-router-dom';

function MenuItem({ id , name , Icon, path }) {
  return (
    <Link to= { path } className="flex flex-col items-center justify-center  outline-none">
      
          <div className='flex items-center justify-center p-5 bg-lightgraybg rounded-lg '>
            <Icon className=' w-6 h-6 ' />
          </div>
           <p className=''> { name }</p>
     
    </Link>
  );
}

export default MenuItem;
