import React, { useState } from 'react';
import AboutSection from './AboutSection';

function AboutFeed() {

    const [aboutSections] = useState([
           {
            id:1,
            title: "Hobbies",
            collection: ["playing", "Gosping ", "worshiping", "singing", "Dancing"],
           },
           {
            id:2,
            title: "Favourite Movies",
            collection: ["Terminator", "wrath of virgra", "love story", "kikomando", "kungufu hustle"],
            
           },
           {
            id:3,
            title: "Favourite Books",
            collection: ["mathematics ", "Machine Learning", "Artificial intelligence", "Data structures", "Discrete Mathematics"],
            
           },
           {
            id:4,
            title: "Favourite Games",
            collection: ["Dream league", "Fifa", "Temple Run", "Need speed", "sindikate"],
            
           },
           {
            id:5,
            title: "Favourite Bands / Artists",
            collection: ["Zuchu", "Eddy kenzo ", "sheebah karungi", "Madrat and chiko", "Tonny Lubega"],
            
           },
           {
            id:6,
            title: "Favourite Series",
            collection: ["breaking bad", "stranger things ", "money heist", "lost in space", "find yourself"],
            
           },
           {
            id:7,
            title: "Other Interest",
            collection: ["Sports", "Blogging", "Volunteering", "Traveling", "Strategic Gaming"],
            
           },
    ]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-3 p-2 w-full h-full">
      {
        aboutSections.map(({ id , title , collection , onChange }) => (
            <AboutSection 
               key = { id }
               title = { title }
               collection = { collection }
               onChange = { onChange }
            />
        ))
      }
       
    </div>
  );
}

export default AboutFeed;
