import React from 'react'
import './Banner.css'
import { assets } from '../../assets/assets'

const Banner = () => {
  return (
    <div className='banner flex justify-between flex-col md:flex-row px-15 items-center bg-[#F2F2F2] py-4 rounded-2xl my-6'>
      <div className='flex flex-col gap-2 md:gap-5 items-center md:items-start'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold pb-6 text-center md:text-start'>Books to freshen up <br /> your bookshelf</h1>
        <button className='bg-success text-white px-5 py-4 rounded'>View The List</button>
      </div>

      <div className='order-first md:order-last mt-6 md:mt-0'>
        <img src={assets.bannerbook} className='w-[150px] md:w-[250px] lg:w-[400px] max-w-full h-auto' alt="Book" />
      </div>
    </div>
  )
}

export default Banner
