import React, { useState } from "react";
import axios from "axios";
import EventCar from "../Widgets/eventCar";
function HomePage({ news }) {
  return (
    <div className="flex flex-col  items-center h-full bg-gradient-to-b from-blue-300 via-green-300 to-yellow-100">
        <div className=" rounded-xl p-20 mt-10">
      <h1 className="text-2xl text-black text-center font-bold bg-yellow-600 bg-opacity-10 rounded-xl mb-20 ">
        Welcome to the main feed!
      </h1>
      {/* title */}
      <div>
          
        </div>
        <div className=" lg:flex">
            
  {/* news */}
  <div className="flex flex-col lg:w-1/2 items-center">
  <h1 className="text-2xl text-black text-center font-bold bg-yellow-600 bg-opacity-5 rounded-xl w-1/3 ">Current News</h1>
  {news.length > 0 ? (
    
    <div className="flex flex-col pl-5 text-white items-center bg-black bg-opacity-5 h-96 overflow-hidden overflow-y-scroll rounded-xl m-5 md:m-0 ">
        
      {news.map((article) => {
        return (
          <div key={article.name} className=" pt-10 justify-between">
            <div className="card bg-blue-600 md:m-5 text-primary-content">
              <div className="card-body m-5 bg-black rounded-lg">
                <h1 className="card-title text-xl font-bold">{article.news}</h1>
                <h2 className="text-xl font-bold">{article.date}</h2>
                <a href={article.link} className="card-actions hover:text-blue-700">
                  Learn More
                </a>
                <h2>
                  {article.Publisher} - {article.Category}
                </h2>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <>No News</>
  )}</div>

  {/* events */}
  <div className="flex flex-col lg:w-1/2  items-center">
    <h1 className="text-2xl text-black text-center font-bold bg-yellow-600 bg-opacity-10 rounded-xl w-1/3">Current Events</h1>
  <div className="flex flex-col pl-5  items-center bg-black bg-opacity-5 h-96 overflow-hidden overflow-y-scroll rounded-xl ">
    <EventCar />
  </div>
</div>
</div>
</div> 
    </div>
  );
}

export default HomePage;
