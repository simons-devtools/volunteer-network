import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#">VolunteerNetx</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto link-control">
                        <Nav.Link><Link to="/home">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/add-events">Add-Events</Link></Nav.Link>
                        <NavDropdown title="Services" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#drop1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#drop2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#drop3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#drop4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link><Link to="/dashboard">Dashboard</Link></Nav.Link>
                    </Nav>
                    <Nav className="link-control">
                        <Nav.Link><Link to="/learn-more">Learn-more</Link></Nav.Link>
                        <Nav.Link><Link to="/features">Features</Link></Nav.Link>
                        <Nav.Link><Link to="/documentation">Documentation</Link></Nav.Link>
                        <Nav.Link href="#deets">
                            <button className="simple-btn">Register</button>
                            <button className="simple-btn">Admin</button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;