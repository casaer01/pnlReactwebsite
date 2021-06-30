import React ,{ Component } from "react";
import './topnavbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown';

import Container from 'react-bootstrap/Container';
import papelred from '../../images/papelred.png';
import pnlLogo from '../../images/PNLdistlogo.png';

class Topnavbar extends Component {
    render() { 
        return (
        <Container fluid className="topbody" > 
            <Navbar className="topnav justify-content-between"  variant="dark" expand="lg" >
                <img src={papelred} alt='icon' />
                <img src={pnlLogo} alt='pnl logo' height='100em' />
                <Nav className="justify-content-end">
                    <Nav.Link href="/"> Home </Nav.Link>
                    <Nav.Link href="/#aboutpnl">About</Nav.Link>
                    <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
                    <NavDropdown title="Our Products" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/Menu">Menu</NavDropdown.Item>
                        <NavDropdown.Item href="/Tortillas">Tortillas</NavDropdown.Item>
                        <NavDropdown.Item href="/Sweets">Sweets</NavDropdown.Item>
                        {/* <NavDropdown.Divider />
                        <NavDropdown.Item href="/Orders">Special Orders</NavDropdown.Item> */}
                    </NavDropdown>
                </Nav>
            </Navbar>
        </Container>);
    }
}

export default Topnavbar;