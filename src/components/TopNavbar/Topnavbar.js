import React ,{ Component } from "react";
import './topnavbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

class Topnavbar extends Component {
    render() { 
        return <Container> 
            <Navbar className="justify-content-end" fixed="top" bg="danger" variant="light">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto ">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">About</Nav.Link>
                <Nav.Link href="#pricing">Contact Us</Nav.Link>
                <NavDropdown title="Our Product" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Menu</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Tortillas</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Sweets</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Special Orders</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>
      </Container>;
        
    }
}

export default Topnavbar;