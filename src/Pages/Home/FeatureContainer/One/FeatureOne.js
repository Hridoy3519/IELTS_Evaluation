import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import convenient from '../../../Image/convenient.svg';
import fast from '../../../Image/fast.svg'
import affordable from '../../../Image/affordable.svg';
const FeatureOne = () => {
    return (
        <Container className='w-75 py-5'>
            <h1 className="fw-bold fs-1 my-5">On demand, anywhere in the world</h1>
            <CardGroup className='py-5'>
                <Card className='border-0'>
                    <Card.Img variant="top" src={convenient} style={{ height: '80px' }} />
                    <Card.Body>
                        <Card.Title className='my-3'>Convenient</Card.Title>
                        <Card.Text className='fs-5'>
                            Take the test online anywhere, anytime—no traveling to a test center or appointment needed
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='border-0'>
                    <Card.Img variant="top" src={fast} style={{ height: '80px' }} />
                    <Card.Body>
                        <Card.Title className='my-3'>Fast</Card.Title>
                        <Card.Text className='fs-5'>
                            Get your results within 48 hours of completing the test, and share it with anyone, immediately
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='border-0'>
                    <Card.Img variant="top" src={affordable} style={{ height: '80px' }} />
                    <Card.Body>
                        <Card.Title className='my-3'>Affordable</Card.Title>
                        <Card.Text className='fs-5'>
                            A fraction of the cost of other tests. Send your scores to an unlimited number of institutions for free!
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </Container>

    );
};

export default FeatureOne;