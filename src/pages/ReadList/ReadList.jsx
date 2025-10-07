import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getBookStore, getWishListStore } from "../../Utilities/addToDB";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMan4 } from "react-icons/md";
import { MdOutlineContactPage } from "react-icons/md";
import "./ReadList.css";
import { MdKeyboardArrowDown } from "react-icons/md";

const ReadList = () => {
  // useLoaderData use for get the data from loader function which have route.jsx file
  const data = useLoaderData();

  /* ------ readlist state ------ */
  const [readList, setReadList] = useState([]);

  /* ------ wishlist state ------ */
  const [wishList, setWishList] = useState([]);

  /* ------ shory by state and functionalities start ------ */
  const [short, setShort] = useState("");

  const handleShorts = (type) => {
    setShort(type);

    if (type === "Npages") {
      const shortData = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(shortData);
    } else if (type === "rating") {
      const shortData = [...readList].sort((a, b) => b.rating - a.rating);
      setReadList(shortData);
    } else if (type === "year") {
      const shortData = [...readList].sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
      setReadList(shortData);
    }
  };
  /* ------ shory by state and functionalities end ------ */

  /* ------ useEffect for get the readlist data from local storage ------ */
  useEffect(() => {
    const bookDataStored = getBookStore();

    const convertedData = bookDataStored.map((id) => {
      return parseInt(id);
    });

    const myReadList = data.filter((book) =>
      convertedData.includes(book.bookId)
    );
    setReadList(myReadList);
  }, []);

  /* ------ useEffect for wishList ------ */
  useEffect(() => {
    const wishListDataStored = getWishListStore();

    const convertedWishListData = wishListDataStored.map((id) => {
      return parseInt(id);
    });

    const myWishList = data.filter((item) => {
      return convertedWishListData.includes(item.bookId);
    });
    setWishList(myWishList);
  }, []);

  return (
    <div className="mx-10 my-10 px-4 max-w-6xl">
      <div className="mt-3 p-5 w-full bg-gray-100 rounded-md text-center mb-2">
        <h1 className="font-bold text-3xl">Books</h1>
      </div>

      {/* Short by dropdown */}
      <div className="sort-by flex justify-center">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-[#23BE0A] text-white"
          >
            Short By <MdKeyboardArrowDown />
          </div>

          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box z-1 w-52 p-2 shadow-sm bg-gray-200"
          >
            <li onClick={() => handleShorts("rating")}>
              <a>Rating</a>
            </li>

            <li onClick={() => handleShorts("Npages")}>
              <a>Number of pages</a>
            </li>

            <li onClick={() => handleShorts("year")}>
              <a>Publisher year</a>
            </li>
          </ul>
        </div>
      </div>

      <Tabs className="mt-15">
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <div>
            {readList.map((item) => (
              <div className="card card-side bg-base-100 shadow-sm border border-gray-200 mb-5 p-3 flex flex-col md:flex-row">
                {/* Image Section */}
                <figure className="py-5 bg-[#e5e5e5] rounded-md flex justify-center md:w-1/6 w-full rounded-l-2xl rounded-r-2xl">
                  <img
                    src={item.image}
                    alt="books"
                    className="w-30 h-full max-h-[420px] object-cover rounded"
                  />
                </figure>

                {/* Content Section */}
                <div className="ms-0 md:ms-5 mt-3 md:mt-0 flex-1 not-first card-bodies">
                  <h2 className="card-title mb-2">{item.bookName}</h2>
                  <p className="mb-2">By: {item.author}</p>

                  <div className="flex flex-col md:flex-row md:items-center gap-3 mt-3">
                    <div className="flex flex-wrap items-center align-baseline">
                      <p className="me-2 font-semibold">Tag:</p>
                      {Array.isArray(item.tags) &&
                        item.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded mr-2 mb-2"
                          >
                            {tag}
                          </span>
                        ))}
                    </div>

                    <div className="flex items-center text-gray-600 text-[0.8rem]">
                      <CiLocationOn className="mr-2 text-lg" />
                      <p>Year of Publishing: {item.yearOfPublishing}</p>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-3 flex-wrap">
                    <div className="flex items-center align-baseline">
                      <MdOutlineMan4 className="mr-1" />
                      <p className="text-[0.8rem]">
                        Publisher: {item.publisher}
                      </p>
                    </div>

                    <div className="flex items-center align-baseline">
                      <MdOutlineContactPage className="mr-1" />
                      <p className="text-[0.8rem]">Page: {item.totalPages}</p>
                    </div>
                  </div>

                  <div className="divider w-full"></div>

                  <div className="flex gap-3 flex-row flex-wrap">
                    <div className="badge bg-[#cae0fd] text-[#328EFF] px-6 py-5 rounded-full text-[0.7rem] font-semibold">
                      Category: {item.category}
                    </div>

                    <div className="badge bg-[#fce7c6] text-[#FFAC33] px-6 py-5 rounded-full text-[0.7rem] font-semibold">
                      Rating: {item.rating}
                    </div>

                    <button className="bg-[#23BE0A] px-8 py-3 rounded-full text-[0.7rem] font-semibold text-white cursor-pointer">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 my-13 justify-items-center">
            {wishList.map((item) => {
              return (
                <div className="card bg-base-100 w-96 shadow-sm border border-gray-400 p-3 max-w-[250px] md:max-w-[300px]">
                  <figure>
                    <img
                      src={item.image}
                      alt="books"
                      className="h-[200px] object-cover"
                    />
                  </figure>
                  <div className="card-bodies mt-3">
                    <h2 className="card-title pb-3 text-[0.9rem]">
                      {item.bookName}
                    </h2>
                    <p>
                      <span className="font-bold">Total Pages:</span>{" "}
                      {item.totalPages}
                    </p>

                    <p>
                      <span className="font-bold">Publisher:</span>{" "}
                      {item.publisher}
                    </p>

                    <p>
                      <span className="font-bold">Year of Publishing:</span>{" "}
                      {item.yearOfPublishing}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
