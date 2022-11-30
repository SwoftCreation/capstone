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
            id="logo-p"
            onClick={() => {
              goto("/");
            }}
          >
            Player ONE
          </p>
        </div>
        <div className="menu-icon">
          <span class="material-symbols-outlined">menu</span>
        </div>
      </div>
      <div className="menu-frame">
        <div>
          <p
            className="menu-p"
            onClick={() => {
              goto("/Products");
            }}
          >
            Products
          </p>
        </div>
        <div>
          <p
            className="menu-p"
            onClick={() => {
              goto("/Community");
            }}
          >
            Community
          </p>
        </div>
        <div>
          <p
            className="menu-p"
            onClick={() => {
              goto("/Overview");
            }}
          >
            Overview
          </p>
        </div>
      </div>
      <div className="sign-in-frame">
        <p id="sign-p">sign in</p>
      </div>
    </div>
  );
}
