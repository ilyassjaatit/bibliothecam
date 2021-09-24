import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Footer} from './Footer'
import {Header} from './Header'

const Layout = ({children}) => {
    return (
        <React.Fragment>
            <Header/>
            <Container>
                <Row>
                    <Col>
                        <main>
                            {children}
                        </main>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </React.Fragment>
    )
}

export {Layout};