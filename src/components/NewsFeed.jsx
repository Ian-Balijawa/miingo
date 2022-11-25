import React from "react";
import { Link } from "react-router-dom";

function NewsFeed({ id, Icon, color, title, path }) {
  return (
    <Link to={ path }>
      <div
        className={`flex space-x-3 mb-2  hover:bg-gray-200 cursor-pointer
         p-2 pr-5 rounded-xl`}
      >
        <div className= {`w-14 h-14 flex items-center justify-center rounded-full ${color}`}>
          <Icon className="h-6 w-6 text-white " />
        </div>

        <div className="flex items-center justify-center">
          <p className="">{title}</p>
        </div>
      </div>
    </Link>
  );
}

export default NewsFeed;
