import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Homepage from "../src/Components/Homepage/Homepage.jsx"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Components/Login/Login.jsx'
import Register from './Components/Register/Register.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>
      }
    ]
  },
  {
    path: "/login",
    element: <Login></Login>
  },{
    path: "/register",
    element: <Register></Register>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
