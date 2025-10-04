import React from 'react'
import Navbar from '../../components/Header/Navbar'
import { Outlet } from 'react-router'
import Footer from '../../components/Footer/Footer'

const Roots = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Roots
