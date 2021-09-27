import {useState, useEffect, Fragment, useContext} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button'
import {CardBook} from './CardBook'
import {BookForm} from "./BookForm";
import {BookContext} from "./BookContext";
import "./book.scss"

const ListBook = () => {
    const value = useContext(BookContext)
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [books, setBooks] = useState([]);
    const [showForm, setShowForm] = useState(true);
    const toggleShowForm = () => {
        setShowForm(!showForm);
    };
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
            <Fragment>
                <Col>
                    <br/>
                    <Button onClick={toggleShowForm}> Add book</Button>
                    <div className={showForm ? 'd-none' : null}>
                        <BookForm bookData={{}}></BookForm>
                    </div>
                </Col>
                <br/>
                <Row xs={2} md={4} className="g-4">
                    {books.map(book =>
                        <Col key={book.id}>
                            <CardBook book={book}/>
                        </Col>
                    )}
                </Row>
            </Fragment>

        );
    }
};
export {ListBook} ;




