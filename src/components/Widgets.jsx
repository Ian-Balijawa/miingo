import Contact from './Contact';
import React, { useState } from 'react';
import { useSnapshot } from 'valtio';
import { actions, state } from '../state';
import { useEffect } from 'react';

const contacts = [
  {
    src: `https://ui-avatars.com/api/name=${['Muwonge', 'Lawrence'].join(
      ' '
    )}&background=random`,
    name: 'Muwonge',
    online: true,
    timestamp: '8:00am'
  },
  {
    src: `https://ui-avatars.com/api/name=${['balijawa', 'ian'].join(
      ' '
    )}&background=random`,
    name: 'Ian',
    online: false,
    timestamp: '8:00am'
  },
  {
    src: `https://ui-avatars.com/api/name=${['bukenya', 'roland'].join(
      ' '
    )}&background=random`,
    name: 'Roland',
    online: false,
    timestamp: '9:40am'
  },
  {
    src: `https://ui-avatars.com/api/name=${['Muwawu', 'ronald'].join(
      ' '
    )}&background=random`,
    name: 'ronald',
    online: true,
    timestamp: '10:00am'
  },
  {
    src: `https://ui-avatars.com/api/name=${['Derick', 'mo'].join(
      ' '
    )}&background=random`,
    name: 'derick',
    online: true,
    timestamp: '8:00am'
  },
  {
    src: `https://ui-avatars.com/api/name=${['wafulla', 'alan'].join(
      ' '
    )}&background=random`,
    name: 'alan',
    online: false,
    timestamp: '11:00am'
  }
];

const Widgets = ({ group }) => {
  const { socket } = useSnapshot(state);
  //const [contacts, setContatcts] = useState();

  useEffect(() => {
    if (socket) {
      socket.on('usersOnline', (data) => {
        //setContatcts(data);
        console.log('ONLINE USERS ', data);
      })
    }
  }, [socket]);

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
