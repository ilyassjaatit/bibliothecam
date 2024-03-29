import React from 'react';
import {Link} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import "./book.scss"

const CardBook = ({book}) => {
    return (
        <React.Fragment>
            <Card className="book-card" style={{width: '18rem'}}>
                <Card.Header>
                    <Card.Img className="book-card-front-cover" src={book.front_cover}/>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                      {book.short_description}
                    </Card.Text>
                    <Link to={`books/${book.id}`}>Show details</Link>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
};
export {CardBook} ;
