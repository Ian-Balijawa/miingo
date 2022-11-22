import React from "react";
import EntertainmentInfo from "./EntertainmentInfo";

function Entertainment() {
	const entertainment = [
		{
			id: 1,
			image:
				"https://res.cloudinary.com/itgenius/image/upload/v1668324978/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI_tiveqj.png",
			title: "Netflix",
			description: "watch  free movies at anytime, just click and watch",
		},
		{
			id: 2,
			image:
				"https://res.cloudinary.com/itgenius/image/upload/v1668485483/apps.32357.14618985536919905.4b30e4f3-f7a1-4421-840c-2cc97b10e8e0_pt7rqy.png",
			title: "Spotify Music",
			description: "Download, listen to all your favorite music at all times",
		},
		{
			id: 3,
			image:
				"https://res.cloudinary.com/itgenius/image/upload/v1668325001/fvgPZ9QnfKEvBzL9CpSAVZedZL-leFMsZOHv2Psi30c6SpJmbad-zrwisqux5n1ybUOdCxzSEw_s900-c-k-c0x00ffffff-no-rj_kjo4py.jpg",
			title: "Sky Sports",
			description: "Get all the latest sports updates in one place.",
		},
	];

	return (
		<div className=" flex flex-col  bg-white  rounded-lg shadow-lg p-2 h-96 w-full font-serif">

			<div className="flex mb-6">
				<h4 className="text-gray-700 font-medium m-2  flex-start">
					{" "}
					Entertainment{" "}
				</h4>
			</div>

			<div className="flex font-serif flex-col justify-center space-y-2 h-56 mt-2 w-full">
				{entertainment?.map(({ id, image, title, description }) => (
					<EntertainmentInfo
						key={id}
						image={image}
						title={title}
						description={description}
					/>
				))}
			</div>
		</div>
	);
}

export default Entertainment;
