import React, { useEffect, useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import QuestionContainer from '../QuestionContainer/QuestionContainer';

const Test = () => {
    const [question, setQuestion] = useState();
    const [showFeedback, setShowFeedback] = useState(false)
    var apiCalled = false;
    const updateStateData = (newData) => {
        setShowFeedback(newData);
    }
    useEffect(() => {
        if (!apiCalled) {
            apiCalled = true
            fetch("http://localhost:5000/test-questions")
                .then(res => res.json())
                .then(data => setQuestion(data.data))
        }
    }, []);
    return (
        <div>
            <Navigation />
            <QuestionContainer
                question={question}
                showFeedback={showFeedback}
                onPressSubmit={updateStateData}
            ></QuestionContainer>
        </div>
    );
};

export default Test;