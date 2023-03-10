import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './SignupPage.css'
function SignUpPage() {
    const { googleSignIn, handleRegisterUser, setErrorMessage, errorMessage } = useAuth();
    const [loginData, setLoginData] = useState({});
    const history = useNavigate()

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;

        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    };

    const handleRegister = (e) => {
        console.log(loginData.email, loginData.name)
        if (loginData.email !== loginData.confirmEmail) {
            console.log("Hello")
            setErrorMessage("Email Do not Match");
            return;
        }
        handleRegisterUser(
            loginData.email,
            loginData.password,
            loginData.name,
            history
        );
    };

    const handleGoogleSignIn = (e) => {
        googleSignIn(history);
    };
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                background: "#F0F0F0"
            }}>
            <Container className="my-5 py-5 shadow rounded d-flex justify-content-center" style={{ background: "#ffffff" }}>
                <div className='signup-container'>
                    <h2 className='signup-header'>Create an account</h2>
                    <p className="mt-4 mb-5 signup-subheader">To access your free practice test</p>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="email" name='email' onChange={handleOnBlur} placeholder="Enter email" required />
                                </Form.Group>

                                <Form.Group controlId="formBasicConfirmEmail">
                                    <Form.Control type="email" name="confirmEmail" onChange={handleOnBlur} placeholder="Confirm email" required />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formBasicAge">
                                    <Form.Control name="name" onChange={handleOnBlur} placeholder="Enter Name" required />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control type="password" onChange={handleOnBlur} name="password" placeholder="Password" required />
                                </Form.Group>
                            </Col>
                        </Row>
                        <br />
                        <div className="text-center">
                            <Button className="google-btn" onClick={handleGoogleSignIn}>
                                <img
                                    width="20px"
                                    alt="Google sign-in"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                                />
                                SIGN UP WITH GOOGLE
                            </Button>
                        </div>

                        <Link to="/login">
                            <Button
                                style={{
                                    backgroundColor: 'white',
                                    color: '#FA811B',
                                    border: 'none',
                                    textDecoration: 'none',
                                    cursor: 'pointer',
                                    fontWeight: 'bold',
                                }}
                            >

                                ALREADY HAVE AN ACCOUNT? LOG IN
                            </Button>
                        </Link>

                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                borderTop: '1px solid #ddd',
                                paddingTop: '20px',
                                marginTop: '40px',
                                width: '100%',
                            }}
                        >
                            <Link to="/">
                                <Button variant="light" className="cancel-btn mr-auto">
                                    Cancel
                                </Button>
                            </Link>

                            <Button variant="primary"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleRegister();
                                }}
                            >Register</Button>
                        </div>
                    </Form>
                </div>
            </Container>
        </div>
    );
}

export default SignUpPage;
