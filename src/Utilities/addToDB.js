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

export {addToDB};