import React from 'react'
import { Link } from 'react-router'


const Navbar = () => {

  const navLinks = <>
    <Link to='/'><li className='m-2'>Home</li></Link>
    <li className='m-2'>Listed Book</li>
    <li className='m-2'>Page to read</li>
  </>

  return (
    <div>
      <div className="navbar bg-base-100 px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                {
                  navLinks
                }
            </ul>
          </div>
          <Link to='/' className="text-xl font-bold">Book Vibe</Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {
              navLinks
            }
          </ul>
        </div>
        
        <div className="navbar-end gap-3">
          <button className="btn btn-success text-white">Sign in</button>
          <button className="btn btn-info text-white">Sign up</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
