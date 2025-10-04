import React from 'react'
import { assets } from '../../assets/assets'

const EroorPage = () => {
  return (
    <div className='flex gap-6 justify-center items-center h-[100vh]'>
      <img src={assets.monster} alt="monster" className='w-[300px]' />
      
      <div>
        <h1 className='text-4xl font-bold'>Sorry! Page not <br /> found</h1>
      </div>
    </div>
  )
}

export default EroorPage
