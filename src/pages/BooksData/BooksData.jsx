import React from 'react'
import { IoStarSharp } from 'react-icons/io5'

const BooksData = ({bookName, author, image, rating, category, tags}) => {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-lg border border-gray-300 p-3">
        <figure className='bg-[#F3F3F3] rounded-b-2xl rounded-t-2xl py-8'>
            <img
                src={image}
                alt="books" 
                className="h-[120px]"
            />
        </figure>

        <div className="card-bodies">
            <div className="flex gap-2 tag-section">
                {Array.isArray(tags) && tags.map((tag, idx) => (
                  <div key={idx} className="badge badge-soft badge-success mt-3">{tag}</div>
                ))}
            </div>
            <h2 className="card-title mt-3 mb-2 text-[1.2rem]">{bookName}</h2>
            <p>By: {author}</p>

            <p className='text-gray-300 pt-6'>-------------------------------------------------------</p>

            <div className="card-actions flex justify-between items-center pt-6">
                <p>{category}</p>

                <div className="flex">
                  <IoStarSharp className='text-yellow-500 mr-1 mt-1'/>
                  <p>{rating}</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BooksData
