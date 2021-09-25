import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


const DetailBook = () => {
    let { bookId } = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [book, setBook] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8000/api/libraries/books/"+bookId+"/")
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
    }, [])
    return (
        <React.Fragment>
            <Row>
                <Col md={4}>
                <Image src="https://via.placeholder.com/286x180"/>
                </Col>
                <Col md={8}>
                    <div className="box-title">
                        <h1>{book.name}</h1>
                        <span className="author">This is author </span>
                        <div >
                            book.description
                        </div>
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    );
};
export {DetailBook} ;
