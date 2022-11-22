import React from "react";
import Contact from "./Contact";

const contacts = [
	{
		src: "https://res.cloudinary.com/itgenius/image/upload/v1668416630/social-media-profile-photos_ogvnju.jpg",
		name: "Muwonge",
		online: true,
		timestamp: "8:00am",
	},
	{
		src: "https://links.papareact.com/f0p",
		name: "Jeff",
		online: false,
		timestamp: "8:00am",
	},
	{
		src: "https://links.papareact.com/kxk",
		name: "Elun Mask",
		online: false,
		timestamp: "9:40am",
	},
	{
		src: "https://links.papareact.com/zvy",
		name: "Bill gates",
		online: true,
		timestamp: "10:00am",
	},
	{
		src: "https://links.papareact.com/snf",
		name: "Mark",
		online: true,
		timestamp: "8:00am",
	},
	{
		src: "https://links.papareact.com/d0c",
		name: " Potter",
		online: false,
		timestamp: "11:00am",
	},
	{
		src: "https://links.papareact.com/6gg",
		name: " Queen",
		online: true,
		timestamp: "12:00pm",
	},
	{
		src: "https://links.papareact.com/r57",
		name: "James",
		online: true,
		timestamp: "1:00pm",
	},
];

function Widgets() {
	return (
		<div className=" relative hidden lg:flex flex-col  pb-56 w-80 mt-5 ml-5 shadow-2xl bg-white rounded-md  h-screen overflow-y-auto scrollbar-hide ">
			<div className=" bg-white  sticky top-0 z-50 flex space-x-4 items-center text-gray-700 mb-5">
				<h2 className="  text-lg text-gray-700 font-medium pl-10 py-4 font-sans">
					Chats
				</h2>
			</div>

			<div className=" px-1">
				{contacts.map((contact) => (
					<Contact
						key={contact.src}
						src={contact.src}
						name={contact.name}
						online={contact.online}
						timestamp={contact.timestamp}
					/>
				))}
			</div>
		</div>
	);
}

export default Widgets;
