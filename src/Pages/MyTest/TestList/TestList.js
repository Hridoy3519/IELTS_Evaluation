import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';
import TestSummaryCard from '../TestSummary/TestSummary';

const TestList = () => {
    const [myTests, setMyTests] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        if (user.email) {
            fetch("http://localhost:5000/tests/user", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(user),
            })
                .then((res) => res.json())
                .then((data) => setMyTests(data));
        }
    }, [user]);
    return (
        <div>
            <Navigation />
            <Container className='w-75'>
                {myTests.map((myTest) => (
                    <TestSummaryCard
                        key={myTest._id}
                        test={myTest}
                    //handleDelete={handleDelete}
                    ></TestSummaryCard>
                ))}
            </Container>
        </div>
    );
};

export default TestList;