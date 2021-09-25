import {useState, useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import {CardBook} from './CardBook'

const ListBook = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8000/api/libraries/books/")
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

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <Spinner animation="border"/>
    } else {
        return (
            <Row xs={2} md={4} className="g-4">
                {books.map(book =>
                    <Col key={book.id}>
                        <CardBook book={book}/>
                    </Col>
                )}

            </Row>
        );
    }
};
export {ListBook} ;




