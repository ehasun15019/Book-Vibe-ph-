/* mark as read functionality start */
const getBookStore = () => {
    const storeBookStr = localStorage.getItem("readList");

    if(storeBookStr){
        const storeBookData = JSON.parse(storeBookStr);
        return storeBookData;
    } else {
        return [];
    }
}

const addToDB = (id) => {
    // call the getBookStore function
    const storeBooks = getBookStore();

    if(storeBooks.includes(id)){
        alert("You have already added this book");
    }else{
        storeBooks.push(id);
        const getData = JSON.stringify(storeBooks);
        localStorage.setItem("readList", getData)
        console.log(storeBooks);
    }
}
/* mark as read functionality end */


/* Add to wishList functionality start */
const getWishListStore = () => {
    const whishListStr = localStorage.getItem("wishList");

    if(whishListStr) {
        const wishListData = JSON.parse(whishListStr);
        return wishListData;
    }else {
        return [];
    }
}

const addToWishListDB = (id) => {
    const wishListStored = getWishListStore();

    if(wishListStored.includes(id)) {
        alert("You have already added this book in your wishlist");
    } else {
        wishListStored.push(id);
        const getWishListdata = JSON.stringify(wishListStored);
    localStorage.setItem("wishList", getWishListdata);
        console.log(wishListStored);       
    }
}
/* Add to wishList functionality end */

export {addToDB, getBookStore, addToWishListDB, getWishListStore};