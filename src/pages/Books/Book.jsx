import React from 'react'
import './Book.css'
import BooksData from '../BooksData/BooksData'

const Book = ({data}) => {
  return (
    <div>
      <h2 className='text-2xl md:text-3xl text-center my-3 font-bold'>Books</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10 justify-items-center">
        {
            data.map((item) => (
                <BooksData 
                key={item.bookId}
                bookName={item.bookName}
                author={item.author}
                image={item.image}
                rating={item.rating}
                category={item.category}
                tags={item.tags}
                />
            ))
        }
      </div>
    </div>
  )
}

export default Book
