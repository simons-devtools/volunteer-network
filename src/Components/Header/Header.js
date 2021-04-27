import React from 'react';
import Logo from '../../images/logos/logo.png';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <Container>
            <Navbar collapseOnSelect expand="md">
                <Navbar.Brand>
                    <Link to="/home"><img src={Logo} className="logo" alt="logo" /></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto link-control">
                        {/* <Link to="/features">Features</Link> */}
                        {/* <Link to="/documentation">Documentation</Link> */}
                    </Nav>
                    <Nav className="link-control">
                        <Link to="/home">Home</Link>
                        <Link to="/add-events">Add-Events</Link>
                        <NavDropdown title="Services" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#drop1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#drop2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#drop3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#drop4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Link to="/dashboard">Dashboard</Link>
                        <Nav.Link>
                            <button className="simple-btn">Register</button>
                            <button className="simple-btn">Admin</button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Header;