import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './HomeBanner.css'
import { FaLaptop, FaClock, FaSchool } from 'react-icons/fa';
import bannerImage from '../../Image/universities.svg';
const HomeBanner = () => {
    return (
        <div className="home-banner">
            <Container>
                <Row>
                    <Col md={6}>
                        <img src={bannerImage} alt="My Image" />
                    </Col>
                    <Col md={6} className="d-flex align-items-center text-start">
                        <div className='w-75'>
                            <h1 className="mb-4 font-weight-bold">Certify your English proficiency today!</h1>
                            <p className="font-weight-bold mb-4 fs-5"> <FaLaptop color="#FA811B" size={24} className='me-4' />Take the test online anytime, anywhere</p>
                            <p className="font-weight-bold mb-4 fs-5"><FaClock color="#FA811B" size={24} className='me-4' />Finish in 1 hour and get results in 2 days</p>
                            <p className="font-weight-bold fs-5"><FaSchool color="#FA811B" size={24} className='me-4' />Accepted by over 4000 institutions</p>
                            <Button className="btn-theme btn-lg mt-5">Practice Free</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomeBanner;
