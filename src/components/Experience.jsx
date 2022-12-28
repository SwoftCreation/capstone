import React from "react";
import Footer from "../partComponent/Footer";
import NaviBar from "../partComponent/NaviBar";
import RealtimeAnimation from "./subComponents/RealtimeAnimation";

import "../styles/Experience.scss";
export default function Experience() {
  return (
    <div id="container">
      <NaviBar id="navibar" />
      <div className="front-container">
        <RealtimeAnimation />
      </div>
      <Footer />
    </div>
  );
}
