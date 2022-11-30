import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import Home from "./components/Home";
import Products from "./components/Products";
import Community from "./components/Community";
import NaviBar from "./partComponent/NaviBar";
import Overview from "./components/Overview";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <NaviBar />
        <Home />
      </div>
    ),
  },
  {
    path: "/Products",
    element: (
      <div>
        <NaviBar />
      </div>
    ),
  },
  {
    path: "/Community",
    element: (
      <div>
        <NaviBar />
        <Community />
      </div>
    ),
  },
  {
    path: "/Overview",
    element: (
      <div>
        <NaviBar />
        <Overview />
      </div>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
