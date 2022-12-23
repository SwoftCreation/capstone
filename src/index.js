import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import Home from "./components/Home";
import Community from "./components/Community";
import Products from "./components/Products";
import Overview from "./components/Overview";
import Experience from "./components/Experience";

import store from "./redux/store";
import { Provider } from "react-redux";
//TODO: 여기서 react.lazy / suspense 를 사용해서 로딩화면 및 지연로딩을 구현해야 한다.
// LazyCommunity = lazy(() => {
//   import "./components/Community";
// });

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
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
