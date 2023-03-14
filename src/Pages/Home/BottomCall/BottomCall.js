import React from 'react';
import { Button, Container } from 'react-bootstrap';

const BottomCall = () => {
    return (
        <Container className="d-flex justify-content-center my-5 py-5 border-top border-bottom">
            <div className='w-75 d-flex justify-content-between align-items-center'>
                <h1 className="fw-bold mb-0">Certify your English proficiency</h1>
                <Button className="btn-theme btn-lg">Practice Free</Button>
            </div>
        </Container>
    );
};

export default BottomCall;