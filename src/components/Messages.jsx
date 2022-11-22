import React from "react";
import Header from "./Header";
import Statuses from "./Statuses";
import Widgets from "./Widgets";
import Chat from "./Chats/Chat";
import Boards from "./Boards";


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
