import React, { Component } from "react";
import './topnavbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import papelred from '../../images/papelred.png';
import pnlLogo from '../../images/PNLdistlogo.png';
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

class Topnavbar extends Component {
    render() {
        return (

            <Navbar className="topnav " variant="dark" expand="lg" >
                <Container fluid className="topbody" >
                    <Navbar.Brand>
                        <Image src={papelred} className="navImages" alt='icon' />
                    </Navbar.Brand>
                    <Navbar.Brand className="justify-content-end" >
                        <Image src={pnlLogo} className="navImagesLogo" alt='pnl logo' height='100em' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <NavbarCollapse className="justify-content-end" >
                        <Nav >
                            <Nav.Link href="/"> Home </Nav.Link>
                            <Nav.Link href="/#aboutpnl">About</Nav.Link>
                            <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
                            <NavDropdown title="Our Products" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/Menu">Menu</NavDropdown.Item>
                                <NavDropdown.Item href="/Tortillas">Tortillas</NavDropdown.Item>
                                <NavDropdown.Item href="/Sweets">Sweets</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>
        );
    }
}

export default Topnavbar;