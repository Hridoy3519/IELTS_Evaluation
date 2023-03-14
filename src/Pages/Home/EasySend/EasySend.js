import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import campusImage from '../../Image/campus_illo.svg';
const EasySend = () => {
    return (
        <Container className='mt-5 w-75'>
            <Row>
                <Col md={6} className="d-flex align-items-center  text-start">
                    <div>
                        <h2 className="fw-bold mb-4">Send results to every school on your list—at no extra cost</h2>
                        <p className="mb-4">Thousands of universities around the world accept the Duolingo English Test. You can send your score reports to as many of them as you want, for free.</p>
                        <Button className='btn-theme'>VIEW INSTITUTIONS</Button>
                    </div>
                </Col>
                <Col md={6}>
                    <img src={campusImage} alt="My Image" />
                </Col>
            </Row>
        </Container>

    );
};

export default EasySend;