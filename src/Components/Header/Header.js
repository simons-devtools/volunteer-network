import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#">VolunteerNetx</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#tool">Tools</Nav.Link>
                        <Nav.Link href="#project">Projects</Nav.Link>
                        <NavDropdown title="Services" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#drop1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#drop2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#drop3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#drop4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={1} href="#learn">Learn-more</Nav.Link>
                        <Nav.Link eventKey={2} href="#feature">Features</Nav.Link>
                        <Nav.Link eventKey={3} href="#documentation">Documentation</Nav.Link>
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