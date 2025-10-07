import React from 'react'
import Navbar from '../../components/Header/Navbar'
import { Outlet } from 'react-router'
import Footer from '../../components/Footer/Footer'

const Roots = () => {
  return (
    <div className='max-w-7xl mx-auto flex flex-col min-h-screen'>
      <Navbar></Navbar>
      <div className='flex-1'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Roots
