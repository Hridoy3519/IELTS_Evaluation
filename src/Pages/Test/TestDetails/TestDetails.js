import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation';
import QuestionContainer from '../QuestionContainer/QuestionContainer';

const TestDetails = () => {
    const { id } = useParams()
    const [question, setQuestion] = useState("");
    const [testDetails, setTestDetails] = useState({});
    const [showFeedback, setShowFeedback] = useState(true)
    var apiCalled = false;
    const updateStateData = (newData) => {
        setShowFeedback(newData);
    }
    useEffect(() => {
        if (!apiCalled) {
            apiCalled = true
            fetch(`http://localhost:5000/tests/${id}`)
                .then((res) => res.json())
                .then((data) => {
                    setQuestion(data.question)
                    setTestDetails(data)
                });
        }
    }, []);
    return (
        <div>
            <div>
                <Navigation />
                <QuestionContainer
                    question={question}
                    showFeedback={showFeedback}
                    onPressSubmit={updateStateData}
                    testDetails={testDetails}
                ></QuestionContainer>
            </div>
        </div>
    );
};

export default TestDetails;
