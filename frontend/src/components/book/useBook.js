import {useEffect, useState} from "react";

function useBooks() {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        const base_url_books = process.env.REACT_APP_API_ENDPOIN + "libraries/books/"
        fetch(base_url_books)
            .then(res => res.json())
            .then(
                (result) => {
                    setTimeout(function () {
                        setIsLoaded(true);
                        setBooks(result);
                    }, 500);

                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    return {
        books,
        setBooks,
        error,
        isLoaded
    }
}

export {useBooks}
