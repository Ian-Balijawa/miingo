import React from "react";
import Header from '../components/Header'
import SideFeed from "../components/SideFeed";
import Feed from '../components/Feed';
import Statuses from '../components/Statuses';
import Boards from '../components/Boards'
import BottomNav from '../components/BottomNav'
import {useDispatch}  from 'react-redux'
import { signout } from "../app/slices/authSlice";
import { useNavigate } from "react-router-dom";
import axios from '../services/axios-config'


const {useState}  = React;


function Home() {
  const [logout, setLogout] = useState(false);
  const dispatch =   useDispatch()
  const navigate = useNavigate()

   const showDropdown = () => {
       setLogout(!logout);
   }

  const handleLogout = async(e) =>{
    e.preventDefault()

    try {
      const res = await axios.patch('/auth/logout')
    } catch (error) {
       if(error){
         console.log(error)
       }
    }

    localStorage.removeItem("token")

    navigate('/')
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
              onClick = {handleLogout}
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