import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CardBook = () => {
    return (
        <React.Fragment>
            <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src="https://via.placeholder.com/286x180"/>
                <Card.Body>
                    <Card.Title>Book title</Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt up.
                    </Card.Text>
                    <Button variant="primary">Edit</Button>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
};
export {CardBook} ;