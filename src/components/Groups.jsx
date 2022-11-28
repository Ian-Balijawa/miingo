import React from "react";
import GroupInfo from "./GroupInfo";

function Groups() {
  const Leaders = [
    { id: 1, image: "/bg2.jpg", members: 246, name: "Chelsea FC", active: 13 },
    { id: 2, image: "https://media.istockphoto.com/id/1314248856/photo/round-podium-with-pink-and-green-lights-background.jpg?b=1&s=170667a&w=0&k=20&c=0ManZpyL9lNQdp6gxF7jemC89m8KRDKg31F29kaODBo=", members: 236, name: " Myooga", active: 18 },
    {
      id: 3,
      image: "https://media.istockphoto.com/id/1353553203/photo/forest-wooden-table-background-summer-sunny-meadow-with-green-grass-forest-trees-background.jpg?b=1&s=170667a&w=0&k=20&c=-jvR1WDwcloLXRgRTGeyG3frvrhPIbegdemeL6vY2Pk=",
      members: 634,
      name: "Wattoto Church",
      active: 19,
    },
    {
      id: 4,
      image: "https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg",
      members: 736,
      name: " Radio Simba",
      active: 20,
    },
  ];

  return (
		<div className=" flex flex-col font-serif bg-white rounded-lg shadow-lg p-2 h-[450px]">
			<div className=" flex items-center justify-between p-2 mb-10">
				<div className="flex items-center justify-center">
					<h4 className="text-gray-700 font-medium m-2 "> My Groups </h4>
				</div>

				<div className="flex items-center">
					<button
						className={`flex  mx-auto text-white bg-blue-600 hover:bg-blue-600 px-3 py-1 md:px-5 rounded-full shadow-xl font-normal
                         hover:shadow-xl active:scale-90 transition duration-300`}
					>
						Create Group
					</button>
				</div>
			</div>

			<div className="flex flex-col justify-center space-y-2 h-56 mt-2">
				{Leaders?.map(({ id, image, members, name, active }) => (
					<GroupInfo
						key={id}
						image={image}
						members={members}
						name={name}
						active={active}
					/>
				))}
			</div>
		</div>
	);
}

export default Groups;
