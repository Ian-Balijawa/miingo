import Contact from './Contact';
import React from 'react';
import { state } from '../state';
import { useSnapshot } from 'valtio';

function Widgets({ group }) {
  const snap = useSnapshot(state);
  const contacts = snap.users;

  return (
    <div className=" relative hidden lg:flex flex-col pb-2 mt-5 shadow-lg bg-white rounded-md  h-screen overflow-y-auto scrollbar-hide ">
      <div className=" bg-white  sticky top-0 z-30 flex space-x-4 items-center text-gray-700 mb-5">
        <h2 className="  text-lg text-gray-700 font-medium pl-10 py-4 font-sans">
          {group ? 'Group Members' : 'Chats'}
        </h2>
      </div>

      <div className=" px-1">
        {contacts.map((contact) => (
          <Contact
            key={contact._id}
            src={
              contact?.image ||
              `https://ui-avatars.com/api/name=${contact?.name}&background=random`
            }
            name={contact?.name}
            online={contact?.online || false}
            timestamp={contact?.lastSeen || '8:00am'}
          />
        ))}
      </div>
    </div>
  );
}

export default Widgets;
