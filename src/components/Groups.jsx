import GroupInfo from './GroupInfo';
import React from 'react';

function Groups() {
  const Leaders = [
    {
      id: 1,
      image: `https://ui-avatars.com/api/name=${['chelsea', 'fc'].join(
        ' '
      )}&background=random`,
      members: 246,
      name: 'Chelsea FC',
      active: 13
    },
    {
      id: 2,
      image: `https://ui-avatars.com/api/name=${['Myooga'].join(
        ' '
      )}&background=random`,
      members: 236,
      name: ' Myooga',
      active: 18
    },
    {
      id: 3,
      image: `https://ui-avatars.com/api/name=${['Wattoto', 'Church'].join(
        ' '
      )}&background=random`,
      members: 634,
      name: 'Wattoto Church',
      active: 19
    },
    {
      id: 4,
      image: `https://ui-avatars.com/api/name=${['Radio', 'Simba'].join(
        ' '
      )}&background=random`,
      members: 736,
      name: ' Radio Simba',
      active: 20
    }
  ];

  return (
    <div className=" flex flex-col font-serif bg-white rounded-lg shadow-lg p-2 h-[450px]">
      <div className=" flex items-center justify-between p-2 mb-10">
        <div className="flex items-center justify-center">
          <h4 className="text-gray-700 font-medium m-2 "> My Groups </h4>
        </div>

        <div className="flex items-center">
          <button
            className={`flex  mx-auto text-white bg-blue px-3 py-1 md:px-5 rounded-full shadow-xl font-normal
                         hover:shadow-xl active:scale-90 transition duration-300`}
          >
            Create Group
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-center space-y-2 h-56 mt-2 ">
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
