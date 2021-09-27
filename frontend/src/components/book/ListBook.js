import React, {useState, useContext} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button'
import {CardBook} from './CardBook'
import {BookForm} from "./BookForm";
import {BookContext} from "./BookContext";
import "./book.scss"

const ListBook = () => {
    const {error, books, isLoaded} = useContext(BookContext)
    const [showForm, setShowForm] = useState(true);
    const toggleShowForm = () => {
        setShowForm(!showForm);
    };

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <Spinner animation="border"/>
    } else {
        return (
            <React.Fragment>
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
            </React.Fragment>

        );
    }
};
export {ListBook} ;




