import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './pages/Home';
import Booking from './pages/Booking';
import Destination from './pages/Destination';
import About from "./pages/About"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Errorpage from "../src/error-page"
import Test from "./pages/test"

const router = createBrowserRouter([
  {
    path: "/",
    element: < Home/>,
    errorElement: <Errorpage/>
  },
  {
    path: "/Booking",
    element: < Booking/>,
    errorElement: <Errorpage/>
  },
  {
    path: "/Destination",
    element: < Destination/>,
    errorElement: <Errorpage/>
  },
  {
    path: "/About",
    element: < About/>,
    errorElement: <Errorpage/>
  },
  {
    path: "/Login",
    element: < Login/>,
    errorElement: <Errorpage/>
  },
  {
    path: "/Signup",
    element: < Signup/>,
    errorElement: <Errorpage/>
  },

  {
    path: "/test",
    element: < Test/>,
    errorElement: <Errorpage/>
  },

  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
