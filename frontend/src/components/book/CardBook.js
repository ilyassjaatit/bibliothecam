import React from 'react';
import {Link} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CardBook = ({book}) => {
    return (
        <React.Fragment>
            <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src={book.img}/>
                <Card.Body>
                    <Card.Title>{book.name}</Card.Title>
                    <Card.Text>
                      {book.shortDescription}
                    </Card.Text>
                    <Link to={`books/${book.id}`}>Show details</Link>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
};
export {CardBook} ;