import React from 'react';
import { Container } from 'react-bootstrap';
import Navigation from '../../Shared/Navigation/Navigation';
import TestSummaryCard from '../TestSummary/TestSummary';

const TestList = () => {
    return (
        <div>
            <Navigation />
            <Container className='w-75'>
                <TestSummaryCard />
            </Container>
        </div>
    );
};

export default TestList;