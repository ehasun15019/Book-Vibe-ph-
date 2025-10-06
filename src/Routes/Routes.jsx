import React from 'react'

// import from react-router (installation)
import { createBrowserRouter } from "react-router";
import Roots from '../pages/Root/Roots';
import EroorPage from '../pages/Erropage/EroorPage';
import Home from '../pages/Home/Home';
import BookDetails from '../pages/BookDetails/BookDetails';
import ReadList from '../pages/ReadList/ReadList';

// createBrowserRouter also import from react-router (installation)
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    errorElement: <EroorPage></EroorPage>,
    children: [
        {
            index: true,  
            // in router.jsx file we use loader function for fetch data from booksData.json file
            loader: () => {
             return fetch('/booksData.json')
            },
            path: '/',
            Component: Home
        },

        // daynamic route create for evey books
        {
          /*---- id নামে জেই Params নিছি সেটা BooksDetails useParams dore nia jete hobe ---- */
          path: "/bookDetails/:id",
          Component: BookDetails,
          loader: () => {
            return fetch('/booksData.json');
          }
        },

        // read list page route
        {
          path: "readList",
          Component: ReadList,
          loader: () => {
            return fetch('/booksData.json')
          },
        }
    ]
  },
]);