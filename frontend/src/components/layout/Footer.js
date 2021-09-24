import React from 'react';
import Container from "react-bootstrap/Container";

const Footer = () => {
    return (
        <React.Fragment>
            <Container fluid>
                <footer className="sticky-footer bg-white">
                    <div className="container my-auto">
                        <div className="copyright text-center my-auto">
                            footer <br/>
                            <span>{process.env.REACT_APP_NAME} {new Date().getFullYear()}</span>
                        </div>
                    </div>
                </footer>
            </Container>
        </React.Fragment>
    )
}

export {Footer};