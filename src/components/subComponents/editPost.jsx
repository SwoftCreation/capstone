import React from "react";
import Footer from "../partComponent/Footer";
import NaviBar from "../partComponent/NaviBar";
import { useWindupString } from "windups";

import "../styles/Experience.scss";
export default function Experience() {
  const [text] = useWindupString("Experience 기능이 추가될 예정입니다");
  return (
    <div id="container">
      <NaviBar id="navibar" />
      <div className="front-container">
        <h1>{text}</h1>
      </div>
      <Footer />
    </div>
  );
}
