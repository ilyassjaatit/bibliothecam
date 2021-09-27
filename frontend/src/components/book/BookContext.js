import React from "react";


const BookContext = React.createContext()

function BookProvider(props) {
    return (
        <BookContext.Provider value={{

        }}>
            {props.children}
        </BookContext.Provider>
    )
}

export {BookContext, BookProvider}
