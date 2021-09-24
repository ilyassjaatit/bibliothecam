import React from 'react';
import { useParams } from "react-router-dom";


const DetailBook = () => {
    let { bookId } = useParams();
    return (

        <>
        <p>book id {bookId}</p>
        </>
    );
};
export {DetailBook} ;