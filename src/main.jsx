import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// import from react-router (installation)
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

// createBrowserRouter also import from react-router (installation)
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* coming from react-router (installation) */}
    <RouterProvider router={router} />
  </StrictMode>,
)
