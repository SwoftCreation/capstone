import React from "react";
import "./NaviBar.scss";
import { useNavigate } from "react-router-dom";
export default function NaviBar() {
  const navigation = useNavigate();
  return (
    <div>
      <nav className="Navigation-bar">
        <span
          className="BrandName"
          onClick={() => {
            navigation("/");
          }}
        >
          Player ONE
        </span>
        <span
          className="Community"
          onClick={() => {
            navigation("/community");
          }}
        >
          Community
        </span>
        <span
          className="Products"
          onClick={() => {
            navigation("/products");
          }}
        >
          Products
        </span>
        <span
          className="Overview"
          onClick={() => {
            navigation("/overview");
          }}
        >
          Overview
        </span>
        <span className="Sign-in">Sign in</span>
      </nav>
    </div>
  );
}
