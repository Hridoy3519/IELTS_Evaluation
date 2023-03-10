import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import quickSetup from '../../../Image/quick_setup.svg';
import adaptiveTest from '../../../Image/adaptive_test.svg';
import videoInterView from '../../../Image/video_interview.svg'
const FeatureTwo = () => {
    return (
        <Container className='w-75 py-5'>
            <h1 className="fw-bold fs-1 my-5">On demand, anywhere in the world</h1>
            <CardGroup className='py-5'>
                <Card className='border-0'>
                    <Card.Img variant="top" src={quickSetup} style={{ height: '80px' }} />
                    <Card.Body>
                        <Card.Title className='my-3'>Quick setup (5 minutes)</Card.Title>
                        <Card.Text className='fs-5'>
                            An introduction that walks you through the test rules and requirements
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='border-0'>
                    <Card.Img variant="top" src={adaptiveTest} style={{ height: '80px' }} />
                    <Card.Body>
                        <Card.Title className='my-3'>Adaptive Test</Card.Title>
                        <Card.Text className='fs-5'>
                            A series of different questions that evaluate your English skills 45 minutes
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='border-0'>
                    <Card.Img variant="top" src={videoInterView} style={{ height: '80px' }} />
                    <Card.Body>
                        <Card.Title className='my-3'>Writing and speaking sample</Card.Title>
                        <Card.Text className='fs-5'>
                            Open-ended prompts that are shared with institutions alongside your score 10 minutes
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </Container>
    );
};

export default FeatureTwo;