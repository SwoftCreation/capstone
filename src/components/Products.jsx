import Footer from "../partComponent/Footer";
import NaviBar from "../partComponent/NaviBar";
import React from "react";
import { useWindupString } from "windups";

import "../styles/Products.scss";

export default function Products() {
  const [text] = useWindupString("Product 기능이 추가될 예정입니다");
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
