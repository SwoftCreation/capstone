import React from "react";
import { useNavigate } from "react-router-dom";
import "./NaviBar.scss";

export default function NaviBar() {
  const goto = useNavigate();
  return (
    <div className="nav-container">
      <div className="nav-logo">
        <div>
          <p
            onClick={() => {
              goto("/");
            }}
          >
            Player ONE
          </p>
        </div>
      </div>
      <div className="menu-frame">
        <div>
          <p
            onClick={() => {
              goto("/Products");
            }}
          >
            Products
          </p>
        </div>
        <div>
          <p
            onClick={() => {
              goto("/Community");
            }}
          >
            Community
          </p>
        </div>
        <div>
          <p
            onClick={() => {
              goto("/Overview");
            }}
          >
            Overview
          </p>
        </div>
      </div>
      <div className="sign-in-frame">
        <p>sign in</p>
      </div>
    </div>
  );
}
