import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {
    return (
        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home"> The New York Times</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">All News</Nav.Link>
                        <Nav.Link href="/">Breaking News</Nav.Link>
                       
                    </Nav>
                   
                    <div className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;