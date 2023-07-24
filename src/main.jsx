import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayOut from "./layOut/LayOut";
import ErrorPage from "./pages/errorElement/ErrorPage";
import Home from "./pages/home/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import College from './pages/college/College';
import Admission from './pages/admission/Admission';
import MyCollege from './pages/myCollege/MyCollege';
import AuthProviders from "./providers/AuthProviders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/colleges",
        element: <College></College>,
      },
      {
        path: "/admission",
        element: <Admission></Admission>,
      },
      {
        path: "/myCollege",
        element: <MyCollege></MyCollege>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-7xl mx-auto">
      <AuthProviders>
      <RouterProvider router={router} />
      </AuthProviders>
    </div>
  </React.StrictMode>
);
