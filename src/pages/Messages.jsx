import Boards from '../components/Boards';
import Chat from '../components/Chats/Chat';
import ModalWrapper from '../components/StatusModal';
import SideFeed from '../components/SideFeed';
import Statuses from '../components/Statuses';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Messages() {
  const location = useLocation();
  const { src, online, name } = location.state;
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative h-screen bg-miingo-gray overflow-y-auto overflow-x-hidden scrollbar-hide">
      <Statuses handlePostStatus={() => setShowModal(true)} />

      {showModal ? <ModalWrapper handler={setShowModal} /> : null}

      <main className="flex space-x-2 pr-3">
        {/* chats */}

        <SideFeed />

        {/* Messages */}

        <Chat name={name} src={src} online={online} />

        {/* Boards */}

        <Boards />
      </main>
    </div>
  );
}
