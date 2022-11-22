import React from 'react';
import LeaderStatus from './LeaderStatus';

function LeadersBoard() {

    const Leaders = [
			{
				id: 1,
				image:
					"https://res.cloudinary.com/itgenius/image/upload/v1668007553/pexels-jonathan-borba-12031357_rzxxvm.jpg",
				size: 20,
			},
			{
				id: 2,
				image:
					"https://res.cloudinary.com/itgenius/image/upload/v1668007538/pexels-martin-boh%C3%A1%C4%8D-10288457_uwpcbd.jpg",
				size: 16,
			},
			{
				id: 3,
				image:
					"https://res.cloudinary.com/itgenius/image/upload/v1668011048/pexels-james-gana-13747843_vz07rw.jpg",
				size: 14,
			},
			{
				id: 3,
				image:
					"https://res.cloudinary.com/itgenius/image/upload/v1668011048/pexels-james-gana-13747843_vz07rw.jpg",
				size: 12,
			},
		];

  return (
    <div className=' flex flex-col font-serif bg-white rounded-lg shadow-2xl p-4 h-40 w-full'>
      
      <h4 className='text-gray-700 font-medium m-2 mb-6 '> Leaders Board</h4>

      <div className='flex items-center justify-center space-x-2 h-10'>
          { 
               Leaders?.map(({ id, image , size }) => (
                   <LeaderStatus key={id} image={image} size = { size } />
              ))
          }
      </div>

    </div>
  );
}

export default LeadersBoard;
