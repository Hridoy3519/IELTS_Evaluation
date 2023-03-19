import { async } from '@firebase/util';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const QuestionContainer = (props) => {
    const { question, showFeedback, onPressSubmit } = props
    const { user } = useAuth()
    const [userAnswer, setUserAnswer] = useState("");
    const [band_score, setBandScore] = useState("");
    const [feedback, setFeedback] = useState("");
    const [uploadedImage, setUploadedImage] = useState("");
    const handleAnswerChange = (event) => {
        setUserAnswer(event.target.value);
    };

    const [time, setTime] = useState(2400); // 40 minutes in seconds

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prevTime) => prevTime - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const handleSubmit = (e) => {
        console.log("IIII")
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
                if (data.band_score.length > 0) {
                    console.log("Band : ", data.band_score)
                    setBandScore(data.band_score);
                    setFeedback(data.feedback);
                    const testResult = { user: user.email, question, bandScore: data.band_score, feedback: data.feedback, demoAnswer: "" }
                    onPressSubmit(true)
                    storeUserTestResult(testResult)
                }
            });
    };


    const storeUserTestResult = (testResult) => {
        fetch("http://localhost:5000/addNewTest", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(testResult),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    }

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader()
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result)
            }

            fileReader.onerror = (error) => {
                reject(error)
            }
        })
    }
    const uploadImage = async (e) => {
        const file = e.target.files[0]

        const formData = new FormData();
        formData.append("file", file);

        fetch("http://127.0.0.1:8000/uploadfile", {
            method: "POST",
            body: formData,
        })
            .then(response => response.json())
            .then(data => setUserAnswer(data.PredictionByModel))
            .catch(error => console.error(error));
        // const base64 = await convertToBase64(file)
        // setUploadedImage(base64);
    }
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
                                    <input type="file" onChange={(e) => {
                                        uploadImage(e)
                                    }}></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={uploadedImage} alt="" />
                </div>
            </Container>

            {
                showFeedback ?

                    props?.testDetails ? <Container className='my-2'>
                        <div>
                            <h1>Band Score : {props?.testDetails.bandScore}</h1>
                            <p>Feedback : {props?.testDetails.feedback}</p>
                            <p>Demo Answer : </p>
                        </div>
                    </Container> : <Container className='my-2'>
                        <div>
                            <h1>Band Score : {band_score}</h1>
                            <p>Feedback : {feedback}</p>
                            <p>Demo Answer : </p>
                        </div>
                    </Container> : ""
            }

        </div>
    );
};

export default QuestionContainer;