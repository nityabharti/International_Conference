import React from "react";
import "../../styles/home.css";
import Firstpage from "../content/firstpage";
import Bar from "./bar";

const Home = () => {
  return (
    <div className="return">
      <div className="main_content">
        {/* <video className="head_video" autoPlay muted loop>
            <source src={bgVideo} type="video/mp4"/>
            </video> */}
        <p className="heading">
          1<sup>st</sup> International Conference on Smart and Sustainable
          Technologies in Energy and Power Systems
        </p>
        <p className="ssteps">SSTEPS - 2022</p>
        {/* <p className="theme">(Theme: Sustinable Technologies for Smart Future)</p> */}
        <p className="date">
          {" "}
          7<sup>th</sup> - 9<sup>th</sup> Nov, 2022
        </p>
        {/* <p className="venue"> Venue: Dept. of Electrical Engineering, Central University of Haryana, Haryana </p>
        <p className="venue"> Central University of Haryana, Haryana </p> */}
        {/* <p className="format">Event format: Virtual mode </p> */}
      </div>
      <Bar />
      <div className="content">
        <Firstpage />
      </div>
    </div>
  );
};
export default Home;
