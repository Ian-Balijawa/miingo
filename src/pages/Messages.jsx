import Boards from '../components/Boards';
import Chat from '../components/Chats/Chat';
import Header from '../components/Header';
import Statuses from '../components/Statuses';
import Widgets from '../components/Widgets';

export default function Messages() {
  return (
    <div className="h-screen bg-miingo-gray overflow-hidden">
      {/* Header */}
      <Header />

      <Statuses />

      <main className="flex space-x-2 pr-3">
        {/* chats */}

        <Widgets />

        {/* Messages */}

        <Chat />

        {/* Boards */}

        <Boards />
      </main>
    </div>
  );
}
