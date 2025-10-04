import React from 'react'

// import from react-router (installation)
import { createBrowserRouter } from "react-router";

// createBrowserRouter also import from react-router (installation)
export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World Ehasun</div>,
  },
]);