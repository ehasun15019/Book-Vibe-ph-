import React from 'react'

// import from react-router (installation)
import { createBrowserRouter } from "react-router";
import Roots from '../pages/Root/Roots';
import EroorPage from '../pages/Erropage/EroorPage';
import Home from '../pages/Home/Home';

// createBrowserRouter also import from react-router (installation)
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    errorElement: <EroorPage></EroorPage>,
    children: [
        {
            index: true,  
            loader: () => {
             return fetch('booksData.json')
            },
            path: "/",
            Component: Home
        }
    ]
  },
]);