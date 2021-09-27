import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Carousel from 'react-bootstrap/Carousel'
import Dropdown from 'react-bootstrap/Dropdown'
import Spinner from "react-bootstrap/Spinner";


const DetailBook = () => {
    let {bookId} = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [book, setBook] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8000/api/libraries/books/" + bookId + "/")
            .then(res => res.json())
            .then(
                (result) => {
                    setTimeout(function () {
                        setIsLoaded(true);
                        setBook(result);
                    }, 500);

                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [bookId])
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <Spinner animation="border"/>
    } else {
        return (
            <React.Fragment>
                <Row>
                    <Col md={4}>
                        <Carousel interval={null}>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={book.front_cover}
                                    alt={book.title}
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={book.back_cover}
                                    alt={book.title}
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col md={8}>
                        <div className="box-title">
                            <h1>{book.title}</h1>
                            <hr/>
                            <div>
                                <Badge pill bg="secondary">
                                    Pages:{book.pages}
                                </Badge>{' '}
                                <Badge pill bg="secondary">
                                    cat: {book.category_name}
                                </Badge>{' '}
                            </div>
                            <div>
                                {book.description}
                            </div>

                            {book.authors && book.authors.map(author => <Badge>{author.name}</Badge>)}
                        </div>
                        <hr/>
                        <div>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Action
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Delete</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                    </Col>
                </Row>
            </React.Fragment>
        );
    }
};
export {DetailBook} ;
