import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Pages/home/Home';
import Products from './Pages/Products/Products';
import Dashboard from './Pages/dashbord/Dashboard';
import Mainlayouts from './Layouts/Mainlayouts';
import Product from './Pages/Products/Product';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayouts></Mainlayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/products",
        element: <Products></Products>,
        loader: () => fetch(`https://dummyjson.com/products`)
      },
      {
        path: "/product/:id",
        element: <Product></Product>,
        loader:(params) => fetch(`https://dummyjson.com/products/${params.params.id}`)


      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
