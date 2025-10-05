## first setup file
# install react-router (npm i react-router)

## 1. in main.jsx there should have some working with react-router (installation)

## 2. Routes folder এর ভিতরে installation progress টা main.jsx teke নিয়ে আস

        Example: 

                Routes.jsx 
            ------------------
                import React from 'react'

                // import from react-router (installation)
                import { createBrowserRouter } from "react-router";

                // createBrowserRouter also import from react-router (installation)
                export const router = createBrowserRouter([
                {
                    path: "/",
                    element: <div>Hello World</div>,
                },
                ])

                main.jsx
            ------------------
                import { router } from './Routes/routes.jsx'
                import { RouterProvider } from "react-router/dom";

                createRoot(document.getElementById('root')).render(
                <StrictMode>
                    {/* coming from Routes folder */}
                    <RouterProvider router={router} />
                </StrictMode>,
                )

