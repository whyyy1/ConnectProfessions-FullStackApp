import React, { useState } from "react";
import axios from "axios";
import EventCar from "../Widgets/eventCar";
function HomePage({ news }) {
  return (
    <div className="flex flex-col  ">
      <h1 className="text-2xl text-center font-bold">
        Welcome to the main feed!
      </h1>
      <div>
        {/* title */}
        <div>
          <h1 className="text-2xl text-center font-bold">Current News</h1>
        </div>
        {/* news */}
        {news.length > 0 ? (
          <div className="flex  bg-black bg-opacity-10  h-96 overflow-hidden overflow-x-scroll   rounded-xl mb-10">
            {news.map((article) => {
              return (
                <div className="m-20 pt-10 justify-between">
                  <div
                    key={article.news}
                    className="card bg-blue-600 m-5 text-primary-content  "
                  >
                    <div
                      className="card-body m-5 bg-black rounded-lg"
                      key={article.name}
                    >
                      <h1 className="card-title">{article.news}</h1>
                      <h2>{article.date}</h2>
                      <a
                        href={article.link}
                        className="card-actions hover:text-blue-700"
                      >
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
      </div>
      {/* events */}
      <div>
        <EventCar />
      </div>
    </div>
  );
}

export default HomePage;
