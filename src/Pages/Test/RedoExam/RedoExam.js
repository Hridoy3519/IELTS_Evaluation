import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation';
import QuestionContainer from '../QuestionContainer/QuestionContainer';

const RedoExam = () => {
    const { id } = useParams()
    const [question, setQuestion] = useState();
    const [showFeedback, setShowFeedback] = useState(false)
    var apiCalled = false;
    const updateStateData = (newData) => {
        setShowFeedback(newData);
    }
    useEffect(() => {
        if (!apiCalled) {
            apiCalled = true
            fetch(`https://ielts-evaluation-server-side.vercel.app/tests/${id}`)
                .then((res) => res.json())
                .then((data) => setQuestion(data.question));
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
                ></QuestionContainer>
            </div>
        </div>
    );
};

export default RedoExam;