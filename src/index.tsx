import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Charts } from "./pages/charts";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/charts",
    element: <Charts/>,
  },
]);
ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
