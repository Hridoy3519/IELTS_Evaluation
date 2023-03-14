import React, { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';

const QuestionContainer = () => {
    const [userAnswer, setUserAnswer] = useState("");
    const [question, setQuestion] = useState("");
    const [band_score, setBandScore] = useState("");
    const [feedback, setFeedback] = useState("");
    const [showFeedback, setShowFeedback] = useState(false)
    const handleAnswerChange = (event) => {
        setUserAnswer(event.target.value);
    };

    const handleSubmit = (e) => {
        setShowFeedback(true)
        console.log("hello")
    };

    const [time, setTime] = useState(2400); // 40 minutes in seconds

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prevTime) => prevTime - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const data = { question, answer: userAnswer }
        fetch("http://localhost:5000/test-band-score", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data.band_score) {

                    setBandScore(data.band_score);
                    setFeedback(data.feedback);
                }
            });
    }, [showFeedback]);

    useEffect(() => {
        fetch("http://localhost:5000/test-questions")
            .then(res => res.json())
            .then(data => setQuestion(data.data))
    }, []);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return (
        <div>
            <Container
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                }}>
                <div
                    style={{
                        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "start",
                    }}
                    className="p-5"
                >
                    <div style={{ float: "left", marginRight: "20px" }}>
                        <div
                            style={{
                                backgroundColor: "#FF4D4F", // shade of red
                                color: "#FFFFFF", // white text
                                padding: "10px",
                                borderRadius: "10px",
                                display: "inline-block",
                            }}
                        >
                            <span style={{ fontSize: "32px", fontWeight: "bold" }}>
                                {minutes < 10 ? "0" + minutes : minutes}
                            </span>
                            <span style={{ fontSize: "20px" }}>:</span>
                            <span style={{ fontSize: "32px", fontWeight: "bold" }}>
                                {seconds < 10 ? "0" + seconds : seconds}
                            </span>
                        </div>
                    </div>
                    <div className="row d-flex align-items-center">
                        <div className="col-md-5" style={{ padding: "30px" }}>
                            <div>
                                <h2 style={{ color: "#FA811B" }}>IELTS Writing Task Question</h2>
                                <p style={{ color: "#707070", fontSize: "18px" }}>
                                    {question}
                                </p>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div
                                style={{
                                    backgroundColor: "#f2f2f2",
                                    padding: "20px",
                                    borderRadius: "10px",
                                    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
                                }}
                            >
                                <h2>Your Answer</h2>
                                <textarea
                                    value={userAnswer}
                                    onChange={handleAnswerChange}
                                    placeholder="Write your answer here"
                                    rows={10}
                                    style={{
                                        width: "100%",
                                        padding: "10px",
                                        borderRadius: "5px",
                                        borderColor: "#ccc",
                                    }}
                                />
                                <div style={{ marginTop: "10px", textAlign: "right" }}>
                                    <button
                                        type="button"
                                        className="btn btn-theme"
                                        style={{ marginRight: "10px" }}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleSubmit();
                                        }}
                                    >
                                        Submit
                                    </button>
                                    <button type="button" className="btn btn-theme">
                                        Clear
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            {
                showFeedback ?
                    <Container className='my-2'>
                        <div>
                            <h1>Band Score : {band_score}</h1>
                            <p>Feedback : {feedback}</p>
                        </div>
                    </Container> : ""
            }

        </div>
    );
};

export default QuestionContainer;