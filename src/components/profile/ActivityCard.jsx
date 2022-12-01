import React from "react";

const data = [
	{
		id: 1,
		title: "Developer at Miingo",
		timeAgo: "10 mins Ago",
		image:
			"https://res.cloudinary.com/itgenius/image/upload/v1668011068/pexels-mahdi-chaghari-12463279_yt9vgo.jpg",
	},
	{
		id: 2,
		title: "Developer at Miingo",
		timeAgo: "10 mins Ago",
		image:
			"https://res.cloudinary.com/itgenius/image/upload/v1668011068/pexels-mahdi-chaghari-12463279_yt9vgo.jpg",
	},
	{
		id: 3,
		title: "Developer at Miingo",
		timeAgo: "10 mins Ago",
		image:
			"https://res.cloudinary.com/itgenius/image/upload/v1668011068/pexels-mahdi-chaghari-12463279_yt9vgo.jpg",
	},
	{
		id: 4,
		title: "Developer at Miingo",
		timeAgo: "10 mins Ago",
		image:
			"https://res.cloudinary.com/itgenius/image/upload/v1668011068/pexels-mahdi-chaghari-12463279_yt9vgo.jpg",
	},
];
const ActivityCard = ({ cardTitle }) => {
	return (
		<>
			<div className=" hidden lg:block bg-slate-100 lg:w-[300px] sm:w-[380px] lg:ml-7 mt-10 shadow-2xl lg:p-4  sm:p-2">
				<div className="font-bold justify-start leading-4  font-serif p-4">
					<h2>{cardTitle}</h2>
				</div>
				<hr className="py-2" />
				{data.map((dta) => (
					<div
						key={dta.id}
						className="flex space-x-4 space-y-4 justify-start items-center  "
					>
						<img
							className="rounded-full h-[50px] w-[50px] ml-4"
							src={dta.image}
							alt="pic"
						/>
						<hr />
						<div className="">
							<h3 className="text-md text-gray-700">{dta.title}</h3>
							<h4 className="text-xs text-gray-400">{dta.timeAgo}</h4>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default ActivityCard;
