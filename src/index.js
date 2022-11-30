import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import Home from "./components/Home";
import Community from "./components/Community";
import Products from "./components/Products";
import Overview from "./components/Overview";
import Experience from "./components/Experience";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Home />
      </div>
    ),
  },
  {
    path: "/Products",
    element: (
      <div>
        <Products />
      </div>
    ),
  },
  {
    path: "/Community",
    element: (
      <div>
        <Community />
      </div>
    ),
  },
  {
    path: "/Overview",
    element: (
      <div>
        <Overview />
      </div>
    ),
  },
  {
    path: "/Experience",
    element: (
      <div>
        <Experience />
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
