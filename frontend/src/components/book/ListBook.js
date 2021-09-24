import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {CardBook} from './CardBook'

const ListBook = ({books, setBooks}) => {

    return (
        <Row xs={2} md={4} className="g-4">
            {books.map(book =>
                <Col key={book.id}>
                    <CardBook  book={book} />
                </Col>
            )}
        </Row>
    );
};
export {ListBook} ;