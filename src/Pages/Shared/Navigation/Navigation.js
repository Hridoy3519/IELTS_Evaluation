import React, { useState } from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaUser } from 'react-icons/fa';
// import useAuth from "../../../Hooks/useAuth";
import "./Navigation.css";
import useAuth from "../../../Hooks/useAuth";
const Navigation = () => {
    //fixed navbar
    const [isFixed, setIsFixed] = useState(false);
    const { user, logOut } = useAuth();

    window.addEventListener("scroll", function () {
        const scrollHeight = window.pageYOffset;
        const navHeight = 100;
        if (scrollHeight > navHeight) {
            setIsFixed(true);
        } else {
            setIsFixed(false);
        }
    });
    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            className={`mobile-fixed ${isFixed ? "fixed-nav" : ""}`}
            style={{ boxShadow: "0 2px 4px rgba(0,0,0,.2)" }}
        >
            <Container>
                <Navbar.Brand href="#home"><span style={{ color: "red", fontWeight: "bold" }}>Automated</span> English Test</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto nav">
                        <Nav.Link as={NavLink} style={{ color: "#333", fontWeight: "bold", marginRight: "2rem" }} to="/home">
                            Home
                        </Nav.Link>
                        <Nav.Link
                            as={NavLink}
                            style={{ color: "#333", fontWeight: "bold", marginRight: "2rem" }}
                            className="nav-link"
                            to="/test"
                        >
                            Free Test
                        </Nav.Link>
                        <Nav.Link
                            as={NavLink}
                            style={{ color: "#333", fontWeight: "bold", marginRight: "2rem" }}
                            className="nav-link"
                            to="/#products"
                        >
                            Instituitions
                        </Nav.Link>
                        <Nav.Link
                            as={NavLink}
                            style={{ color: "#333", fontWeight: "bold", marginRight: "2rem" }}
                            className="nav-link"
                            to="/#products"
                        >
                            Research
                        </Nav.Link>
                        <NavDropdown
                            title={<FaUser className="profile-icon" />}
                            id="basic-nav-dropdown"
                            align="end"
                            style={{ color: '#333', fontWeight: 'bold', marginRight: '2rem' }}
                        >
                            <NavDropdown.Item as={NavLink} to="/my-test">
                                <Nav.Link
                                    as={NavLink}
                                    style={{ color: "#333", fontWeight: "bold", marginRight: "2rem" }}
                                    className="nav-link"
                                    to="/TestList"
                                >
                                    My Test
                                </Nav.Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/my-profile">
                                My Profile
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            {user.email ? (
                                <NavDropdown.Item as={NavLink} onClick={logOut}>
                                    LOG OUT
                                </NavDropdown.Item>
                            ) : (
                                <NavDropdown.Item as={NavLink} to="/signup">
                                    LOG IN
                                </NavDropdown.Item>
                            )}

                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;


