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
import AuthProvider from './Components/Authentication/AuthProvider.jsx'
import AddBlogs from './Components/Add Blogs/AddBlogs.jsx'
import PrivateRoute from './Components/Authentication/PrivateRoute.jsx'
import AllBlogs from './Components/AllBlogs/AllBlogs.jsx'
import BlogDetails from './Components/BlogDetails/BlogDetails.jsx'
import Wishlist from './Components/Wishlist/Wishlist.jsx'
import UpdateBlogs from './Components/UpdateBlogs/UpdateBlogs.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>
      },
      {
        path: "/addBlogs",
        element: <PrivateRoute><AddBlogs></AddBlogs></PrivateRoute>
      },
      {
        path: "/allBlogs",
        element: <AllBlogs></AllBlogs>
      },
      {
        path: "/blogDetails/:id",
        element: <BlogDetails></BlogDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/blogDetails/${params.id}`)
      },
      {
        path: "allBlogs/blogDetails/:id",
        element: <BlogDetails></BlogDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/blogDetails/${params.id}`)
      },
      {
        path: "/wishlist",
        element: <Wishlist></Wishlist>
      },
      {
        path: "wishlist/blogDetails/:id",
        element: <BlogDetails></BlogDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/blogDetails/${params.id}`)
      },
      {
        path: "/updateBlog/:id",
        element: <UpdateBlogs></UpdateBlogs>,
        loader: ({ params }) => fetch(`http://localhost:5000/blogDetails/${params.id}`)
      },
    ]
  },
  {
    path: "/login",
    element: <Login></Login>
  }, {
    path: "/register",
    element: <Register></Register>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  </AuthProvider>
)
