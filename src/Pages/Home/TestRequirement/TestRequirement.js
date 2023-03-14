import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaPassport, FaLaptop, FaWifi, FaClock, FaLightbulb, FaWindows, FaCamera, FaMicrophone, FaVolumeUp } from 'react-icons/fa';
import './TestRequirement.css'
const TestRequirement = () => {
    return (
        <div className="bg-light py-5">
            <Container className='w-75 py-5'>
                <Row>
                    <h2 className='fw-bold fs-1 text-secondary text-start'>Test Requirements</h2>
                    <Col md={6} className="text-start">
                        <h4 className='fw-bold fs-5 my-5 text-secondary'>You Must Have:</h4>
                        <div className="d-flex mb-3">
                            <FaPassport color="#FA811B" size={32} className="me-3" />
                            <p className="font-weight-bold mb-4 fs-5">Your passport, driver's license or government ID</p>
                        </div>
                        <div className="d-flex mb-3">
                            <FaLightbulb color="#FA811B" size={32} className="me-3" />
                            <p className="font-weight-bold mb-4 fs-5">A quiet, well-lit room</p>
                        </div>
                        <div className="d-flex mb-3">
                            <FaClock color="#FA811B" size={32} className="me-3" />
                            <p className="font-weight-bold mb-4 fs-5">60 minutes of free time</p>
                        </div>
                        <div className="d-flex mb-3">
                            <FaWifi color="#FA811B" size={32} className="me-3" />
                            <p className="font-weight-bold mb-4 fs-5">A reliable internet connection</p>
                        </div>
                        <div className="d-flex mb-3">
                            <FaLaptop color="#FA811B" size={32} className="me-3" />
                            <p className="font-weight-bold mb-4 fs-5">A computer</p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="text-start mt-5">
                            <h4 className='fw-bold fs-5 my-5 text-secondary'>Your computer must have:</h4>
                            <div className="d-flex mb-3">
                                <FaWindows color="#FA811B" size={32} className="me-2" />
                                <p className="font-weight-bold mb-4 fs-5">Windows or macOS</p>
                            </div>
                            <div className="d-flex mb-3">
                                <FaCamera color="#FA811B" size={32} className="me-2" />
                                <p className="font-weight-bold mb-4 fs-5">A front-facing camera</p>
                            </div>
                            <div className="d-flex mb-3">
                                <FaMicrophone color="#FA811B" size={32} className="me-2" />
                                <p className="font-weight-bold mb-4 fs-5">A microphone</p>
                            </div>
                            <div className="d-flex mb-3">
                                <FaVolumeUp color="#FA811B" size={32} className="me-2" />
                                <p className="font-weight-bold mb-4 fs-5">Speakers</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TestRequirement;