import React from "react";
import {useBooks} from "./useBook"

const BookContext = React.createContext()

function BookProvider(props) {
    const {books, setBooks, error, isLoaded} = useBooks()
    return (
        <BookContext.Provider value={{
            books,
            setBooks,
            error,
            isLoaded
        }}>
            {props.children}
        </BookContext.Provider>
    )
}

export {BookContext, BookProvider}
