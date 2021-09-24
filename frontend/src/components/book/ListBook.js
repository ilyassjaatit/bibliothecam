import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {CardBook} from './CardBook'

const ListBook = () => {
    return (
        <Row xs={2} md={4} className="g-4">
            {Array.from({length: 12}).map((_, idx) => (
                <Col>
                    <CardBook></CardBook>
                </Col>
            ))}
        </Row>
    );
};
export {ListBook} ;