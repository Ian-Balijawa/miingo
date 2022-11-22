import React from "react";

function Contact ( { src, name, online, timestamp } ) {
	return (
		<div
			className={`flex items-center justify-between space-x-3
	  mb-2 relative hover:bg-gray-200 cursor-pointer
	   p-2 pr-5 rounded-xl
	  `}
		>
			<div className=" flex items-center space-x-3">
				<div className=" relative w-14 h-14 border-2 border-white rounded-full object-cover">

					<img src = {src}  alt="group-pic" className="w-full h-full rounded-full" />

					<span className={` absolute w-3 h-3 ${online ? "bg-green-400" : "bg-red-400"} rounded-full  top-0 right-0 `}></span>
				</div>

				<div className="">
					<p className="">{name}</p>
					<p className=" flex items-center space-x-2 text-xs font-medium text-gray-500">
						<span className={`mr-2 ${online && "text-green-400"}`}>{online ? "online" : "Last seen"}</span>
						{timestamp}
					</p>
				</div>
			</div>

			<div className=" flex items-center justify-center bg-green-400 text-white rounded-full w-7 h-7 ">
				<p className=" text-sm">13</p>
			</div>
		</div>
	);
}

export default Contact;
