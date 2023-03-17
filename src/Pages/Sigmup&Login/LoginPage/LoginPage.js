import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import '../SignupPage/SignupPage.css'
function LoginPage() {
    const [loginData, setLoginData] = useState({});
    const { googleSignIn, logIn, errorMessage } = useAuth();

    const location = useLocation();
    const history = useNavigate();

    const handleLogin = (e) => {
        logIn(loginData.email, loginData.password, location, history);
    };

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;

        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    };

    const handleGoogleSignIn = (e) => {
        googleSignIn(history, location);
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
                <div className='signup-container' >
                    <h2 className='signup-header mb-5'>Login</h2>
                    <Form style={{ margin: '0 auto' }} className="d-flex justify-content-center">
                        <div className='w-50'>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" name='email' onBlur={handleOnBlur} placeholder="Enter email" required />
                            </Form.Group>

                            <Form.Group controlId="formBasicConfirmEmail">
                                <Form.Control type="password" name='password' onBlur={handleOnBlur} placeholder="Password" required />
                            </Form.Group>

                        </div>
                    </Form>
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

                    <Link to="/signup">
                        < Button
                            style={{
                                backgroundColor: 'white',
                                color: '#FA811B',
                                border: 'none',
                                textDecoration: 'none',
                                cursor: 'pointer',
                                fontWeight: 'bold',
                            }}
                        >
                            CREATE AN ACCOUNT
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
                        <Button variant="light" className="cancel-btn mr-auto">
                            Cancel
                        </Button>

                        <Button variant="primary"
                            onClick={(e) => {
                                e.preventDefault();
                                handleLogin();
                            }}
                        >LOG IN</Button>
                    </div>
                </div>
            </Container >
        </div >
    );
}

export default LoginPage;
