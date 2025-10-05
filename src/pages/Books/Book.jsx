import React from 'react'
import './Book.css'
import BooksData from '../BooksData/BooksData'
import { Link } from 'react-router'

const Book = ({data, bookId}) => {
  return (
    <div>
      <h2 className='text-2xl md:text-3xl text-center my-3 font-bold'>Books</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10 justify-items-center">
        {
            data.map(item => (
            <Link to={`/bookDetails/${item.bookId}`}>
              <BooksData 
                key={item.bookId}
                bookName={item.bookName}
                author={item.author}
                image={item.image}
                rating={item.rating}
                category={item.category}
                tags={item.tags}
              />
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Book
