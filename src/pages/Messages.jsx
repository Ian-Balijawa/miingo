import { useLocation, useParams } from 'react-router-dom';
import Boards from '../components/Boards';
import Chat from '../components/Chats/Chat';
import Header from '../components/Header';
import SideFeed from '../components/SideFeed';
import Statuses from '../components/Statuses';

export default function Messages() {

//  const { name }= useParams();
 const location = useLocation();
 const { src , online , name } = location.state
//  console.log(online);

  return (
    <div className="h-screen bg-miingo-gray overflow-hidden">
      {/* Header */}
      <Header />

      <Statuses />

      <main className="flex space-x-2 pr-3">
        {/* chats */}

       
        <SideFeed />

        {/* Messages */}

        <Chat name = { name }  src = {src } online ={ online }/>

        {/* Boards */}

        <Boards />
      </main>
    </div>
  );
}
