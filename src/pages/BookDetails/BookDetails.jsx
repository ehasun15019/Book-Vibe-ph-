import React from 'react'
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
  // useParams use for get the daynamic id from url
  const {id} = useParams();
  const bookId = parseInt(id);

  // useLoaderData use for get the data from loader function which have route.jsx file
  const data = useLoaderData();
  
  // every book er details show korar jonno amra ekhane find method use korbo
  const SingleBook = data.find((item) => {
    return (item.bookId) === bookId;
  })

  const {image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating} = SingleBook
  

  return (
      <div className="my-10 px-4 max-w-6xl mx-auto">
        <section className="flex flex-col lg:flex-row gap-8 my-10">
          {/* Book Image */}
          <div className="flex-shrink-0 p-2 flex items-center justify-center bg-gray-100 rounded-md flex-1">
            <img
              src={image}
              alt={bookName}
              className="max-w-[400px] h-[300px] object-contain drop-shadow-lg rounded"
            />
          </div>

          {/* Book Details */}
          <div className="w-full space-y-4 flex-2">
            <h2 className="text-2xl font-bold">{bookName}</h2>
            <p className="text-gray-600">
              By: <span className="font-medium">{author}</span>
            </p>

            <hr />

            <p className="text-sm text-blue-600 font-semibold">{category}</p>

            <hr />

            <div>
              <p className="mb-2">
                <span className="font-bold">Review:</span> {review}
              </p>

              <div className="flex flex-wrap gap-2 items-center">
                <span className="font-semibold">Tags:</span>
                {Array.isArray(tags) &&
                  tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded"
                    >
                      #{tag}
                    </span>
                  ))}
              </div>
            </div>

            <hr />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <p>
                <span className="font-bold">Total Pages:</span> {totalPages}
              </p>
              <p>
                <span className="font-bold">Publisher:</span> {publisher}
              </p>
              <p>
                <span className="font-bold">Year of Publishing:</span> {yearOfPublishing}
              </p>
              <p>
                <span className="font-bold">Rating:</span> {rating}
              </p>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <button className="btn btn-outline w-full sm:w-auto">Read</button>
              <button className="btn btn-primary w-full sm:w-auto">Add to Wishlist</button>
            </div>
          </div>
        </section>

      </div>
  )
}

export default BookDetails
