import React, { useState } from "react";
import axios from "axios";
import EventCar from "../Widgets/eventCar";
function HomePage({ news }) {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-mainGif bg-no-repeat bg-cover ">
        <div className="bg-violet-500 bg-opacity-5 rounded-xl p-20">
      <h1 className="text-2xl text-center font-bold">
        Welcome to the main feed!
      </h1>
      {/* title */}
      <div>
          <h1 className="text-2xl text-center font-bold">Current News</h1>
        </div>
        <div className="flex">
  {/* news */}
  {news.length > 0 ? (
    <div className="flex flex-col pl-5 w-1/2 items-center bg-black bg-opacity-5 h-96 overflow-hidden overflow-y-scroll rounded-xl mr-20">
      {news.map((article) => {
        return (
          <div key={article.name} className=" pt-10 justify-between">
            <div className="card bg-blue-600 m-5 text-primary-content">
              <div className="card-body m-5 bg-black rounded-lg">
                <h1 className="card-title">{article.news}</h1>
                <h2>{article.date}</h2>
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
  )}

  {/* events */}
  <div className="flex flex-col pl-5 w-1/2 items-center bg-black bg-opacity-5 h-96 overflow-hidden overflow-y-scroll rounded-xl ml-20">
    <EventCar />
  </div>
</div>

</div> 
    </div>
  );
}

export default HomePage;
