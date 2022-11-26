import React from "react";
import Header from '../components/Header'
import SideFeed from "../components/SideFeed";
import Feed from '../components/Feed';
import Statuses from '../components/Statuses';
import Boards from '../components/Boards'
import BottomNav from '../components/BottomNav'


const {useState}  = React;


function Home() {
  
  const [logout, setLogout] = useState(false);

   const showDropdown = () => {
       setLogout(!logout);
   }

  const signOut = (e) => {
        e.preventDefault();
  }

  return (
    <div className="">
      <div className=" relative h-screen bg-miingo-gray overflow-hidden font-serif">
        {/* Header */}
        <Header onPress = { showDropdown }/>

        {logout && (
          <div className="absolute top-16 right-14 z-50 bg-white shadow-xl rounded-lg h-auto w-28 p-2">
            <p className="text-sm hover:bg-gray-200 cursor-pointer border-b mb-2 ">
              {" "}
              Profile{" "}
            </p>
            <p
              onClick = {signOut}
             className="text-sm hover:bg-gray-200 cursor-pointer">Logout</p>
          </div>
        )}

        <Statuses />

        <main className=" flex space-x-2 pr-3">
          {/* chat */}

          {/* <Widgets /> */}
          <SideFeed />

          {/* Feed */}

          <Feed />

          {/* Boards */}

          <Boards />
        </main>

        <BottomNav />
      </div>
    </div>
  );
}

export default Home;