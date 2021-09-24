import React from 'react';
import { useParams } from "react-router-dom";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


const DetailBook = () => {
    let { bookId } = useParams();
    return (
        <React.Fragment>
            <Row>
                <Col md={4}>
                <Image src="https://via.placeholder.com/286x180"/>
                </Col>
                <Col md={8}>
                    <div className="box-title">
                        <h1>Lorem Ipsum is simply dummy text of the printing and typesetting</h1>
                        <span className="author"></span>
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    );
};
export {DetailBook} ;