import React from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';

const QuestionContainer = () => {
    const [userAnswer, setUserAnswer] = useState("");

    const handleAnswerChange = (event) => {
        setUserAnswer(event.target.value);
    };
    return (
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
                }}
                className="p-5"
            >
                <div className="row d-flex align-items-center">
                    <div className="col-md-5" style={{ padding: "30px" }}>
                        <h2 style={{ color: "#FA811B" }}>IELTS Writing Task Question</h2>
                        <p style={{ color: "#707070", fontSize: "18px" }}>
                            Some people think that it is better to educate boys and girls in separate schools. Others, however, believe that boys and girls benefit more from attending mixed schools. Discuss both these views and give your own opinion.
                        </p>
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
    );
};

export default QuestionContainer;