import "../styles/Home.scss";
import React from "react";
import NaviBar from "../partComponent/NaviBar";
import Footer from "../partComponent/Footer";
import { useNavigate } from "react-router-dom";
// import { useWindupString } from "windups";
export default function Home() {
  // const [text1] = useWindupString(
  //   "Smart Control platform with electrode signal"
  // );
  const goto = useNavigate();
  return (
    <div id="container">
      <NaviBar id="navibar" />
      <div className="front-container">
        <div className="Video-Section">
          <video autoPlay loop muted playsInline poster="image/background.jpg">
            <source src="video/video.mp4" type="video/mp4" />
            Browser not support this video
          </video>
        </div>
        <div className="front-texts">
          <p className="text1">CAPSTONE NBBANG</p>
          <p className="text2">Smart Control platform with electrode signal</p>
          <p className="text3">
            It's not just muscles that can move
            <br /> We expand the limits of our bodies
          </p>
          <div className="button-frame">
            <div className="front-button">
              <p
                onClick={() => {
                  goto("/Experience");
                }}
              >
                experience now
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
