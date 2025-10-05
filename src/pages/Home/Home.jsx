import React, { use } from 'react'
import Banner from '../../components/Banner/Banner'
import Book from '../Books/Book'
import { useLoaderData } from 'react-router'

const Home = () => {
  // so here we use useLoaderData function for get that data from router.jsx file
  const data = useLoaderData();
  
  return (
    <div>
      <Banner />
      <Book data={data} />
    </div>
  )
}

export default Home
