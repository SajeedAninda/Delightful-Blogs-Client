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
import FeaturedBlogs from './Components/FeaturedBlogs.jsx/FeaturedBlogs.jsx'
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx'
import MyBlogs from './Components/MyBlogs/MyBlogs.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: "/login",
        element: <Login></Login>
      }, {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/blogDetails/:id",
        element: <PrivateRoute><BlogDetails></BlogDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://delightful-blogs-server.vercel.app/blogDetails/${params.id}`, {
          credentials: 'include',
        })
      },
      {
        path: "allBlogs/blogDetails/:id",
        element: <PrivateRoute><BlogDetails></BlogDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://delightful-blogs-server.vercel.app/blogDetails/${params.id}`,{
          credentials: 'include',
        })
      },
      {
        path: "/wishlist",
        element: <PrivateRoute><Wishlist></Wishlist></PrivateRoute>
      },
      {
        path: "wishlist/blogDetails/:id",
        element: <PrivateRoute><BlogDetails></BlogDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://delightful-blogs-server.vercel.app/blogDetails/${params.id}`,{
          credentials: 'include',
        })
      },
      {
        path: "/updateBlog/:id",
        element: <PrivateRoute><UpdateBlogs></UpdateBlogs></PrivateRoute>,
        loader: ({ params }) => fetch(`https://delightful-blogs-server.vercel.app/updateBlog/${params.id}`,{
          credentials: 'include',
        })
      },
      {
        path: "/featuredBlogs",
        element: <FeaturedBlogs></FeaturedBlogs>
      },
      {
        path: "/myBlogs",
        element: <PrivateRoute><MyBlogs></MyBlogs></PrivateRoute>
      },
      {
        path: "myBlogs/blogDetails/:id",
        element: <PrivateRoute><BlogDetails></BlogDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://delightful-blogs-server.vercel.app/blogDetails/${params.id}`,{
          credentials: 'include',
        })
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AuthProvider>
)
