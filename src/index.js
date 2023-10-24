import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import IDE from "./screens/IDE";
import Dashboard from "./components/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
export { default as Blog } from "./containers/blog/Blog";
export { default as Features } from "./containers/features/Features";
export { default as Footer } from "./containers/footer/Footer";
export { default as Header } from "./containers/header/Header";
export { default as Possibility } from "./containers/possibility/Possibility";
export { default as CodeHive } from "./containers/CodeHive/CodeHive";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <App />,
  },
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/ide",
    element: <IDE />,
  },
]);

ReactDOM.render(
  <RouterProvider router={router} />,
  document.getElementById("root")
);
